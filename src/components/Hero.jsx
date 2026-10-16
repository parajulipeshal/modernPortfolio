import { useEffect, useRef, useState } from 'react';
import { profile, stats } from '../data.js';

function useNow(intervalMs = 15000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

function LocalTime({ timeZone, now }) {
  const text = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(now);
  return <time>{text}</time>;
}

// Three drifting mountain-ridge layers drawn on a canvas, colored from CSS tokens.
function Ridge() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rand = (s) => () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    const ridge = (seed, n, rough) => {
      const r = rand(seed), p = []; let y = 0.5;
      for (let i = 0; i <= n; i++) {
        y += (r() - 0.5) * rough; y = Math.max(0.05, Math.min(0.95, y));
        if (r() > 0.85) y -= rough * 0.9;
        p.push(Math.max(0.02, y));
      }
      return p;
    };
    const layers = [
      { s: 7, n: 60, r: 0.22, top: 0.05, h: 0.55, v: '--ridge-1', sp: 0.004 },
      { s: 31, n: 44, r: 0.26, top: 0.3, h: 0.55, v: '--ridge-2', sp: 0.008 },
      { s: 97, n: 30, r: 0.3, top: 0.55, h: 0.45, v: '--ridge-3', sp: 0.014 },
    ].map((l) => ({ ...l, pts: ridge(l.s, l.n, l.r) }));

    let t = 0, raf = 0;
    const draw = () => {
      const w = c.clientWidth, h = c.clientHeight, dpr = window.devicePixelRatio || 1;
      if (c.width !== w * dpr || c.height !== h * dpr) { c.width = w * dpr; c.height = h * dpr; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cs = getComputedStyle(document.documentElement);
      layers.forEach((l) => {
        ctx.fillStyle = cs.getPropertyValue(l.v).trim();
        ctx.beginPath(); ctx.moveTo(0, h);
        const step = w / (l.n - 6), off = (t * l.sp * w) % step, shift = Math.floor((t * l.sp * w) / step);
        for (let i = 0; i <= l.n; i++) {
          const p = l.pts[(i + shift) % l.pts.length];
          ctx.lineTo(i * step - off, h * l.top + p * h * l.h);
        }
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
      });
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = cs.getPropertyValue('--accent').trim();
      ctx.beginPath(); ctx.arc(w * 0.82, h * 0.22, Math.min(26, h * 0.12), 0, Math.PI * 2); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      if (!reduce) { t += 0.016; raf = requestAnimationFrame(draw); }
    };
    draw();
    const onResize = () => reduce && draw();
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas id="ridge" ref={ref} aria-hidden="true" />;
}

export function Hero() {
  const now = useNow();
  const [a, b] = profile.bases;
  return (
    <section className="hero">
      <div className="wrap">
        <div className="bases" aria-label="Home bases and local times">
          <span className="base"><b>{a.place}</b> <LocalTime timeZone={a.timeZone} now={now} /></span>
          <span className="link" aria-hidden="true">⟷</span>
          <span className="base"><b>{b.place}</b> <LocalTime timeZone={b.timeZone} now={now} /></span>
        </div>
        <h1>{profile.firstName}<br /><span className="last">{profile.lastName}.</span></h1>
        <div className="deva" lang="ne">{profile.nepaliName}</div>
        <p className="lede">
          Computer Software Engineering <strong>(Honors)</strong> student at Snow College. I build tech communities,
          from Nepal's first code debugging competition to a college computer science club in Utah.
        </p>
        <div className="cta">
          <a className="btn primary" href="#experience">See my experience</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>
      <Ridge />
    </section>
  );
}

export function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        <dl>
          {stats.map((s) => (
            <div key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>
          ))}
        </dl>
      </div>
    </div>
  );
}
