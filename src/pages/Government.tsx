              <option value="Municipality">Municipalities</option>
              <option value="Component City">Component Cities</option>
              <option value="Highly Urbanized City">
                Highly Urbanized Cities
              </option>
            </select>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Showing {filtered.length} of {lgus.length} LGUs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {filtered.map(lgu => {
            const isOpen = openLGU === lgu.name;
            const isResearched = lgu.name === "Alcantara" || lgu.name === "Alcoy";

            return (
              <article
                key={lgu.name}
                className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenLGU(current =>
                      current === lgu.name ? null : lgu.name
                    )
                  }
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 hover:bg-blue-50 transition"
                >
                  <span className="text-xs text-blue-700 font-semibold uppercase">
                    {lgu.type}
                  </span>

                  <div className="flex justify-between items-center gap-3 mt-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {lgu.name}
                    </h3>
                    <span className="text-2xl text-blue-700">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {isResearched && (
                    <span className="inline-block mt-3 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                      Research in progress
                    </span>
                  )}

                  <p className="text-sm text-slate-500 mt-3">
                    {isResearched
                      ? "Official records and sources available."
                      : "Local profile awaiting research."}
                  </p>

                  <span className="inline-block text-blue-700 font-semibold mt-5">
                    {isOpen ? "Close profile ↑" : "Open profile →"}
                  </span>
                </button>

                {isOpen && (
                  lgu.name === "Alcantara"
                    ? <AlcantaraProfile />
                    : lgu.name === "Alcoy"
                    ? <AlcoyProfile />
                    : <PendingProfile name={lgu.name} />
                )}
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">
            No matching local governments found.
          </p>
        )}

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-3">
            Follow Public Money
          </h2>
          <p className="text-slate-700 mb-6">
            Examine available Cebu budget and project
            records. Proposed allocations must be
            distinguished from enacted appropriations
            and actual expenditures.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={budgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-5 py-3 rounded-lg"
            >
              Cebu Budget Portal
            </a>

            <a
              href={politiciansUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-blue-900 text-blue-900 px-5 py-3 rounded-lg"
            >
              Know Your Politicians
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
