
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              BetterCebu
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              An independent citizen-led transparency initiative
              making public budgets, government projects,
              elected officials, and local government information
              accessible to every Cebuano.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Explore Public Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://cebu-city-budget-transparency.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  Cebu Budget Transparency
                </a>
              </li>
              <li>
                <a
                  href="https://knowyourpoliticians.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  Know Your Politicians
                </a>
              </li>
              <li>
                <a
                  href="https://bettergov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  BetterGov.ph
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              About BetterCebu
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              BetterCebu is an independent civic information
              platform. It is not an official government website.
              Public records should be checked against their
              original sources.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-3">
          <span>BetterCebu | Citizen-led transparency</span>
          <span>
            Public information. Public accountability.
          </span>
        </div>
      </div>
    </footer>
  );
}
