import { profile } from '../data.js';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education', hideSm: true },
  { href: '#skills', label: 'Skills', hideSm: true },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label={`${profile.firstName} ${profile.lastName} home`}>
          <svg viewBox="0 0 16 20" aria-hidden="true">
            <path d="M1 1 L14 10 H6 L14 19 H1 Z" fill="var(--accent)" stroke="var(--accent-2)" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          {profile.firstName.toLowerCase()}
        </a>
        <nav aria-label="Main">
          <ul>
            {navItems.map((n) => (
              <li key={n.href} className={n.hideSm ? 'hide-sm' : undefined}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Section({ id, label, children }) {
  return (
    <section className="row" id={id}>
      <div className="wrap">
        <div className="label"><span>/</span> {label}</div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
        <span>{profile.domain}</span>
      </div>
    </footer>
  );
}
