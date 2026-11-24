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
          <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl">
            BC
          </div>

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
