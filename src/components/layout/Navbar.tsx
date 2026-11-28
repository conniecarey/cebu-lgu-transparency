import { Link } from 'react-router';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto px-4 py-2 text-xs font-semibold tracking-widest uppercase">
          Independent Citizen-Led Transparency Initiative
        </div>
      </div>

      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <svg viewBox="0 0 64 64" className="w-12 h-12 shrink-0" aria-hidden="true">
  <rect width="64" height="64" rx="14" fill="#1745dc"/>
  <circle cx="29" cy="28" r="17" fill="none" stroke="white" strokeWidth="4"/>
  <path d="M41 41L52 52" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  <path d="M33 13L36 17L33 22L31 28L27 33L25 39L21 42L20 37L23 30L25 24L29 19L30 14Z" fill="white"/>
  <circle cx="40" cy="23" r="2" fill="white"/>
  <circle cx="19" cy="17" r="1.5" fill="white"/>
</svg>

          <div>
            <div className="text-2xl font-extrabold text-blue-950">
              BetterCebu
            </div>
            <p className="text-sm text-gray-600">
              Know your government. Follow your money.
            </p>
          </div>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-5 text-sm font-semibold"
        >
          <Link to="/" className="text-blue-900 hover:text-blue-600">
            Home
          </Link>
          <Link to="/government" className="text-blue-900 hover:text-blue-600">
            Government
          </Link>
          <Link to="/congress" className="text-blue-900 hover:text-blue-600">Congresspeople</Link>
          <a
            href="https://cebu-city-budget-transparency.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-600"
          >
            Cebu Budgets
          </a>
          <a
            href="https://knowyourpoliticians.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-600"
          >
            Know Your Politicians
          </a>
        </nav>
      </div>
    </header>
  );
}
