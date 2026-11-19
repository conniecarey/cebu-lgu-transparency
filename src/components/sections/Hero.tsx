
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-5">
            Independent Citizen-Led Transparency Initiative
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            BetterCebu
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Know your government.
            <br />
            Follow your money.
          </h2>

          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Explore public budgets, government projects, elected
            officials, and public services across Cebu Province,
            its cities, municipalities, and congressional districts.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://cebu-city-budget-transparency.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Explore Cebu Budgets
            </a>

            <a
              href="https://knowyourpoliticians.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Know Your Politicians
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
