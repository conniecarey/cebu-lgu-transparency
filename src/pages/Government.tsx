
import { useState } from "react";

const municipalities = [
  "Alcantara", "Alcoy", "Alegria", "Aloguinsan",
  "Argao", "Asturias", "Badian", "Balamban",
  "Bantayan", "Barili", "Boljoon", "Borbon",
  "Carmen", "Catmon", "Compostela", "Consolacion",
  "Cordova", "Daanbantayan", "Dalaguete", "Dumanjug",
  "Ginatilan", "Liloan", "Madridejos", "Malabuyoc",
  "Medellin", "Minglanilla", "Moalboal", "Oslob",
  "Pilar", "Pinamungajan", "Poro", "Ronda",
  "Samboan", "San Fernando", "San Francisco",
  "San Remigio", "Santa Fe", "Santander",
  "Sibonga", "Sogod", "Tabogon", "Tabuelan",
  "Tuburan", "Tudela"
];

const componentCities = [
  "Bogo City", "Carcar City", "Danao City",
  "Naga City", "Talisay City", "Toledo City"
];

const highlyUrbanizedCities = [
  "Cebu City", "Lapu-Lapu City", "Mandaue City"
];

type LGUType = "Municipality" | "Component City" | "Highly Urbanized City";

const lgus: { name: string; type: LGUType }[] = [
  ...municipalities.map(name => ({
    name,
    type: "Municipality" as const
  })),
  ...componentCities.map(name => ({
    name,
    type: "Component City" as const
  })),
  ...highlyUrbanizedCities.map(name => ({
    name,
    type: "Highly Urbanized City" as const
  }))
];

export default function Government() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
const [expandedLGU, setExpandedLGU] = useState<string | null>(null);
  const filtered = lgus.filter(lgu => {
    const matchesSearch = lgu.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || lgu.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-blue-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-300 text-sm uppercase tracking-widest mb-3">
            BetterCebu / Government Directory
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Find Your Government
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl">
            Explore Cebu's local governments, research public
            officials, and access available transparency records.
            Independent civic information, not an official
            government website.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            ["44", "Municipalities"],
            ["6", "Component Cities"],
            ["3", "Highly Urbanized Cities"],
            ["7", "Provincial Congressional Districts"]
          ].map(([number, label]) => (
            <div key={label} className="bg-white border rounded-xl p-5">
              <div className="text-3xl font-bold text-blue-900">
                {number}
              </div>
              <div className="text-sm text-slate-600 mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Search Cebu LGUs
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Cebu City, Argao, Danao..."
              aria-label="Search local governments"
              className="border rounded-lg px-4 py-3 flex-1"
            />

            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              aria-label="Filter local government type"
              className="border rounded-lg px-4 py-3"
            >
              <option value="All">All LGUs</option>
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

        <
<div className="grid md:grid-cols-3 gap-4 items-start">
  {filtered.map(lgu => {
    const isExpanded = expandedLGU === lgu.name;

    return (
      <article
        key={lgu.name}
        className={`bg-white border rounded-xl overflow-hidden transition-all ${
          isExpanded
            ? "border-blue-500 shadow-lg"
            : "border-slate-200 hover:shadow-md"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            setExpandedLGU(isExpanded ? null : lgu.name)
          }
          aria-expanded={isExpanded}
          className="w-full text-left p-6"
        >
          <span className="text-xs text-blue-700 font-semibold uppercase">
            {lgu.type}
          </span>

          <div className="flex items-center justify-between gap-3 mt-2">
            <h3 className="text-xl font-bold text-slate-900">
              {lgu.name}
            </h3>

            <span className="text-2xl text-blue-700">
              {isExpanded ? "−" : "+"}
            </span>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            {isExpanded
              ? "Click to close government information"
              : "Click to explore government information"}
          </p>
        </button>

        {isExpanded && (
          <div className="px-6 pb-6 border-t border-slate-100">
            <div className="pt-5 space-y-5">
              <div>
                <h4 className="font-bold text-blue-950">
                  Local Government Profile
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {lgu.name} — {lgu.type}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Elected Officials
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Individual officials and their terms
                  have not yet been verified for this profile.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Budgets & Public Projects
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Explore available Cebu budget records.
                  LGU-specific allocations and projects
                  have not yet been linked to this card.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Transparency & Accountability
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Audit findings, procurement records,
                  ordinances, and public disclosures
                  are pending research.
                </p>
              </div>

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-xs text-amber-900">
                  Research status: Preliminary directory
                  entry. Information is not a complete
                  official LGU profile.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://cebu-city-budget-transparency.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-900 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800"
                >
                  Explore Cebu Budget Records ↗
                </a>

                <a
                  href="https://knowyourpoliticians.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-blue-900 text-blue-900 px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-50"
                >
                  Research Public Officials ↗
                </a>
              </div>
            </div>
          </div>
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
            Examine available project allocations and compare
            proposed budgets with House bill amounts.
            A project appearing in a district does not establish
            that its representative personally sponsored it.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://cebu-city-budget-transparency.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-5 py-3 rounded-lg"
            >
              Cebu Budget Portal
            </a>

            <a
              href="https://knowyourpoliticians.netlify.app/"
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
