import { useState } from 'react';
import { Section } from './Layout.jsx';
import { about, aboutNote, now, ventures, experience, education, recognition, skills, profile } from '../data.js';

export function About() {
  return (
    <Section id="about" label="About">
      <h2>From Kathmandu to Ephraim, building where I learn.</h2>
      {about.map((p, i) => <p key={i}>{p}</p>)}
      <p className="muted">{aboutNote}</p>
    </Section>
  );
}

export function Now() {
  return (
    <Section id="now" label="Now">
      <h2>What I'm doing at Snow College</h2>
      <div className="now">
        {now.map((n) => (
          <article key={n.title}>
            <span className="k">{n.since}</span>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Founded() {
  return (
    <Section id="founded" label="Founded">
      <h2>Things I started</h2>
      <div className="founded">
        {ventures.map((v) => (
          <div className="venture" key={v.name}>
            <div className="mark" aria-hidden="true">{v.mark}</div>
            <h3>{v.name}</h3>
            <span className="meta">{v.meta}</span>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const filters = [
  { key: 'all', label: `All ${experience.length}` },
  { key: 'us', label: 'United States' },
  { key: 'np', label: 'Nepal' },
];

export function Experience() {
  const [filter, setFilter] = useState('all');
  const shown = experience.filter((e) => filter === 'all' || e.country === filter);
  return (
    <Section id="experience" label="Experience">
      <h2>Experience</h2>
      <div className="filters" role="group" aria-label="Filter experience by country">
        {filters.map((f) => (
          <button key={f.key} id={`f-${f.key}`} type="button" className="chip"
            aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>
      <ol className="tl">
        {shown.map((e) => (
          <li key={e.role + e.org}>
            <div className="when">
              {e.when}
              {e.current && <><br /><span className="live">Current</span></>}
            </div>
            <div>
              <h3 className="role">{e.role}</h3>
              <div className="org">
                {e.org} <span className={`place ${e.country}`}>{e.country === 'us' ? 'US' : 'NP'}</span>
              </div>
              <p>{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="Education">
      <h2>Education</h2>
      <div className="edu">
        {education.map((e) => (
          <article key={e.school}>
            <span className="yrs">{e.years}</span>
            <h3>{e.school}</h3>
            <p className="deg">{e.degree}</p>
            <div className="gpa">
              {e.grades.map((g) => <span key={g.label} className="grade"><b>{g.value}</b><span>{g.label}</span></span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" label="Recognition">
      <h2>Honors &amp; certifications</h2>
      <div className="recog">
        {recognition.map((r) => (
          <div key={r.title}>
            <h3>{r.title}</h3><span className="yr">{r.year}</span>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <h4>{s.group}</h4>
            <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [state, setState] = useState('idle');
  const copy = () => {
    const select = () => {
      const r = document.createRange();
      r.selectNodeContents(document.getElementById('email'));
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      setState('selected');
    };
    try {
      navigator.clipboard.writeText(profile.email).then(() => {
        setState('copied'); setTimeout(() => setState('idle'), 1600);
      }, select);
    } catch { select(); }
  };
  const label = { idle: 'Copy email', copied: 'Copied', selected: 'Selected, press Ctrl+C' }[state];
  return (
    <Section id="contact" label="Contact">
      <h2>Let's talk.</h2>
      <p className="muted">Internships, collaborations, tech events or just saying hi. Email is the fastest way to reach me.</p>
      <div className="contact-card">
        <div className="email-row">
          <span className="email" id="email">{profile.email}</span>
          <button className="copy" id="copyBtn" type="button" onClick={copy}>{label}</button>
        </div>
        <div className="socials">
          {profile.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
        </div>
      </div>
    </Section>
  );
}
