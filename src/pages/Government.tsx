import { useState } from "react";
import type { ReactNode } from "react";

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

type LGUType =
  | "Municipality"
  | "Component City"
  | "Highly Urbanized City";

type LGU = {
  name: string;
  type: LGUType;
};

const lgus: LGU[] = [
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

const budgetUrl =
  "https://cebu-city-budget-transparency.netlify.app/";

const politiciansUrl =
  "https://knowyourpoliticians.netlify.app/";

const alcantaraSources = {
  executive: "https://alcantara.com.ph/executive-department",
  legislative: "https://alcantara.com.ph/legislative-department",
  audit: "https://www.coa.gov.ph/wpfd_file/alcantara-compliance-audit-report-2025/",
  municipality: "https://alcantara.com.ph/"
};

const alcantaraCouncilors = [
  "Ragen Pantuan",
  "Florencio Basilisco",
  "Litoy Lambo",
  "Tas Delima",
  "Beatriz Caburnay",
  "Joshua Catapusan",
  "Jhulie Bayato",
  "Artudio Lumapay",
  "Augustina T. Odever"
];

function SourceLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-blue-700 font-semibold text-sm hover:underline"
    >
      {children} ↗
    </a>
  );
}

function AlcantaraProfile() {
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
          First researched LGU
        </p>
        <h4 className="text-xl font-bold text-blue-950 mt-2">
          Alcantara, Cebu
        </h4>
        <p className="text-sm text-slate-700 mt-2">
          Municipality in Cebu's 7th Congressional District.
          The information below links to official public records.
        </p>
        <div className="mt-3">
          <SourceLink href={alcantaraSources.municipality}>
            Official municipal website
          </SourceLink>
        </div>
      </div>

      <section>
        <h4 className="font-bold text-blue-950 mb-3">
          Elected Officials
        </h4>
        <p className="text-xs text-slate-500 mb-3">
          Term: June 30, 2025 – June 30, 2028
        </p>

        <div className="bg-white rounded-lg border p-4 mb-3">
          <p className="text-xs uppercase text-slate-500">
            Municipal Mayor
          </p>
          <p className="font-bold text-slate-900">
            Atty. Fritz A. Lastimoso
          </p>
        </div>

        <div className="bg-white rounded-lg border p-4 mb-3">
          <p className="text-xs uppercase text-slate-500">
            Municipal Vice Mayor
          </p>
          <p className="font-bold text-slate-900">
            Larry M. Llenos
          </p>
        </div>

        <h5 className="font-semibold text-sm mb-2">
          Municipal Council Members
        </h5>

        <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
          {alcantaraCouncilors.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <p className="text-sm text-slate-600 mt-3">
          ABC President: Godofredo T. Tabanao
        </p>

        <p className="text-xs text-slate-500 mt-2">
          Names follow the municipality's published
          legislative directory. Roles and membership
          should be rechecked when records change.
        </p>

        <div className="flex flex-col gap-2 mt-3">
          <SourceLink href={alcantaraSources.executive}>
            Official executive directory
          </SourceLink>
          <SourceLink href={alcantaraSources.legislative}>
            Official legislative directory
          </SourceLink>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-blue-950 mb-2">
          Budgets and Allocations
        </h4>
        <p className="text-sm text-slate-600 mb-3">
          Explore available Cebu budget records. We are
          still validating Alcantara-specific allocations,
          appropriations and expenditures.
        </p>

       <SourceLink href={`${budgetUrl}?q=Alcantara#projects`}>
  View Alcantara Budget Records
</SourceLink>

        <p className="text-xs text-amber-800 mt-2">
          
The link opens budget records matching Alcantara. Results are based on available project descriptions and may not represent all municipal allocations or actual expenditures.

        </p>
      </section>

      <section>
        <h4 className="font-bold text-blue-950 mb-2">
          Government Projects
        </h4>
        <p className="text-sm text-slate-600">
          We are compiling project titles, locations,
          appropriations, contractors, implementation
          status and official sources. No unverified
          project amounts are displayed.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-blue-950 mb-2">
          COA Audit and Public Documents
        </h4>

        <div className="bg-white rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase text-blue-700">
            Official Audit Record
          </p>
          <h5 className="font-bold mt-2">
            2025 Compliance Audit Report
          </h5>
          <p className="text-sm text-slate-600 my-3">
            Commission on Audit review concerning the
            municipality's Local Disaster Risk Reduction
            and Management Fund allocation and alignment
            of investment and financial plans.
          </p>
          <SourceLink href={alcantaraSources.audit}>
            Read COA report
          </SourceLink>
        </div>

        <p className="text-xs text-slate-500 mt-3">
          Listing an audit does not imply an adverse
          finding. Conclusions must be based on the
          report's actual contents.
        </p>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-amber-900">
          Research status: In progress
        </p>
        <p className="text-xs text-amber-900 mt-2">
          Officials and document links are sourced.
          Municipal budget figures, project outcomes
          and other accountability indicators still
          require verification. BetterCebu is independent
          and is not an official government website.
        </p>
      </div>
    </div>
  );
}

function AlcoyProfile() {
  const councilors = ["Aresteo Lao Minoza Jr.", "Jo Anthony Anor Duran", "Chris Nino Roma De Los Santos", "Kashieca Gianni Romarate Geolin", "Ascher Patatag Medel", "Neil Tracy Quitara Plando", "Hank Sestoso Ocampo", "Jimmy Montalbo Abajon", "Violeta Duran Sestoso", "John Daryl Abajon Albano"];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Alcoy, Cebu</h4>
        <p className="text-sm text-slate-700 mt-2">2nd Congressional District · 8 barangays</p>
        <SourceLink href="https://alcoycebu.gov.ph/">Official municipal website</SourceLink>
      </div>
      <section>
        <h4 className="font-bold text-blue-950 mb-3">Elected Officials</h4>
        {[["Municipal Mayor", "Jose Eugenio B. Singson Jr."], ["Municipal Vice Mayor", "Michael Angelo D. Sestoso"]].map(([role, name]) => (
          <div key={role} className="bg-white rounded-lg border p-4 mb-3"><p className="text-xs uppercase text-slate-500">{role}</p><p className="font-bold text-slate-900">{name}</p></div>
        ))}
        <h5 className="font-semibold text-sm mb-2">Municipal Council Directory</h5>
        <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">{councilors.map(name => <li key={name}>{name}</li>)}</ul>
        <p className="text-xs text-slate-500 mt-2">Names as previously collected from the municipal directory. Specific capacities of the final two members and current membership should be confirmed against the official directory.</p>
        <SourceLink href="https://alcoycebu.gov.ph/?page_id=3617">Official elected officials directory</SourceLink>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Budgets and Allocations</h4>
        <SourceLink href={`${budgetUrl}?q=Alcoy#projects`}>View Alcoy Budget Records</SourceLink>
        <p className="text-xs text-slate-500 mt-2">Search results may not represent all allocations or actual expenditures.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">COA Audit and Public Documents</h4>
        <SourceLink href="https://www.coa.gov.ph/">Commission on Audit — official records</SourceLink>
        <p className="text-xs text-slate-500 mt-2">Consult the original annual audit report for findings and implementation of recommendations.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Public Accountability Questions</h4>
        <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2"><li>Which infrastructure projects received provincial assistance, and what is their completion status?</li><li>What corrective measures have been taken on audit recommendations?</li><li>Where can residents access procurement records, annual budgets and accomplishment reports?</li><li>What is the status of municipal waterworks improvements?</li></ul>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Municipal Contact</h4>
        <p className="text-sm text-slate-700">Municipal Hall: (032) 483-9183</p>
        <p className="text-sm text-slate-700 break-all">alcoycebu.mayor@gmail.com</p>
        <SourceLink href="https://alcoycebu.gov.ph/">Confirm current contact details</SourceLink>
      </section>
    </div>
  );
}

function AlegriaProfile() {
  const elected = ["Arnold Cuevas", "Eric Echavez", "Misshelle Lim", "Orot Homecillo", "Lenie Piñez", "Joseph Redula", "Dennis Guardiario", "Junny Rodriguez"];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Alegria, Cebu</h4>
        <p className="text-sm text-slate-700 mt-2">7th Congressional District · 9 barangays</p>
        <SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/alegria">Municipal profile and election results</SourceLink>
      </div>
      <section>
        <h4 className="font-bold text-blue-950 mb-3">Elected Officials</h4>
        <p className="text-xs text-slate-500 mb-3">2025–2028 electoral term</p>
        {[["Municipal Mayor", "Gilberto Fernandez Magallon"], ["Municipal Vice Mayor", "Verna Villordon Magallon"]].map(([role, name]) => (
          <div key={role} className="bg-white rounded-lg border p-4 mb-3"><p className="text-xs uppercase text-slate-500">{role}</p><p className="font-bold text-slate-900">{name}</p></div>
        ))}
        <h5 className="font-semibold text-sm mb-2">2025 election results — leading council candidates</h5>
        <ul className="text-sm text-slate-700 list-disc pl-5">{elected.map(name => <li key={name}>{name}</li>)}</ul>
        <SourceLink href="https://peoplaid.com/2025/05/10/alegria-cebu-election-2025-results-winners/">2025 election results</SourceLink>
        <p className="text-sm text-slate-700 mt-3">Jerome Rodriguez took office on June 29, 2026, following a council resignation. The election list above is historical, not a confirmed current roster.</p>
        <SourceLink href="https://www.cebu.gov.ph/13151/gov-pam-administers-oath-of-office-to-new-alegria-councilor-jerome-rodriguez/">Official provincial announcement</SourceLink>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Budgets and Government Projects</h4>
        <SourceLink href={`${budgetUrl}?q=Alegria#projects`}>View Alegria Budget Records</SourceLink>
        <p className="text-xs text-slate-500 mt-2">Project allocations are not necessarily actual expenditures or completed projects.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">COA Audit and Public Documents</h4>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">2025 Compliance Audit</h5>
          <p className="text-sm text-slate-600 my-2">Review of disaster risk reduction fund allocations and alignment of investment and financial plans for 2025.</p>
          <SourceLink href="https://www.coa.gov.ph/wpfd_file/alegria-compliance-audit-report-2025-2/">Official COA report</SourceLink>
        </div>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">Outstanding cash advances — 2025 audit</h5>
          <p className="text-lg font-bold text-blue-950 mt-2">₱754,290.47</p>
          <p className="text-sm text-slate-700 my-2">SunStar reported that ₱367,795.33 had remained unsettled for over ten years. Management reported demand letters, salary deductions and requests for authorized write-offs. Current recovery status requires confirmation.</p>
          <SourceLink href="https://www.sunstar.com.ph/cebu/alegria-pressed-to-recover-p754k-in-cash-advances">SunStar, October 11, 2026</SourceLink>
        </div>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">Historical audit observations</h5>
          <p className="text-sm text-slate-700 my-2">2022: ₱345,000 calendar procurement questioned over delivery timing and quantity.</p>
          <SourceLink href="https://www.mycebu.ph/article/alegria-coa-audit-2022/">MyCebu audit coverage</SourceLink>
          <p className="text-sm text-slate-700 my-2">2013: ₱23.6 million public market project questioned over procurement advertising. The bids and awards committee acknowledged the omission.</p>
          <SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2014/07/14/1346061/coa-questions-alegrias-p236m-market-project">The Freeman, July 14, 2014</SourceLink>
        </div>
        <p className="text-xs text-slate-500">Media summaries are secondary sources. Audit observations do not establish criminal guilt; historical findings may have been resolved.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Public Accountability Questions</h4>
        <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2"><li>How much of the outstanding cash advances has been recovered or liquidated?</li><li>Which audit recommendations have been implemented?</li><li>Where are the current municipal budget, procurement awards and project completion reports published?</li></ul>
      </section>
    </div>
  );
}

function AloguinsanProfile() {
  const elected = ["Onad Paras", "Malou Chua", "Michael Pabroa", "Sinoy Manigos", "Cepen Concon", "Jojo Nieves", "JR Laña", "Roy Manguilimotan"];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Aloguinsan, Cebu</h4>
        <p className="text-sm text-slate-700 mt-2">3rd Congressional District · 15 barangays</p>
        <SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/aloguinsan">Municipal profile and election results</SourceLink>
      </div>
      <section>
        <h4 className="font-bold text-blue-950 mb-3">Elected Officials</h4>
        <p className="text-xs text-slate-500 mb-3">2025–2028 electoral term</p>
        {[["Municipal Mayor", "Cesare Ignatius Go Moreno"], ["Municipal Vice Mayor", "Christian Go Moreno"]].map(([role, name]) => (
          <div key={role} className="bg-white rounded-lg border p-4 mb-3"><p className="text-xs uppercase text-slate-500">{role}</p><p className="font-bold text-slate-900">{name}</p></div>
        ))}
        <h5 className="font-semibold text-sm mb-2">2025 election results — leading council candidates</h5>
        <ul className="text-sm text-slate-700 list-disc pl-5">{elected.map(name => <li key={name}>{name}</li>)}</ul>
        <SourceLink href="https://peoplaid.com/2025/05/10/aloguinsan-election-2025-results-winners/">2025 election results</SourceLink>
        <p className="text-sm text-slate-700 mt-3">The council list reflects the 2025 election results, not a confirmed current roster.</p>
        <SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Official provincial directory</SourceLink>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Budgets and Government Projects</h4>
        <SourceLink href={`${budgetUrl}?q=Aloguinsan#projects`}>View Aloguinsan Budget Records</SourceLink>
        <p className="text-xs text-slate-500 mt-2">Project allocations are not necessarily actual expenditures or completed projects.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">COA Audit and Public Documents</h4>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">2025 Compliance Audit</h5>
          <p className="text-sm text-slate-600 my-2">Review of disaster risk reduction fund allocations and alignment of investment and financial plans for 2025.</p>
          <SourceLink href="https://www.coa.gov.ph/wpfd_file/aloguinsan-compliance-audit-report-2025/">Official COA report</SourceLink>
        </div>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">2025 Annual Audit Report</h5>
          <SourceLink href="https://www.coa.gov.ph/wpfd_file/aloguinsan-annual-audit-report-2025/">Official COA annual audit report</SourceLink>
        </div>
        <div className="bg-white border rounded-lg p-4 mb-3">
          <h5 className="font-bold">2024 audit observations — reported December 17, 2025</h5>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2 my-3">
            <li>₱12.24 million in cash advances outstanding for 10–21 years; management reported issuing demand letters.</li>
            <li>₱7,747,386.68 in undisbursed national support funds at year-end 2024; management agreed to seek an extension and return unused balances from completed projects.</li>
            <li>Development fund absorptive capacity: 36.32%; 28 of 43 planned projects completed (65.12%). Management cited land, documentation and technical issues.</li>
            <li>Unequal pay for job-order workers performing identical functions; HR reported drafting wage guidelines. There were 124 job-order workers at year-end.</li>
            <li>₱26.43 million received in 2023 for school buildings in Bonbon and Punay and solar streetlights in Rosario and Poblacion. Streetlights were completed; school buildings were reported ongoing at the time of coverage.</li>
          </ul>
          <SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2025/12/17/2494929/aloguinsan-called-out-wage-disparities-unused-funds-unliquidated-cash/amp">The Freeman, December 17, 2025</SourceLink>
        </div>
        <p className="text-xs text-slate-500">Media summaries are secondary sources. Audit observations do not establish criminal guilt; historical findings may have been resolved.</p>
      </section>
      <section>
        <h4 className="font-bold text-blue-950 mb-2">Public Accountability Questions</h4>
        <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2"><li>How much of the outstanding cash advances has been recovered or liquidated?</li><li>Which audit recommendations have been implemented, and have the school buildings been completed?</li><li>Where are the current municipal budget, procurement awards and project completion reports published?</li></ul>
      </section>
    </div>
  );
}

function ArgaoProfile() {
  const history = [
    ["2025", "Allan Sesaldo", "Orvi Ortega"], ["2022", "Allan Sesaldo", "Orvi Ortega"],
    ["2019", "Allan Sesaldo", "Jessa Flores-Mier"], ["2016", "Stanley Caminero", "Allan Sesaldo"],
    ["2013", "Edsel Galeos", "Stanley Caminero"], ["2010", "Edsel Galeos", "Stanley Caminero"],
    ["2007", "Edsel Galeos", "Azucena Sesaldo"], ["2004", "Wilfredo Caminero", "Azucena Sesaldo"],
    ["2001", "Wilfredo Caminero", "Azucena Sesaldo"]
  ];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Argao, Cebu</h4>
        <p className="text-sm mt-2">2nd Congressional District · 45 barangays · 78,187 residents (2020 census)</p>
      </div>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Elected Officials</h4>
        <p className="text-sm">2025–2028 term; executive directory as of February 2026.</p>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Allan Miñoza Sesaldo</p></div>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Orvi Gelbolingo Ortega</p></div>
        <p className="text-sm">District representative: Edsel Galeos</p>
        <h5 className="font-semibold">Municipal council — eight leading candidates in reported 2025 results</h5>
        <p className="text-xs text-slate-600">Names as reported; final proclamation and subsequent changes should be checked.</p>
        <ul className="list-disc pl-5 text-sm space-y-1">{["Collin Rizon — 25,430", "Rhine Mamac — 24,327", "Jessa Flores-Mier — 23,479", "Bootsie Almirante — 19,717", "Medics Albero — 19,569", "Juncam Caminero — 19,143", "Jag-Lucero Bacalso — 18,260", "Vip-Choy Semilla — 17,243"].map(n => <li key={n}>{n}</li>)}</ul>
        <SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/argao">2025 election results</SourceLink>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Budgets and Government Projects</h4>
        <p className="font-bold text-blue-950">₱14 million in reported provincial infrastructure assistance (March 2025)</p>
        <ul className="list-disc pl-5 text-sm space-y-1"><li>Mayor’s Office: ₱8 million</li><li>Vice Mayor and council: ₱5.1 million</li><li>Jampang, Anajao and Catang: ₱300,000 each</li></ul>
        <p className="text-xs text-slate-600">Reported allocations, not confirmed spending or completed projects.</p>
        <SourceLink href="https://www.philstar.com/cebu-news/2025/03/23/2430506/capitol-distributes-p97m-infrastructures-aid-2nd-district/amp/">The Freeman, March 23, 2025</SourceLink>
        <div><SourceLink href={`${budgetUrl}?q=Argao#projects`}>View Argao Budget Records</SourceLink></div>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Historical Leadership</h4>
        <div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div>
        <p className="text-xs text-slate-600">Election records may not reflect midterm succession. Shared surnames do not establish family relationships.</p>
        <SourceLink href="https://scene.ph/atlas/cebu/argao">Historical leadership and source references</SourceLink>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4>
        <p className="text-sm">2025 compliance audit covering disaster risk reduction fund allocations and alignment of municipal investment and financial plans. Listing this report does not imply an adverse finding.</p>
        <SourceLink href="https://www.coa.gov.ph/wpfd_file/argao-compliance-audit-report-2025/">Read official COA report</SourceLink>
      </section>
      <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm space-y-1"><li>Which projects were funded by the reported infrastructure assistance?</li><li>Where are procurement, contractor and completion records published?</li><li>What actions followed the 2025 compliance audit?</li></ul></section>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Project outcomes and family relationships require further documentary verification.</div>
    </div>
  );
}

function AsturiasProfile() {
  const history = [
    ["2025", "Dana Andrew Dumdum", "Reine Yaras"], ["2022", "Dana Andrew Dumdum", "Melvin Justin Labuca"],
    ["2019", "Jose Antonio Pintor", "Reine Yaras"], ["2016", "Jose Antonio Pintor", "Alan Adlawan"],
    ["2013", "Alan Adlawan", "Joel Dumdum"], ["2010", "Alan Adlawan", "Joel Dumdum"],
    ["2007", "Alan Adlawan", "Joel Dumdum"], ["2004", "Letecia Orozco", "Alexander Agravante"],
    ["2001", "Letecia Orozco", "Martin Antonio Segarra"]
  ];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Asturias, Cebu</h4>
        <p className="text-sm mt-2">3rd Congressional District · 27 barangays · 55,397 residents (2020 census) · 37,684 registered voters (2025)</p>
        <SourceLink href="https://asturiascebu.gov.ph/">Official municipal website</SourceLink>
      </div>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Elected Officials</h4>
        <p className="text-sm">2025–2028 term. Provincial directory and 2025 election records.</p>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Dana Andrew Matela Dumdum</p></div>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Reine Purisima Yaras</p></div>
        <h5 className="font-semibold">Municipal council — eight leading candidates in reported 2025 results</h5>
        <ul className="list-disc pl-5 text-sm space-y-1">{["Christian Cañada — 16,989", "Joel Pablo Dumdum — 15,003", "Margarita Cece — 12,929", "Martie Maravillas — 12,462", "Jose Antonio Pintor — 12,176", "John Carl Dupal-ag — 11,634", "Mark Paulus Noel — 11,602", "Ruel Derit — 11,562"].map(n => <li key={n}>{n}</li>)}</ul>
        <p className="text-xs text-slate-600">Unofficial results with all precincts reporting as of May 15, 2025. The municipal website lists older officials; final proclamation and subsequent changes should be checked.</p>
        <div><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial directory</SourceLink></div>
        <div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/asturias">2025 election results</SourceLink></div>
        <div><SourceLink href="https://pinasdex.com/visayas/central-visayas/cebu/asturias/government/">Council directory (secondary source)</SourceLink></div>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Budgets and Government Projects</h4>
        <SourceLink href={`${budgetUrl}?q=Asturias#projects`}>View Asturias Budget Records</SourceLink>
        <p className="text-xs text-slate-600">Matching project records do not necessarily represent all municipal allocations or actual spending.</p>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4>
        <div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div>
        <p className="text-xs text-slate-600">Election records may not reflect midterm succession. The surname Dumdum recurs in leadership records, but shared surnames do not establish family relationships.</p>
        <SourceLink href="https://scene.ph/atlas/cebu/asturias">Historical leadership and source references</SourceLink>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4>
        <p className="text-sm">2023 compliance audit on the transfer of unspent disaster risk reduction funds to a special trust fund and reversion of unused balances after five years. Listing this report does not imply an adverse finding.</p>
        <SourceLink href="https://www.coa.gov.ph/wpfd_file/asturias-compliance-audit-report-2023/">Read official COA report</SourceLink>
      </section>
      <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm space-y-1"><li>What actions followed the 2023 compliance audit?</li><li>Where are project expenditure, contractor and completion records published?</li><li>Where can residents access current council membership and municipal financial reports?</li></ul></section>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. No unverified audit amounts or family relationships are asserted.</div>
    </div>
  );
}

function BadianProfile() {
  const history = [
    ["2025", "Jerome Librando", "Doris Silvano"], ["2022", "Carmencita Lumain", "Doris Silvano"],
    ["2019", "Carmencita Lumain", "Fructuoso Caballero"], ["2016", "Carmencita Lumain", "Fructuoso Caballero"],
    ["2013", "Robburt Librando", "Jerome Librando"], ["2010", "Robburt Librando", "Fructuoso Caballero"],
    ["2007", "Carmencita Lumain", "Fructuoso Caballero"], ["2004", "Carmencita Lumain", "Fructuoso Caballero"],
    ["2001", "Carmencita Lumain", "Solomon Virtucio"]
  ];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4">
        <h4 className="text-xl font-bold text-blue-950">Badian, Cebu</h4>
        <p className="text-sm mt-2">7th Congressional District · 29 barangays · 43,735 residents (2020 census) · 29,459 registered voters (2025)</p>
        <SourceLink href="https://scene.ph/atlas/cebu/badian">Municipal profile and source references</SourceLink>
      </div>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Elected Officials</h4>
        <p className="text-sm">2025–2028 term. DILG directory compiled by Scene.ph and 2025 election records.</p>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Jerome Christian Visitacion Librando</p></div>
        <div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Doris Miñoza Silvano</p></div>
        <h5 className="font-semibold">Municipal council — eight leading candidates in reported 2025 results</h5>
        <ul className="list-disc pl-5 text-sm space-y-1">{["Michelle Bitangga — 13,300", "Carmencita Lumain — 13,126", "Maricar Lumain — 11,391", "Joseph Balbona — 10,707", "Kyrene Vesta Tabanao — 9,791", "Marites Gramatica — 9,445", "Julius Agravante — 9,366", "Jim Amarado — 8,816"].map(n => <li key={n}>{n}</li>)}</ul>
        <p className="text-xs text-slate-600">Partial unofficial results, 97.73% of precincts reporting as of May 15, 2025. Final proclamation and subsequent changes should be checked.</p>
        <div><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/Cebu_BADIAN.pdf">Official COMELEC candidate list</SourceLink></div>
        <div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/badian">2025 election results</SourceLink></div>
        <div><SourceLink href="https://peoplaid.com/2025/05/10/badian-election-2025-results-winners/">Council directory (secondary source)</SourceLink></div>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Budgets and Government Projects</h4>
        <SourceLink href={`${budgetUrl}?q=Badian#projects`}>View Badian Budget Records</SourceLink>
        <p className="text-xs text-slate-600">Matching project records do not necessarily represent all municipal allocations or actual spending.</p>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4>
        <div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div>
        <p className="text-xs text-slate-600">Election records may not reflect midterm succession. The surnames Lumain and Librando recur in leadership records, but shared surnames do not establish family relationships.</p>
        <SourceLink href="https://scene.ph/atlas/cebu/badian">Historical leadership and source references</SourceLink>
      </section>
      <section className="space-y-3">
        <h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4>
        <p className="text-sm">2024 compliance audit on transparency and accountability in Special Education Fund allocation and utilization. Listing this report does not imply an adverse finding.</p>
        <SourceLink href="https://www.coa.gov.ph/wpfd_file/badian-compliance-audit-report-2024/">Read official COA report</SourceLink>
        <div><SourceLink href="https://www.coa.gov.ph/wpfd_file/badian-annual-audit-report-2022/">2022 annual audit</SourceLink></div>
        <p className="text-sm">The Freeman reported on June 30, 2021 that COA questioned PHP 3.92 million in 2020 emergency assistance to 653 beneficiaries assessed as ineligible, out of PHP 22.68 million received. Auditors requested documentation and recovery measures. Subsequent resolution is not established here.</p>
        <SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2021/06/30/2109171/coa-wants-ineligible-sap-beneficiaries-refund-aid">Historical audit reporting</SourceLink>
      </section>
      <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm space-y-1"><li>What actions followed the 2024 education fund audit and the historical emergency assistance observations?</li><li>Where are project expenditure, contractor and completion records published?</li><li>Where can residents access current council membership and municipal financial reports?</li></ul></section>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Historical audit observations are not proof of criminal wrongdoing. Family relationships are not inferred from surnames.</div>
    </div>
  );
}

function BalambanProfile() {
  const history = [["2025","Amos Cabahug","Alfie Binghay"],["2022","Ace Binghay","Alfie Binghay"],["2019","Alex Binghay","Alfie Binghay"],["2016","Ace Binghay","Rosario Binghay"],["2013","Ace Binghay","Rosario Binghay"],["2010","Ace Binghay","Rosario Binghay"],["2007","Alex Binghay","Ace Binghay"],["2004","Alex Binghay","Edmund Bendebel"],["2001","Alex Binghay","Edmund Bendebel"]];
  return (
    <div className="border-t bg-slate-50 p-5 space-y-6">
      <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Balamban, Cebu</h4><p className="text-sm mt-2">3rd Congressional District · 28 barangays · 95,136 residents (2020 census) · 55,263 registered voters (2025)</p><SourceLink href="https://balambancebu.gov.ph/">Official municipal website</SourceLink></div>
      <section className="space-y-3"><h4 className="font-bold text-blue-950">Elected Officials</h4><p className="text-sm">2025–2028 term</p><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Amos Edwin Carausos Cabahug</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Alex Francis Veloso Binghay II</p></div><h5 className="font-semibold">Eight leading council candidates in reported 2025 results</h5><ul className="list-disc pl-5 text-sm space-y-1">{["Windel Compasion — 23,204","Andres Borgonia — 21,109","Jun Lape — 20,524","Irene Jo — 20,271","William Genel — 17,479","Emong Paulin — 16,075","Eliezer Climaco — 14,691","Doc Zaldy Climaco — 14,666"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs text-slate-600">Unofficial election returns; final proclamation and subsequent membership changes should be checked.</p><div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/balamban">Election results</SourceLink></div><div><SourceLink href="https://peoplaid.com/2025/05/10/balamban-election-2025-results-winners/">Council election returns</SourceLink></div><div><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/Cebu_BALAMBAN.pdf">COMELEC candidate list</SourceLink></div><SourceLink href="https://balambancebu.gov.ph/congratulations-mayor-amos-cabahug/">Municipal election announcement</SourceLink></section>
      <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Balamban#projects`}>View Balamban Budget Records</SourceLink><p className="text-xs text-slate-600">Project matches are not necessarily complete allocations or actual expenditures.</p></section>
      <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p className="text-sm">Eight consecutive mayoral elections from 2001 to 2022 were won by candidates surnamed Binghay. Family relationships are not inferred from surnames. Election records may not reflect midterm succession.</p><SourceLink href="https://scene.ph/atlas/cebu/balamban">Historical leadership and source references</SourceLink></section>
      <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><p className="text-sm">SunStar reported on October 13, 2026 that the 2025 audit identified missing monthly reports and omitted financial statement disclosures concerning PHP 76.17 million in Typhoon Tino in-kind donations. The municipality said all donations reached affected families, distribution logs were maintained and emergency operations took priority over reporting. The municipality said it submitted the complete report to OCD on April 22. This is a reporting issue, not proof of misappropriation.</p><div><SourceLink href="https://www.sunstar.com.ph/cebu/balamban-tino-relief-goods-accounted-for">Audit reporting and municipal response</SourceLink></div><SourceLink href="https://www.coa.gov.ph/">Commission on Audit</SourceLink></section>
      <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm space-y-1"><li>Are reconciled relief inventories and distribution summaries publicly accessible?</li><li>Have the reporting and financial disclosure gaps been resolved?</li><li>Where are project contracts, expenditure and completion records published?</li></ul></section>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish criminal wrongdoing.</div>
    </div>
  );
}

function BantayanProfile() {
 const history = [["2025","Orlando Layese","Arthur Despi"],["2022","Arthur Despi","Antonio Montemar"],["2019","Arthur Despi","Antonio Montemar"],["2016","Ian Escario","Antonio Montemar"],["2013","Ian Escario","Chad Cañares"],["2010","Ian Escario","Geralyn Cañares"],["2007","Geralyn Cañares","Dale Escario"],["2004","Geralyn Cañares","Remedios Escario"],["2001","Geralyn Cañares","Remedios Escario"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Bantayan, Cebu</h4><p className="text-sm mt-2">4th Congressional District · 25 barangays · 86,247 residents (2020 census) · 49,851 registered voters (2025)</p><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial government directory</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Elected Officials</h4><p className="text-sm">2025–2028 term</p><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Orlando Forrosuelo Layese</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Arthur Escarro Despi</p></div><h5 className="font-semibold">Eight leading council candidates in reported 2025 results</h5><ul className="list-disc pl-5 text-sm space-y-1">{["Edwin Deldig — 20,939","Juvel Ducay — 20,778","Edgardo Layese — 20,294","Miguel Angelo Pacheco — 19,981","Dino Montemar — 19,872","Jedleonil Umbao — 19,857","Jeffrey Barretto — 18,488","Paolo Despi — 18,314"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs text-slate-600">Reported election returns, not certified proclamation records.</p><div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/bantayan">Election results</SourceLink></div><SourceLink href="https://peoplaid.com/2025/05/10/bantayan-election-2025-results-winners/">Council election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Bantayan#projects`}>View Bantayan Budget Records</SourceLink><p className="text-xs text-slate-600">Project matches are not necessarily complete allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p className="text-xs">Family relationships are not inferred from surnames. Midterm succession may differ from election records.</p><SourceLink href="https://scene.ph/atlas/cebu/bantayan">Historical leadership records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><p className="text-sm">The Freeman reported on October 20, 2026 that Bantayan utilized PHP 21 million of its PHP 74.49 million development fund in 2025, leaving PHP 53.49 million unutilized. Utilization fell from 49.68% in 2024 to 28.19% in 2025. Officials cited environmental clearances, work plans and right-of-way requirements as causes of delays. Unspent funds do not establish misappropriation.</p><div><SourceLink href="https://qa.philstar.com/cebu-news/2026/10/20/2564447/bantayans-20-percent-development-fund-utilization-drops-2819-percent-2025/amp/">2025 audit reporting</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/bantayan-compliance-audit-report-2024/">2024 COA Special Education Fund compliance audit</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Which development projects were delayed?</li><li>What are their revised completion dates?</li><li>How much of the unspent balance has since been utilized?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish criminal wrongdoing.</div></div>;
}

function BariliProfile() {
 const history = [["2025","Pablo John Garcia IV","Luisito Ponsica"],["2022","Pablo John Garcia IV","Luisito Ponsica"],["2019","Marlon Garcia","Julieto Flores"],["2016","Marlon Garcia","Teresito Mariñas"],["2013","Teresito Mariñas","Jose Antonio Nemeño"],["2010","Teresito Mariñas","Marlon Garcia"],["2007","Teresito Mariñas","Ramon Ewican"],["2004","Robert Alquizola","Jose Antonio Nemeño"],["2001","Robert Alquizola","Luisito Ponsica"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Barili, Cebu</h4><p className="text-sm mt-2">3rd Congressional District · 42 barangays · 80,715 residents (2020 census) · 58,511 registered voters (2025)</p><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial government directory</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Elected Officials</h4><p className="text-sm">2025–2028 term</p><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Pablo John Domingo Garcia IV</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Luisito Lariosa Ponsica</p></div><h5 className="font-semibold">Eight leading council candidates in reported 2025 results</h5><ul className="list-disc pl-5 text-sm space-y-1">{["Jayra Jay Ruiz — 36,990","Bobet Alquizola — 29,314","Joshua Ricardel — 28,399","John-John Añober — 27,981","Shelomith Ann Ewican — 25,701","Teresito Mariñas — 25,340","Gemco Gabales — 23,975","Andres Alpas — 20,540"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs text-slate-600">Reported election returns, not certified proclamation records.</p><div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/barili">Election results</SourceLink></div><SourceLink href="https://peoplaid.com/2025/05/10/barili-election-2025-results-winners/">Council election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Barili#projects`}>View Barili Budget Records</SourceLink><p className="text-xs text-slate-600">Project matches are not necessarily complete allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p className="text-xs">Family relationships are not inferred from surnames. Midterm succession may differ from election records.</p><SourceLink href="https://scene.ph/atlas/cebu/barili">Historical leadership records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><p className="text-sm">SunStar reported on July 18, 2023 that COA questioned the accounting of approximately PHP 343 million in property, plant and equipment in the 2022 audit, including incomplete inventories and unreliable road records. This represents recorded assets, not established losses. Subsequent resolution has not been verified.</p><div><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/local-news/coa-barilis-record-of-p343m-property-equipment-doubtful">2022 audit reporting</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/barili-annual-audit-report-2025/">Official 2025 COA Annual Audit Report</SourceLink><h5 className="font-semibold">Bulk water project</h5><p className="text-sm">SunStar reported in November 2026 that the completed Cluster B project faced delays in obtaining a water permit involving land-use arrangements. The PHP 822 million cited in the report covers 15 projects province-wide, not Barili alone.</p><SourceLink href="https://www.sunstar.com.ph/cebu/15-waterworks-idle">Water project audit reporting</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Have the infrastructure asset inventories been reconciled?</li><li>What is the status of the Cluster B water permit?</li><li>What corrective actions resolved the 2022 audit observations?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish criminal wrongdoing.</div></div>;
}


function BoljoonProfile() {
 const history = [["2025","Joie Derama","Feliberta Mubarak Obaid"],["2022","Joie Derama","Ervin Villanueva"],["2019","Merlou Derama","Ervin Villanueva"],["2016","Merlou Derama","Ervin Villanueva"],["2013","Merlou Derama","Alfredo Awe"],["2010","Teresita Derama Celis","Merlou Derama"],["2007","Deogenes Derama","Merlou Derama"],["2004","Deogenes Derama","Renato Amper"],["2001","Deogenes Derama","Renato Amper"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Boljoon, Cebu</h4><p className="text-sm mt-2">2nd Congressional District · 11 barangays · 17,525 residents (2020 census) · 12,247 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Elected Officials</h4><p className="text-sm">2025–2028 term; directory as of February 2026</p><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Joie Genesse Navarro Derama</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Feliberta Fegarido Mubarak Obaid</p></div><h5 className="font-semibold">Eight leading council candidates in reported 2025 results</h5><ul className="list-disc pl-5 text-sm space-y-1">{["Genus Navarro — 6,383","Merlou Derama — 6,253","Anjo Nicanor — 5,965","Monit Fedillaga — 5,907","Marvin Ian Niere — 5,878","Darrel John Felices — 5,600","Ervin Villanueva — 5,561","Lindzey Romero — 4,998"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs text-slate-600">Unofficial returns as of May 15, 2025, with 100% of precincts reporting.</p><div><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/boljoon">Election results</SourceLink></div><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/Cebu_BOLJOON.pdf">Official candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Boljoon#projects`}>View Boljoon Budget Records</SourceLink><p className="text-xs text-slate-600">Project matches are not necessarily complete allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p className="text-xs">Family relationships are not inferred from names. Midterm succession may differ from election records.</p><SourceLink href="https://scene.ph/atlas/cebu/boljoon">Historical leadership records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><p className="text-sm">SunStar reported in November 2026 that auditors observed two unfinished water tanks, an incomplete treatment plant and rusting reinforcement in Boljoon. The PHP 822 million figure in the report covers 15 provincial projects, not Boljoon alone. The local project cost and subsequent status have not been verified.</p><div><SourceLink href="https://www.sunstar.com.ph/cebu/15-waterworks-idle">Water project audit reporting</SourceLink></div><SourceLink href="https://www.coa.gov.ph/">Commission on Audit</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What is the project cost and who is the contractor?</li><li>What is the original completion deadline?</li><li>What corrective actions are planned and when will the facilities operate?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish criminal wrongdoing.</div></div>;
}

function BorbonProfile() {
 const history = [["2025","Nico Dotillos","Noel Dotillos"],["2022","Noel Dotillos","Roy Melgo"],["2019","Noel Dotillos","Roy Melgo"],["2016","Noel Dotillos","Roy Melgo"],["2013","Bernard Sepulveda","Noel Dotillos"],["2010","Bernard Sepulveda","Noel Dotillos"],["2007","Bernard Sepulveda","Neal Vergara"],["2004","Neal Vergara","Bernard Sepulveda"],["2001","Neal Vergara","Bernard Sepulveda"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Borbon, Cebu</h4><p className="text-sm mt-2">5th Congressional District · 19 barangays · 38,187 residents (2020 census) · 27,275 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Nico Villareal Dotillos</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor (reported October 2026)</p><p className="font-bold">Bernad-Gino Sepulveda</p><p className="text-sm">Succeeded Noel Dotillos following his dismissal.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025 reported returns</h5><ul className="list-disc pl-5 text-sm">{["Brino Sepulveda — 13,513","Neal Vergara — 12,791","Alberto Melendres — 12,012","Reboy Dotillos — 11,767","Jean Jacque Antigua — 11,720","Fernando Larrañaga — 11,599","Raffe Tejares — 10,651","Expedito Urot — 10,511"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs">Historical election returns, not the current council roster after succession.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/borbon">Election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Borbon#projects`}>View Borbon Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/borbon">Historical leadership records</SourceLink><p className="text-sm">SunStar identifies Mayor Nico Dotillos as the son of former Vice Mayor Noel Dotillos.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Documented Administrative Case</h4><p className="text-sm">SunStar reported that an Ombudsman decision dated October 15, 2025 concerned Noel Dotillos signing consultancy contracts for his wife, Dr. Corazon Dotillos, without council authorization. The reported rate was up to PHP 3,500 per day. Sepulveda subsequently assumed office. Appeal status has not been verified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/borbon-town-gets-new-vice-mayor">Read succession and administrative case reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><p className="text-sm">The Freeman reported in July 2022 that the 2021 audit identified PHP 357,083.99 in construction deficiencies on a roughly PHP 1.9 million access road project in Barangay Bongoyon despite full payment. Auditors recommended investigation and rectification or recovery. Subsequent resolution has not been verified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2022/07/14/2195268/coa-flags-borbon-full-payment-despite-construction-deficiencies">Read audit reporting</SourceLink><div><SourceLink href="https://www.coa.gov.ph/">Commission on Audit</SourceLink></div></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Were the road deficiencies rectified or the amount recovered?</li><li>What is the updated municipal council roster?</li><li>What safeguards govern consultancy contracts involving relatives?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Administrative findings and audit observations are not criminal convictions.</div></div>;
}

function CarmenProfile() {
 const history = [["2025","Carlo Villamor","Martin Gerard Villamor"],["2022","Carlo Villamor","Martin Gerard Villamor"],["2019","Carlo Villamor","Al Damiles"],["2016","Martin Gerard Villamor","Manuel Mari Durano"],["2013","Martin Gerard Villamor","Al Damiles"],["2010","Martin Gerard Villamor","Al Damiles"],["2007","Virginio Villamor","Sonia Pua"],["2004","Virginio Villamor","Al Damiles"],["2001","Amytis Batao","Virginio Villamor"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Carmen, Cebu</h4><p className="text-sm mt-2">5th Congressional District · 21 barangays · 57,897 residents (2020 census) · 40,904 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Carlo Teves Villamor</p><p className="text-sm">Unopposed in 2025; 28,212 reported votes.</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Martin Gerard Teves Villamor</p></div><p className="text-xs">Directory as of February 2026; elected term 2025–2028.</p><h5 className="font-semibold">Eight leading council candidates in 2025 reported returns</h5><ul className="list-disc pl-5 text-sm">{["Al Damiles — 26,971","Kyle Pono — 25,462","Tata Tacocong — 24,661","Tony Awing — 23,953","Rashid Tacocong — 23,386","Arianne Batao-Pono — 21,894","Richard Sarad — 17,980","Jer-Jer Into — 16,783"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs">Unofficial returns with 100% of precincts reporting on May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/carmen">Election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Carmen#projects`}>View Carmen Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/carmen">Historical leadership and official directory compilation</SourceLink><p className="text-sm">Eight consecutive mayoral elections since 2004 were won by candidates surnamed Villamor. Exact family relationships have not been independently verified.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">CCTV Phase II — PHP 7,115,694.42 contract</h5><p className="text-sm mt-2">SunStar reported on October 16, 2026 that auditors found 22 of 65 cameras nonfunctional during the February 13, 2026 inspection. Five units could not initially be verified. COA questioned completion records and final acceptance, including warranty implications.</p><p className="text-sm mt-2">The engineering office attributed damage to a typhoon, acknowledged administrative discrepancies, and reported that all 65 units had been restored under warranty. Inventory reconciliation was ongoing. Independent verification of the final resolution is not established here.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-flags-carmens-acceptance-of-defective-cctv-cameras">Read audit reporting and municipal response</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/carmen-compliance-audit-report-2023-3/">2023 COA compliance audit — disaster risk reduction funds</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Has the CCTV inventory reconciliation been submitted to COA?</li><li>What documentation confirms restoration of all cameras and warranty enforcement?</li><li>Have completion records been corrected?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Contract values are not established losses; audit observations are not criminal convictions.</div></div>;
}

function CatmonProfile() {
 const history = [["2025","Avis Ginoo-Monleon","Armel Poro"],["2022","Avis Ginoo-Monleon","Armel Poro"],["2019","Iris Baylon-Gestopa","Earl Oyas"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Catmon, Cebu</h4><p className="text-sm mt-2">5th Congressional District · 20 barangays · 34,608 residents (2024 census) · 22,551 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor</p><p className="font-bold">Avis Ginoo-Monleon</p><p className="text-sm">13,080 reported votes in 2025.</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Armel Zapanta Poro</p></div><p className="text-xs">Directory as of February 2026; elected term 2025–2028.</p><h5 className="font-semibold">Eight leading council candidates in 2025 reported returns</h5><ul className="list-disc pl-5 text-sm">{["Atty. Juban — 16,016","Buena Pontillas — 13,672","Estrella Aribal — 10,975","Jurasec Coloscos — 10,718","Jose Barte — 9,603","Raul Sususco — 8,669","Faith Baylon — 8,439","Andres Arche Jr. — 8,114"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-xs">Unofficial returns with 100% of precincts reporting on May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/catmon">Election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Catmon#projects`}>View Catmon Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/catmon">Historical leadership and official directory compilation</SourceLink><p className="text-sm">Monleon and Poro won the 2022 and 2025 elections. Family connections are not asserted without documentation.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2025 municipal finances</h5><p className="text-sm mt-2">Reported income: PHP 208.7 million; spending: PHP 131.2 million. National Tax Allotment accounted for 87.9% of income. PSA poverty incidence was 35.4% in 2021. These figures are from a secondary compilation of public records.</p><SourceLink href="https://scene.ph/atlas/cebu/catmon">Financial and socioeconomic records</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/catmon-compliance-audit-report-2025/">2025 COA compliance audit — disaster risk reduction funds</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>How were disaster risk reduction funds allocated and used?</li><li>Which development projects were funded and completed?</li><li>What measures are being taken to reduce poverty and expand local revenues?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Contract values are not established losses; audit observations are not criminal convictions.</div></div>;
}

function CompostelaProfile() {
 const history = [["2025","Felijur Quiño","Froilan Quiño"],["2022","Felijur Quiño","Froilan Quiño"],["2019","Froilan Quiño","Josephine Abing"],["2016","Joel Quiño","Josephine Abing"],["2013","Joel Quiño","Josephine Abing"],["2010","Joel Quiño","Mary Antonette Dangoy"],["2007","Ritchie Wagas","Joel Quiño"],["2004","Antonio Dangoy","Josephine Abing"],["2001","James Cabatingan","Antonio Dangoy"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Compostela, Cebu</h4><p className="text-sm mt-2">5th Congressional District · 17 barangays · 55,874 residents (2020) · 39,513 registered voters (2025) · 53.90 km²</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Mayor elected in 2025</p><p className="font-bold">Felijur Pareja Quiño</p><p className="text-sm">28,547 reported votes.</p></div><div className="bg-white border rounded-lg p-4"><p className="text-xs uppercase">Vice Mayor</p><p className="font-bold">Froilan Ochea Quiño</p><p className="text-sm">27,380 reported votes.</p></div><p className="text-xs">The February 2026 DILG directory compilation does not identify the incumbent mayor. Election results do not independently establish current incumbency.</p><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Glenn Villaceran — 21,882","Richard Acaso — 21,849","Amay Oliverio — 21,320","Erne Lawas — 21,052","Bernie Castro — 20,123","Cheryl Sereño — 20,072","Rudy Puebla — 19,504","Mario Paradiang — 17,169"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">All eight ran under One Cebu. Unofficial returns with 100% precincts reporting on May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/compostela">Election results</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_COMPOSTELA.pdf">Certified candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Compostela#projects`}>View Compostela Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/compostela">Historical leadership records</SourceLink><p className="text-sm">Six consecutive mayoral elections since 2010 were won by politicians surnamed Quiño. Precise family relationships are not established here.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2025 audit: two idle buildings</h5><p className="text-sm mt-2">Guiwanon multipurpose building: PHP 2,998,000. Community college classrooms: PHP 5,998,397.95. Combined cost: PHP 8,996,397.95. Both first phases were reported completed in 2023 but were unusable at the March 12, 2026 inspection. Depreciation expenses were overstated by PHP 269,891.93 in 2025. The municipal engineer cited funding constraints; management proposed converting the college facility to a daycare center. Auditors identified planning deficiencies. Subsequent resolution is unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-buildings-in-compostela-worth-nearly-p9m-remain-unused">SunStar audit reporting, October 13, 2026</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/compostela-annual-audit-report-2025/">2025 COA annual audit report</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/compostela-annual-audit-report-2023-2/">2023 COA annual audit report</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>When will the buildings become operational?</li><li>Were feasibility studies and funding arrangements adequate?</li><li>Have accounting discrepancies been corrected?</li><li>What independent oversight mechanisms are in place?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Project costs are not established losses; audit observations are not criminal convictions.</div></div>;
}

function ConsolacionProfile() {
 const history = [["2025","Nene Alegado-Pepito","Joannes Alegado"],["2022","Teresa Alegado","Aurelio Damole"],["2019","Joannes Alegado","Teresa Alegado"],["2016","Teresa Alegado","Aurelio Damole"],["2013","Teresa Alegado","Aurelio Damole"],["2010","Teresa Alegado","Aurelio Damole"],["2007","Avelino Gungob Sr.","Ember Alinsug"],["2004","Avelino Gungob","Leo Go"],["2001","Avelino Gungob","Teresa Alegado"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Consolacion, Cebu</h4><p className="text-sm mt-2">6th Congressional District · 21 barangays · 148,012 residents (2020) · 100,189 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor elected in 2025: <strong>Nene Alegado-Pepito</strong> — 39,332 votes; margin 4,871.</p><p>Vice Mayor: <strong>Joannes Pepito Alegado</strong> — 37,866 votes.</p><p className="text-xs">The February 2026 DILG directory compilation does not name the incumbent mayor; the mayoral entry reflects election results.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Leo Napuli — 42,308","Ben Ermac — 39,536","Victor Maglasang — 37,410","Fred Herrera — 34,751","Miko Mark Ouano — 31,798","Ely Palang — 31,524","Analee Gungob-Corpin — 30,621","Dodong Rex Pepito — 28,811"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Seven ran under LAKAS. Unofficial returns.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/consolacion">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/consolacion-cebu-election-2025-results-winners/">Full vote totals</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Consolacion#projects`}>View Consolacion Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/consolacion">Historical leadership records</SourceLink><p className="text-sm">Alegado and Gungob recur across multiple election cycles. Exact family relationships are not verified here.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">Command center — PHP 12.99 million</h5><p className="text-sm">Phase 1 was unusable at acceptance in October 2025. Auditors questioned PHP 941,450 in allocations and the basis for PHP 315,000 in safety staffing allocations. Project signage was deficient. The engineering office cited funding constraints and separate construction requirements and pledged signage corrections. Technical review and subsequent resolution are unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-flags-deficiencies-in-consolacions-project">SunStar, October 11, 2026</SourceLink></div><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2025 workforce audit</h5><p className="text-sm">COA reported 52 vacant regular posts, including three department heads, and 530 job order workers. The municipality reported recruitment and promotions underway. Auditors recommended merit-based appointments.</p><SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2026/10/13/2562853/coa-hits-vacant-regular-positions-consolacion">The Freeman, October 13, 2026</SourceLink></div><SourceLink href="https://www.coa.gov.ph/">Commission on Audit</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>When will the command center be operational?</li><li>What was the outcome of the technical review?</li><li>Have project signboards been corrected?</li><li>How many regular posts have since been filled through merit-based hiring?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Project costs are not established losses; audit observations are not criminal convictions.</div></div>;
}

function CordovaProfile() {
 const history = [["2025","Cesar Suan","Victor Tago III"],["2022","Cesar Suan","Victor Tago III"],["2019","Mary Therese Sitoy Cho","Ximgil Dino Sitoy"],["2016","Mary Therese Sitoy Cho","Adelino Sitoy"],["2013","Adelino Sitoy","Mary Therese Sitoy Cho"],["2010","Adelino Sitoy","Rodrigo Jumao-as"],["2007","Adelino Sitoy","Rodrigo Jumao-as"],["2004","Arleigh Jay Sitoy","Danilo Sinugbuhan"],["2001","Arleigh Jay Sitoy","Danilo Sinugbuhan"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Cordova, Cebu</h4><p className="text-sm mt-2">6th Congressional District · 13 barangays · 53,261 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Cesar Enverzo Suan</strong> — 30,728 votes.</p><p>Vice Mayor: <strong>Victor Sabucido Tago III</strong> — 28,766 votes.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Jerome Lepiten — 32,045","Patric Lagon — 29,867","Nats Sitoy — 29,017","Remar Baguio — 24,132","Jet Wahing — 23,903","Liera Mae Casquejo — 21,744","Chito Bentazal — 21,466","Lemuel Pogoy — 20,431"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Unofficial election returns; all eight ran under One Cebu or LAKAS.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/cordova">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/cordova-cebu-election-2025-results-winners/">Full vote totals</SourceLink><SourceLink href="https://cordova.gov.ph/home">Official municipal portal</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Cordova#projects`}>View Cordova Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/cordova">Historical leadership records</SourceLink><p className="text-sm">Seven consecutive mayoral election winners carried the Sitoy name before 2022. Exact family relationships are not verified here.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2025 disaster risk reduction compliance audit</h5><p className="text-sm">Published September 22, 2026; covers required disaster risk reduction allocations and alignment of investment and financial plans with the disaster risk reduction plan. Specific adverse findings and amounts have not been verified from the full report.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/cordova-compliance-audit-report-2025/">Official COA report</SourceLink></div></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What safeguards govern coastal development and flood mitigation?</li><li>Are disaster preparedness allocations and expenditures publicly accessible?</li><li>Are procurement records and infrastructure completion reports available?</li><li>What corrective actions, if any, followed the compliance audit?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Questions do not constitute findings of wrongdoing.</div></div>;
}

function DaanbantayanProfile() {
 const history = [["2025","Gilbert Arrabis Jr.","Elver Ali Abucay"],["2022","Sun Shimura","Elver Ali Abucay"],["2019","Sun Shimura","Gilbert Arrabis Jr."],["2016","Vicente Loot","Gilbert Arrabis Jr."],["2013","Augusto Corro","Gilbert Arrabis Jr."],["2010","Maria Luisa Loot","Renato Te"],["2007","Sun Shimura","Maria Luisa Loot"],["2004","Maria Luisa Loot","Mariano Diaz"],["2001","Maria Luisa Loot","Jose De Leon Jr."]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Daanbantayan, Cebu</h4><p className="text-sm mt-2">4th Congressional District · 57,409 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Gilbert Molejon Arrabis Jr.</strong> — 24,721 votes.</p><p>Vice Mayor: <strong>Elver Ali Branzuela Abucay</strong> — 25,176 votes.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Boy Mantos — 24,438","Marvi Loot-Pinos — 24,389","Jupjup Rosell — 23,713","Wendell Rosell — 23,121","Chona De Leon — 21,154","Intoy Luche — 20,686","Atty. Tito Gastardo — 18,674","Bregitte Tancawan — 18,492"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Unofficial election returns; ballot names, 100% precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/daanbantayan">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/daanbantayan-election-2025-results-winners/">Full vote totals</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Daanbantayan#projects`}>View Daanbantayan Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/daanbantayan">Historical leadership records</SourceLink><p className="text-sm">Arrabis won three consecutive vice mayoral elections before his 2025 mayoral victory. Recurring surnames alone do not establish family relationships.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2024 Special Education Fund compliance audit</h5><p className="text-sm">Published March 4, 2026; covers transparency and accountability in education fund allocations and utilization. Specific adverse findings and amounts have not been verified from the full report.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/daanbantayan-compliance-audit-report-2024/">Official COA report</SourceLink></div><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2025 Water District compliance audit</h5><p className="text-sm">Published October 20, 2026; covers water sampling and examination standards. The water district is a separate entity. Specific findings have not been verified.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/daanbantayan-water-district-cebu-compliance-audit-report-2025/">Official water district audit</SourceLink></div></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>How are education fund allocations distributed among schools?</li><li>Are water quality testing results publicly accessible?</li><li>Are procurement records and infrastructure completion reports available?</li><li>What corrective actions, if any, followed the compliance audit?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Questions do not constitute findings of wrongdoing.</div></div>;
}

function DalagueteProfile() {
 const history = [["2025","Nelin Tambis","William Lagahid"],["2022","Ronald Cesante","William Lagahid"],["2019","Jeffrey Belciña","William Lagahid"],["2016","Ronald Cesante","Jeffrey Belciña"],["2013","Ronald Cesante","Jeffrey Belciña"],["2010","Ronald Cesante","Jeffrey Belciña"],["2007","Andrade Alcantara","Ronald Cesante"],["2004","Ronald Cesante","Andrade Alcantara"],["2001","Ronald Cesante","Conrada Almagro"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Dalaguete, Cebu</h4><p className="text-sm mt-2">2nd Congressional District · 48,912 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Nelin Belciña Tambis</strong> — 22,933 votes.</p><p>Vice Mayor: <strong>William Ocoy Lagahid</strong> — 24,500 votes.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Coca Nicohl Bustamante — 21,927","Lowell Amaya — 21,807","Ernesto Tangpos — 20,628","Andrade Alcantara — 19,286","John Ritz Osorio — 18,965","Ricardo Villahermosa — 17,380","Kevin Belandres — 17,291","El-Joesur Survilla — 17,034"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Unofficial election returns; ballot names, 100% precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/dalaguete">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/dalaguete-election-2025-results-winners/">Full vote totals</SourceLink><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Official provincial directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Dalaguete#projects`}>View Dalaguete Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/dalaguete">Historical leadership records</SourceLink><p className="text-sm">Cesante won six of nine mayoral elections between 2001 and 2025. Recurring surnames alone do not establish family relationships.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">Provincial bulk water infrastructure</h5><p className="text-sm">SunStar reported in November 2026 that work in Dalaguete was suspended, with pipes partly installed and others in contractor storage. The wider provincial audit covered 15 idle projects worth ₱822 million collectively; this is not Dalaguete's individual project cost.</p><SourceLink href="https://www.sunstar.com.ph/cebu/15-waterworks-idle">Audit reporting</SourceLink></div></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What is the cost and revised completion date of the bulk water project?</li><li>What safeguards protect unused construction materials?</li><li>Are procurement records and infrastructure completion reports available?</li><li>What corrective actions followed the provincial audit?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Questions do not constitute findings of wrongdoing.</div></div>;
}

function DumanjugProfile() {
 const history = [["2025","Gun-Gun Gica","Wado Gica"],["2022","Gun-Gun Gica","Wado Gica"],["2019","Gun-Gun Gica","Wado Gica"],["2016","Gun-Gun Gica","Rainero Asentista"],["2013","Nelson Garcia","Efren Gica"],["2010","Nelson Garcia","Christopher Baricuatro"],["2007","Cesar Baricuatro","Abdon Jumao-As"],["2004","Cesar Baricuatro","Abdon Jumao-As"],["2001","Cesar Baricuatro","Abdon Jumao-As"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Dumanjug, Cebu</h4><p className="text-sm mt-2">7th Congressional District · 39,876 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Gun-Gun Gica</strong> — 28,950 votes.</p><p>Vice Mayor: <strong>Erwin Wado Gica</strong> — 28,312 votes.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Arthur Famor — 23,639","Rene Asentista — 23,108","Erick Gica — 22,813","Elie Luague — 20,468","Belinda Quirante — 20,007","Cardo Condes — 19,853","Kevin Pan — 18,551","Isaac Cambalon — 18,483"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Unofficial election returns; ballot names, 100% precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/dumanjug?contest=Governor">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/dumanjug-election-2025-results-winners/">Full vote totals</SourceLink><SourceLink href="https://www.dumanjug.gov.ph/government/vice-mayor">Official vice mayor page</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><SourceLink href={`${budgetUrl}?q=Dumanjug#projects`}>View Dumanjug Budget Records</SourceLink><p className="text-xs">Project matches may not represent all allocations or actual expenditures.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://dynasties.bettergov.ph/province/cebu/dumanjug">Historical leadership records</SourceLink><p className="text-sm">Gica won four of nine mayoral elections between 2001 and 2025. All eight council candidates and the vice mayor ran unopposed under One Cebu in 2025. Recurring surnames alone do not establish family relationships.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">Public market procurement</h5><p className="text-sm">SunStar reported on July 12, 2023 that COA questioned rounding the market project budget to ₱300 million, a difference of ₱531,712, and a winning bid exceeding the original approved budget by ₱419,712. The municipal engineer maintained that the rounding complied with law. Resolution is unverified; these figures are not established losses.</p><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/dumanjug-flagged-for-rounding-off-contract-cost-of-market">Audit reporting</SourceLink></div><SourceLink href="https://www.coa.gov.ph/wpfd_file/dumanjug-annual-audit-report-2025/">2025 annual audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/dumanjug-annual-audit-report-2024/">2024 annual audit</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Was the questioned public market procurement resolved?</li><li>Are bid evaluations and contract amendments publicly accessible?</li><li>Are procurement records and infrastructure completion reports available?</li><li>What independent oversight exists when all council seats are uncontested?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Questions do not constitute findings of wrongdoing.</div></div>;
}

function GinatilanProfile() {
 const history = [["2025","Roy Vincent Singco","Dean Michael Singco"],["2022","Roy Vincent Singco","Dean Michael Singco"],["2019","Dean Michael Singco","Jose Ramon Gornez"],["2016","Dean Michael Singco","Jose Ramon Gornez"],["2013","Dean Michael Singco","Jose Ramon Gornez"],["2010","Antonio Singco","Dean Michael Singco"],["2007","Dean Michael Singco","Jose Ramon Gornez"],["2004","Dean Michael Singco","Clarito Dinglasa"],["2001","Dean Michael Singco","Nicolas Jomuad"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Ginatilan, Cebu</h4><p className="text-sm mt-2">7th Congressional District · 14 barangays · 16,906 population (2020) · 12,604 registered voters (2025)</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Roy Vincent Pastoriza Singco</strong> — 8,390 votes.</p><p>Vice Mayor: <strong>Dean Michael Pastoriza Singco</strong> — 8,375 votes, unopposed.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Eti Joel Gornez — 8,344","Abigail Tolabing — 7,949","Karyn Duterte — 7,618","Andang Patenio — 7,089","Wilfie Singco — 6,925","Kirby Cesar Ibo — 6,425","Pearly Emia — 6,267","Jan Walter Tocao — 5,878"].map(n => <li key={n}>{n}</li>)}</ul><p className="text-sm">Unofficial returns, 100% of precincts reporting May 15, 2025. Leadership directory as of February 2026.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/ginatilan">Election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>2025 national budget allocations: Ginatilan River revetment walls, Barangay Palanas, left and right sides, ₱100 million each. Allocations are not actual expenditures; awards and completion remain unverified.</p><SourceLink href="https://lovethephilippines.com/lgu/0702225000-ginatilan">Project records compilation</SourceLink><SourceLink href={`${budgetUrl}?q=Ginatilan#projects`}>View Ginatilan Budget Records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Political Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><SourceLink href="https://scene.ph/atlas/cebu/ginatilan">Historical leadership records</SourceLink><p className="text-sm">All nine mayoral elections since 2001 were won by politicians surnamed Singco. Specific family relationships remain unverified.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2022 telephone allowances</h5><p className="text-sm">The Freeman reported July 12, 2023 that COA recommended refunds of ₱177,750 paid to 60 job order workers as telephone allowances outside contractual provisions. Resolution is unverified.</p><SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2023/07/12/2280515/coa-cuts-phone-allowance-ginatilan-jo-employees">Audit reporting</SourceLink></div><p>2019 financial statements received an unmodified audit opinion; this does not certify every transaction.</p><SourceLink href="https://ginatilancebu.appspot.com/Accounting/pdfs/Accountingpdfs.pdf">2019 auditor report</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Were questioned allowances refunded or resolved?</li><li>Who received the river project contracts and what is their completion status?</li><li>How are conflicts of interest managed?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Questions do not constitute findings of wrongdoing.</div></div>;
}

function LiloanProfile() {
 const history = [["2025","Aljew Frasco","Margarita Frasco"],["2022","Christina Frasco","Aljew Frasco"],["2019","Christina Frasco","Thelma Jordan"],["2016","Christina Frasco","Dodong Frasco"],["2013","Vincent Frasco","Lucelito Pilapil"],["2010","Vincent Frasco","Merelito Surita"],["2007","Vincent Frasco","Thelma Jordan"],["2004","Maria Sevilla","Merelito Surita"],["2001","Maria Sevilla","Panphil Frasco"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Liloan, Cebu</h4><p className="text-sm mt-2">5th Congressional District · 14 barangays · 158,387 population (2024) · 87,305 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/liloan">Census and historical records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><div className="bg-white border rounded-lg p-4"><p>Mayor: <strong>Aljew Fernando Jordan Frasco</strong> — 56,333 votes.</p><p>Vice Mayor: <strong>Margarita Domingo Frasco</strong> — 56,128 votes, unopposed.</p></div><h5 className="font-semibold">Eight leading council candidates in 2025</h5><ul className="list-disc pl-5 text-sm">{["Darwin Apas — 54,534","Kath Jumapao — 45,351","Cedric Cañete — 40,113","Thelma Jordan — 39,889","Edna Cala — 38,388","Richard Pendo — 37,712","Lucelito Pilapil — 36,278","Bernard Lopez — 34,663"].map(n => <li key={n}>{n}</li>)}</ul><p>All eight ran under One Cebu. Unofficial returns, all precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/liloan">Election results</SourceLink><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership and Documented Family Connections</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor elected</th><th>Vice Mayor elected</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Aljew succeeded Christina in 2022 when she joined the Cabinet. Duke Frasco and Christina are spouses; Margarita is Duke's sister, and Aljew is their cousin. The congressional policy research department identifies the Garcia-Frasco family as an inter-dynasty configuration. Family ties alone do not establish misconduct.</p><SourceLink href="https://www.philstar.com/cebu-news/2025/05/14/2443013/some-political-clans-dominate-2025-polls/amp/">Documented family ties</SourceLink><SourceLink href="https://cpbrd.congress.gov.ph/wp-content/uploads/2026/04/CSP-65-STATISTICAL-INVENTORY-OF-POTENTIAL-POLITICAL-DYNASTS.pdf">Congressional research inventory, p. 92</SourceLink><SourceLink href="https://visayas.politiko.com.ph/2022/07/05/christina-frasco-hands-over-liloan-reins-to-cousin-aljew/social-snitch/">2022 succession</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Documents</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2024 annual audit</h5><p> The Freeman reported ₱449,365.97 in unliquidated cash advances, including ₱364,600.08 from the Special Education Fund involving a deceased accountable officer. COA denied a write-off request. Repeated liquidation concerns, delayed assistance and irregular employee incentives were also reported. Resolution remains unverified.</p><SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2025/12/16/2494682/coa-hits-financial-lapses-liloan">Audit reporting</SourceLink></div><p>2019 financial statements received an unmodified opinion, which does not certify every transaction.</p><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/liloan-gets-highest-coa-audit-rating">2019 audit reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Individual project allocations, contracts and actual expenditures require verification against official records.</p><SourceLink href={`${budgetUrl}?q=Liloan#projects`}>View Liloan Budget Records</SourceLink></section>
 <section className="space-y-2"><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Have outstanding advances and delayed assistance been resolved?</li><li>What safeguards ensure independent council oversight and conflict-of-interest management?</li><li>What are the contract values and completion status of flood mitigation projects?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations and family connections are not proof of corruption.</div></div>;
}

function MadridejosProfile() {
 const history = [["2025","Romeo Villaceran","Vincent Villacrucis"],["2022","Romeo Villaceran","Vincent Villacrucis"],["2019","Salvador Dela Fuente","Jay River Dela Fuente"],["2016","Jay River Dela Fuente","Salvador Dela Fuente"],["2013","Salvador Dela Fuente","Floreto Batayola"],["2010","Salvador Dela Fuente","Delfin Santillan"],["2007","Salvador Dela Fuente","Doroteo Salazar"],["2004","Lety Mancio","Virgilio Atienza"],["2001","Lety Mancio","Salvador Villaruel Jr."]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Madridejos, Cebu</h4><p>4th Congressional District · 14 barangays · 42,039 population (2020) · 42,828 (2024) · 30,868 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/madridejos">Municipal and historical records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><p>Mayor: Romeo Albaciete Villaceran — 18,460 votes.</p><p>Vice Mayor: Vincent Ybañez Villacrucis — 17,670 votes.</p><h5 className="font-semibold">Eight leading council candidates, 2025</h5><ul className="list-disc pl-5 text-sm">{["Stephen Olingay — 17,871","Venice Cyrus Rebadomia — 14,801","Nene Bacayo — 14,403","Julius Villaceran — 13,434","Perla Molina — 12,792","Owen Daruca — 12,701","Delfin Santillan — 12,658","Villamor Batayola II — 12,411"].map(n => <li key={n}>{n}</li>)}</ul><p>Seven ran under One Cebu. Unofficial returns, all precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/madridejos">2025 election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year, mayor, vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Five consecutive mayoral victories involving the Dela Fuente surname, 2007–2019. Specific family relationships remain unverified.</p><SourceLink href="https://scene.ph/atlas/cebu/madridejos">Historical election records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA Audit and Public Records</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">2022 development fund observations</h5><p>Reported issues: ₱8M in lump-sum projects lacking council authorization upon utilization; ₱8.338M in realignments without approved amended investment plans; ₱6.440M current and ₱8.044M continuing appropriations not implementation-ready; ₱2.287M unspent balances not reverted. Categories may overlap and are not established losses.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2023/06/30/2277672/coa-seven-lgus-spend-development-fund-unplanned-projects">Audit reporting, June 2023</SourceLink></div><p>COA questioned at least ₱7.3M in cash advances in 2005. A complaint was filed in 2006; former mayor Lety Mancio denied unauthorized disbursements and said the funds supported municipal projects. Final disposition unverified.</p><SourceLink href="https://www.philstar.com/cebu-news/2006/12/29/377375/vice-mayor-councilors-sue-madridejos-mayor-graft">Complaint reporting</SourceLink><SourceLink href="https://www.philstar.com/cebu-news/2007/01/04/378258/madridejos-mayor-eyes-libel-raps-vs-vm-others">Response reporting</SourceLink><p>The 2022 municipal financial improvement resolution identified the absence of an internal audit service.</p><SourceLink href="https://madridejoscebu.gov.ph/wp-content/uploads/2023/06/Resolution-No.-2022-142-PFMIP-2022-2024.pdf">Municipal resolution</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/madridejos-annual-audit-report-2023/">2023 annual audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/madridejos-compliance-audit-report-2023/">Disaster fund compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Selected 2025 national budget allocations: Mancilang–Malbago seawall phase 2 ₱150.5M; Tabagak–Bunakan seawall phase 2 ₱150.5M; Malbago slope protection ₱125M. Combined ₱426M. Secondary compilation; contract awards and completion require verification.</p><SourceLink href="https://lovethephilippines.com/lgu/0702228000-madridejos">Project records compilation</SourceLink><SourceLink href={`${budgetUrl}?q=Madridejos#projects`}>View Madridejos Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Has an internal audit service been established?</li><li>Have development fund observations been resolved?</li><li>What are the current contract and completion records for coastal protection projects?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations, complaints and recurring surnames do not establish corruption.</div></div>;
}

function MalabuyocProfile() {
 const history = [["2025","Erlinda Piedad","Anna Allosada"],["2022","Erlinda Piedad","Anna Allosada"],["2019","Lito Narciso Endrina Creus","Lito Narciso Lim Creus III"],["2016","Lito Narciso Endrina Creus","Lito Narciso Lim Creus III"],["2013","Lito Narciso Endrina Creus","Lito Narciso Lim Creus Jr."],["2010","Daisy Lim Creus","Lito Narciso Endrina Creus"],["2007","Daisy Lim Creus","Lito Narciso Endrina Creus"],["2004","Daisy Creus","Lito Narciso Creus"],["2001","Lito Narciso E. Creus","Rolando Quiñones"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Malabuyoc, Cebu</h4><p>7th Congressional District · 14 barangays · 19,770 population (2020) · 15,074 registered voters (2025) · 69.27 km²</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/malabuyoc">Municipal profile and election records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><p>Mayor: Erlinda Quiñones Piedad — 11,517 votes.</p><p>Vice Mayor: Anna Devorah Dahilan Allosada — 10,686 votes, unopposed.</p><h5 className="font-semibold">Eight leading council candidates, 2025 (ballot names)</h5><ul className="list-disc pl-5 text-sm">{["Onin Allosada — 10,257","Edreeve Kho — 9,692","Shean Piedad — 9,678","Sir Maning Aguelo — 9,227","DC Clavecillas — 8,487","Cecille Archita — 8,262","Kap Analyn Niaga — 8,163","James Villarojo — 7,955"].map(n => <li key={n}>{n}</li>)}</ul><p>All eight ran under One Cebu, as did the mayor and vice mayor. Unofficial returns, all precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/malabuyoc">2025 election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Seven consecutive mayoral election victories involving the Creus surname from 2001 to 2019. SunStar confirms Daisy and Lito Creus are spouses. Other relationships require verification.</p><SourceLink href="https://scene.ph/atlas/cebu/malabuyoc">Historical records and DILG directory compilation</SourceLink><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/explainer-election-of-barangay-captain-ordered-dismissed-in-2020-by-ombudsman-for-p50000-illegal-spending-raises-questions-on-1-her-right-to-assume-as-town-mayor-and-b-wisdom-of-malabuyoc-voters">2022 election and family relationship reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Administrative Accountability</h4><div className="bg-white rounded-lg border p-4"><h5 className="font-bold">₱3.152M fiesta expenditure questioned (2022 audit)</h5><p>Auditors raised concerns about event expenses and were unable to verify certain procurement procedures because supporting documents were submitted late. Subsequent resolution unverified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2023/07/20/2282402/malabuyoc-execs-called-out-irregular-expenditure">The Freeman, July 20, 2023</SourceLink></div><p>SunStar reported a 2020 Ombudsman dismissal order involving Piedad as barangay captain and a questioned ₱50,000 expenditure. Subsequent appellate disposition has not been verified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/explainer-election-of-barangay-captain-ordered-dismissed-in-2020-by-ombudsman-for-p50000-illegal-spending-raises-questions-on-1-her-right-to-assume-as-town-mayor-and-b-wisdom-of-malabuyoc-voters">Administrative case reporting, May 2022</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/malabuyoc-annual-audit-report-2025/">2025 annual audit report — full findings not reviewed</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Provincial bulk water project: 86.77% complete at inspection; no electricity at the plant, contract suspension and contractor licensing issues delayed delivery. The ₱822M figure in reporting covers 15 provincial projects, not Malabuyoc alone.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/15-waterworks-idle">Provincial waterworks audit reporting</SourceLink><p>NBI inspected flood control works in Mindanao, Montañeza and Sorsogon in September 2025. Key sections were found completed; further document and quality review was needed. Final investigation outcome unverified.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/nbi-inspects-anomalous-flood-control-projects-in-malabuyoc-finds-key-sections-completed">NBI inspection reporting</SourceLink><SourceLink href={`${budgetUrl}?q=Malabuyoc#projects`}>View Malabuyoc Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Were the fiesta audit recommendations implemented?</li><li>What is the current status and cost of the water project?</li><li>What were the final findings of the flood control investigation?</li><li>How does the council ensure independent oversight?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations and administrative cases do not establish criminal wrongdoing. Recurring surnames do not establish family relationships.</div></div>;
}

function MedellinProfile() {
 const history = [["2025","Edwin Salimbangon","Joven Mondigo Jr."],["2022","Joven Mondigo Jr.","Juan Alfonso Lim"],["2019","Joven Mondigo Jr.","Juan Alfonso Lim"],["2016","Joven Mondigo Jr.","Lee RJ Villapez"],["2013","Ricardo Ramirez","Juan Alfonso Lim"],["2010","Ricardo Ramirez","Michael Miranda"],["2007","Ricardo Ramirez","Michael Miranda"],["2004","Manreza Lim","Ricardo Ramirez"],["2001","Manreza Lim","Ricardo Ramirez"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Medellin, Cebu</h4><p>4th Congressional District · 42,006 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/medellin">Municipal profile and leadership records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><p>Mayor: Edwin Lago Salimbangon — 13,809 votes (PFP).</p><p>Vice Mayor: Joven Jumao-as Mondigo Jr. — 24,018 votes (One Cebu).</p><h5 className="font-semibold">Eight leading council candidates, 2025</h5><ul className="list-disc pl-5 text-sm">{["Miguel Salimbangon — 20,233","Paul Mondigo — 19,804","Kendrick Lim — 16,250","Harold Salimbangon — 15,567","Regene Cudiera — 14,847","Raymond Olivar — 13,973","Rondey Rodriguez — 13,062","Aljohn Lim — 12,486"].map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial returns, 100% precincts reporting May 15, 2025. Council candidates represent several parties and an independent.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/medellin?contest=Vice+Mayor">2025 election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Four individuals won nine mayoral elections. Seven of ten leading elected municipal positions in 2025 carry the surnames Salimbangon, Mondigo or Lim. Exact family relationships remain unverified.</p><SourceLink href="https://scene.ph/atlas/cebu/medellin">Historical COMELEC and DILG compilation</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Service Accountability</h4><p>Official audit records identified; specific findings and financial amounts have not been verified from the full reports.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/medellin-cebu/">Municipal solid waste management citizen participatory audit (2024 publication)</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/medellin-water-district-cebu-compliance-audit-report-2025/">Water district sampling compliance audit 2025</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/medellin-water-district-cebu-biennium-audit-report-2024-2025/">Water district biennium audit 2024–2025</SourceLink><p>The water district is a separate entity from the municipal government.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Individual project allocations, contract awards, disbursements and completion status require verification.</p><SourceLink href={`${budgetUrl}?q=Medellin#projects`}>View Medellin Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What actions followed the solid waste audit?</li><li>Are water quality sampling results publicly accessible?</li><li>Which infrastructure contracts are complete and operational?</li><li>How are conflicts of interest disclosed and managed?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit records do not establish wrongdoing. Shared surnames do not establish kinship.</div></div>;
}

function MinglanillaProfile() {
 const history = [["2025","Rajiv Enad","Elanito Peña"],["2022","Rajiv Enad","Elanito Peña"],["2019","Elanito Peña","Loben Geonzon"],["2016","Elanito Peña","Robert Selma"],["2013","Elanito Peña","Robert Selma"],["2010","Eduardo Selma","Elanito Peña"],["2007","Eduardo Selma","Elanito Peña"],["2004","Eduardo Selma","Elanito Peña"],["2001","Marlo Hedwigo Cañada","Eduardo Selma"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Minglanilla, Cebu</h4><p>1st Congressional District · 19 barangays · 151,002 population (2020) · 65.60 km² · 80,580 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/minglanilla">Municipal profile and election records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials</h4><p>Mayor: Rajiv Varron Enad — 61,914 votes (NP).</p><p>Vice Mayor: Elanito Alidon Peña — 57,571 votes (NP).</p><p>Both ran unopposed in 2025.</p><h5 className="font-semibold">Eight leading council candidates, 2025</h5><ul className="list-disc pl-5 text-sm">{["Lheslen Enad — 56,656","Jay-R De La Calzada — 51,076","Jong-Jong Adlawan — 43,697","Boyet Velez — 37,056","Mulot Laput — 36,569","Jehn Lariosa — 36,475","Jerry Cañares — 32,016","Jimmy Caumeran — 30,247"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading municipal candidates ran under the Nacionalista Party. Unofficial returns, 100% precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/minglanilla">2025 election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Elanito Peña won mayoral or vice-mayoral office in eight consecutive elections from 2004 to 2025. Shared surnames do not establish family relationships; specific kinship remains unverified.</p><SourceLink href="https://scene.ph/atlas/cebu/minglanilla">Historical COMELEC and DILG compilation</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2019NLE/ElectionResults/2019NLE_LIst_of_Elected_CityMun_Candidates.pdf">Official 2019 election records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Accountability</h4><p>The 2024 audit reportedly flagged stalled construction of the ₱399.9 million government center in Poblacion. A land ownership dispute halted construction in 2023; work reportedly resumed in June 2025 after a court ruling. Current completion status and actual disbursements remain unverified.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/stalled-govt-center-triggers-coa-warning-mayor-says-project-back-on-track-in-june">SunStar report, December 9, 2025</SourceLink><p>The 2023 disaster fund compliance audit covers transfers of unused funds and reversion after five years. Specific findings and amounts require verification from the full report.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/minglanilla-compliance-audit-report-2023/">Official COA compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Government center reported project value: ₱399.9 million, not confirmed expenditure. Other project allocations and contract awards require verification.</p><SourceLink href={`${budgetUrl}?q=Minglanilla#projects`}>View Minglanilla Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What is the revised government center completion date and total contract cost?</li><li>Were additional costs incurred during the suspension?</li><li>What corrective actions followed the disaster fund audit?</li><li>How does the council provide independent oversight and disclose conflicts of interest?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations and party affiliation do not establish wrongdoing. Shared surnames do not establish kinship.</div></div>;
}

function MoalboalProfile() {
 const history = [["2025","Inocentes Cabaron","Jinky Hanika"],["2022","Inocentes Cabaron","Paz Rozgoni"],["2019","Lingling Rozgoni","Inocentes Cabaron"],["2016","Inocentes Cabaron","Lingling Rozgoni"],["2013","Requires verification","Nelson Abenido (provisional)"],["2010","Requires verification","Requires verification"],["2007","Yvonne Cabaron","Nelson Abenido"],["2004","Inocentes Cabaron","Felix Pocong Jr."],["2001","Inocentes Cabaron","Felix Pocong Jr."]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Moalboal, Cebu</h4><p>7th Congressional District · 15 barangays · 36,930 population (2020) · 124.86 km² · 24,546 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/moalboal">Municipal profile and election records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Inocentes Gabunilas Cabaron — 12,278 votes (One Cebu).</p><p>Vice Mayor: Jinky Cabusog Hanika — 17,793 votes (One Cebu), unopposed.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Bello Domugho — 14,115","Zerg Tabañag — 13,680","Susan Billones — 13,034","Lino Deniega — 12,826","Noel Grengia — 12,435","Cere Tapales — 11,655","Jet Tabacon — 11,399","Dodong Sabac — 10,614"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading candidates ran under One Cebu. Unofficial returns, 100% precincts reporting May 15, 2025.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/moalboal">2025 election returns</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_MOALBOAL.pdf">COMELEC certified candidates</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Historical entries are provisional pending confirmation from official election records. Conflicting 2010 and 2013 entries require verification. Shared surnames do not establish kinship.</p><SourceLink href="https://www.comelec.gov.ph/">COMELEC official records portal</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Accountability</h4><p>Five delayed infrastructure projects worth ₱36,472,007.57 were flagged in audit findings reported October 14, 2026: Coast Guard office expansion, welcome signs for 15 barangays, road rehabilitation in Poblacion West and Panagsama, road repairs in Poblacion West, and road concreting in Agbalanga. COA questioned preliminary engineering and planning. The municipality committed to improving procedures. Project values are not established losses.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2026/10/14/2563154/p36-million-moalboal-infra-projects-flagged">The Freeman, October 14, 2026</SourceLink><p>The municipality reported an unmodified opinion on its 2022 financial statements; this does not certify every transaction as compliant.</p><SourceLink href="https://moalboalcebu.gov.ph/2690-2/">Municipal audit announcement</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Government Projects</h4><p>Moalboal was the only one of 16 provincial bulk water projects supplying water during audit inspections in November 2025 and January 2026. Payments for Moalboal amounted to ₱56.88 million, compared with ₱822.44 million for the other 15 projects. Reported supply reached three million liters daily by September 2026. This is provincial spending, not municipal expenditure.</p><SourceLink href="https://www.sunstar.com.ph/cebu/15-waterworks-idle">SunStar, November 20, 2026</SourceLink><SourceLink href={`${budgetUrl}?q=Moalboal#projects`}>View Moalboal Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>What are the revised completion dates and costs of the five delayed projects?</li><li>Were extension requests and variation orders properly supported?</li><li>How many households receive bulk water and at what tariff?</li><li>How does the council ensure independent oversight and disclose conflicts of interest?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish wrongdoing. Current officeholders, audit resolutions and historical election entries require further verification.</div></div>;
}

function OslobProfile() {
 const history = [["2025","Ronald Guaren","Edel Nazareno"],["2022","Ronald Guaren","Roger Trapa"],["2019","Jun Tumulak","Christopher Amit"],["2016","Jun Tumulak","Ronald Guaren"],["2013","Ronald Guaren","Leonardo Rendon"],["2010","Ronald Guaren","Jose Tumulak"],["2007","Ronald Guaren","Pacifica Letigio"],["2004","Emilito Abines","Regino Abines"],["2001","Emelito Abines","Ronald Guaren"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Oslob, Cebu</h4><p>2nd Congressional District · 21 barangays · 29,264 population (2020) · 134.75 km² · 21,303 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/oslob">Municipal profile and election records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Ronald Luna Guaren — 10,427 votes (One Cebu).</p><p>Vice Mayor: Friedel Ricardo Gutierrez Nazareno — 9,806 votes (One Cebu).</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Eti Franz Barrera — 10,562","Therese Guaren — 10,180","Jose Dodjie Abines — 9,558","Carlos Mirasol — 9,349","Brando Romares — 8,258","Gwen Gallano — 8,186","Arturo Doroon — 8,014","Florencio Labiste — 8,014"].map(n => <li key={n}>{n}</li>)}</ul><p>Seven leading council candidates ran under One Cebu; Labiste ran under PMP. Unofficial returns, 100% precincts reporting.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/oslob">2025 election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Guaren won five mayoral elections. Historical spellings and kinship require verification; shared surnames do not establish family relationships.</p><SourceLink href="https://scene.ph/atlas/cebu/oslob">Historical leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Accountability</h4><p>The 2022 audit raised concerns about cash advances, job-order hiring and delayed real property tax shares for barangays. Audit resolutions remain unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/oslob-rakes-in-p230-million-on-return-of-whale-watching-jump-in-national-revenue-share">SunStar report on 2022 annual audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Tourism Revenue</h4><p>Total municipal revenue increased from ₱136.8M in 2021 to ₱229.9M in 2022. Tourism revenue increased from ₱3.4M to ₱35.3M. Reported 2022 receipts: whale shark viewing ₱31.03M, Sumilon ₱3.08M, Luka/Tumalog Falls ₱1.17M, monkey viewing ₱67,089. Rounded amounts. These are historical revenues, not current budget allocations.</p><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/oslob-rakes-in-p230-million-on-return-of-whale-watching-jump-in-national-revenue-share">Revenue figures from 2022 audit reporting</SourceLink><SourceLink href={`${budgetUrl}?q=Oslob#projects`}>View Oslob Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>How much tourism revenue is collected annually and how is it distributed?</li><li>What funding supports marine conservation and wastewater management?</li><li>Have cash advance and barangay tax share audit issues been resolved?</li><li>Are tourism contracts, environmental monitoring and project completion reports public?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish wrongdoing. Current officeholders, environmental compliance, project amounts and audit resolutions require further verification.</div></div>;
}

function PilarProfile() {
 const history = [["2025","Manuel Santiago","Chiziline Maratas"],["2022","Manuel Santiago","Chiziline Maratas"],["2019","Manuel Santiago","Antonio Ceballos"],["2016","Eufracio Maratas Jr.","Grace Japlit"],["2013","Jesus Fernandez Jr.","Eli Borinaga"],["2010","Jesus Fernandez Jr. (provisional)","Eufracio Maratas Jr."],["2007","Jesus Fernandez","Rommel Tajo"],["2004","Jesus Fernandez","Rommel Tajo"],["2001","Jesus Fernandez","Reynaldo Malaluan Jr."]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Pilar, Cebu</h4><p>5th Congressional District · 13 barangays · 12,506 population (2020) · 32.42 km² · 9,607 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/pilar">Municipal profile and election returns</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Manuel Posas Santiago — 4,799 votes.</p><p>Vice Mayor: Chiziline Segne Maratas — 4,429 votes.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Mark Ybañez — 4,692","Dome Ceballos — 4,561","Mario Pelostratos — 4,475","Deding Salazar — 4,404","Dolly Dales — 4,370","Ben Santiago — 4,325","Tony Pedericos — 4,259","Rudy Madrazo — 4,070"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading candidates ran under One Cebu. Unofficial returns, 100% precincts reporting.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/pilar">2025 election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>2010 mayoral records need reconciliation. Family relationships are unverified; shared surnames do not establish kinship.</p><SourceLink href="https://scene.ph/atlas/cebu/pilar">Historical leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Accountability</h4><div className="rounded-lg border bg-white p-4"><h5 className="font-bold">₱191.27 million — Yolanda housing project</h5><p>52% complete at year-end 2025, beyond the original July 31, 2022 deadline. COA identified planning, engineering and supervision deficiencies. A March 2026 inspection found deterioration in partially built homes. Original target: 660 units; revised in 2019 to 406; subsequently reduced to 260. Reportedly 48 units turned over in March 2026. Final completion and actual disbursements remain unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/slow-progress-of-camotes-housing-for-yolanda-survivors-questioned">SunStar reporting on COA findings, October 11, 2026</SourceLink></div><p>COA published a 2025 compliance audit concerning disaster fund allocations and alignment of investment and financial plans with the disaster management plan. Detailed findings have not yet been reviewed.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/pilar-compliance-audit-report-2025-3/">Official COA compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Infrastructure</h4><p>Housing project budget is not an established financial loss or a verified disbursement. Other municipal project amounts require verification.</p><SourceLink href={`${budgetUrl}?q=Pilar#projects`}>View Pilar Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>How many housing units have been completed and occupied?</li><li>Why was the target reduced and what happened to excluded beneficiaries?</li><li>What contract modifications and payments were approved?</li><li>What corrective action followed the disaster fund audit?</li><li>What are the current water, healthcare and emergency transport service levels?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations do not establish wrongdoing. Current officeholders, family ties, project completion and audit resolutions require further verification.</div></div>;
}

function PinamungajanProfile() {
 const history = [["2025","Glenn Baricuatro","Ana Jessica Baricuatro"],["2022","Ana Jessica Baricuatro","Glenn Baricuatro"],["2019","Glenn Baricuatro","Richard Canillo"],["2016","Glenn Baricuatro","Maria Honeylette Yapha-Lingad"],["2013","Glenn Baricuatro","Maria Honeylette Yapha"],["2010","Geraldine Yapha","Maria Honeylette Yapha"],["2007","Geraldine Yapha","Jeffrey Yapha"],["2004","Jeffrey Yapha","Francisco Bellones"],["2001","Jeffrey Yapha","Francisco Bellones"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Pinamungajan, Cebu</h4><p>3rd Congressional District · 26 barangays · 75,131 population (2020) · 109.16 km² · 49,554 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/pinamungajan">Municipal profile and election returns</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Glenn Fuentes Baricuatro — 32,817 votes.</p><p>Vice Mayor: Ana Jessica Alpas Baricuatro — 32,400 votes.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Richard Canillo — 27,004","Anet Navarro — 26,248","Julius Alpas — 24,978","Insoy Niñal — 24,437","Joseph Alqueza — 22,762","Marvin Miralles — 22,563","JC Managaytay — 21,640","Ellen Limocon — 19,932"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading candidates ran under One Cebu. Unofficial returns, 100% precincts reporting.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/pinamungajan">2025 election returns</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_PINAMUNGAJAN.pdf">COMELEC certified candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Five mayoral victories by the Baricuatro surname and four by the Yapha surname. The 2022 mayor and vice mayor exchanged positions in 2025. Kinship is not established by surnames alone.</p><SourceLink href="https://scene.ph/atlas/cebu/pinamungajan">Historical leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">COA and Public Accountability</h4><div className="rounded-lg border bg-white p-4"><h5 className="font-bold">₱4.3 million — reported auditorium excess cost</h5><p>In 2013 COA questioned material prices and quantities on a ₱19.9 million contract against an allowable cost of approximately ₱15.5 million. Recovery was sought; final disposition unverified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2013/11/23/1259897/pinamungajan-coa-auditorium-overpriced">The Freeman, November 23, 2013</SourceLink></div><div className="rounded-lg border bg-white p-4"><h5 className="font-bold">₱7 million — water system</h5><p>Anislag and Guimbawian-Duangan project: 60.88% complete and 95 days late at year-end 2013. LGU cited a land dispute; COA reported no suspension order supplied. Current status unverified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2014/09/03/1364925/p7m-water-system-project-contract-faces-termination">The Freeman, September 3, 2014</SourceLink></div><p>2024 Special Education Fund compliance audit identified as a relevant official record; detailed findings require review.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/pinamungajan-compliance-audit-report-2024/">Official COA compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budgets and Infrastructure</h4><div className="rounded-lg border bg-white p-4"><h5 className="font-bold">₱1.153 million — Tajao public beach comfort room</h5><p>2024 SGLG Incentive Fund. Signage indicated June 27, 2025 construction start, before the September 29 Notice to Implement and October 6 transmission. DILG scheduled an October 28 inspection. Questions about contractor identity were reported; final findings remain unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/dilg-to-inspect-p115m-public-toilet">SunStar, October 22, 2025</SourceLink></div><SourceLink href={`${budgetUrl}?q=Pinamungajan#projects`}>View Pinamungajan Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Public Accountability Questions</h4><ul className="list-disc pl-5 text-sm"><li>Was the auditorium excess cost recovered?</li><li>Is the water system operational?</li><li>What were the final DILG inspection findings and actual toilet project payments?</li><li>What corrective actions followed the education fund audit?</li><li>How does the council maintain independent oversight?</li></ul></section><div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-900">Independent civic research. Audit observations and reported allegations do not establish criminal wrongdoing. Current officeholders, family ties, project completion and audit resolutions require further verification.</div></div>;
}

function PoroProfile() {
 const history = [["2025","Edgar Rama","Dina Rama"],["2022","Edgar Rama","Dina Rama"],["2019","Edgar Rama","Luciano Rama Jr."],["2016","Luciano Rama Jr.","Edgar Rama"],["2013","Luciano Rama Jr.","Edgar Rama"],["2010","Luciano Rama Jr.","Edgar Rama"],["2007","Edgar Rama","Not yet verified"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Poro, Cebu</h4><p>5th Congressional District · 17 barangays · 26,232 population (2020) · 26,908 (2024) · 19,302 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/poro">Municipal profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Edgar Gadingan Rama — 9,861 votes.</p><p>Vice Mayor: Dina Zurita Rama — 9,896 votes.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Ashley Otadoy — 9,651","Jhayson Morata — 9,580","Andrew Zurita — 9,357","Emilianito Borlasa — 9,264","Sally Estrera — 9,220","Reno Culango — 8,667","Alfie Yuzon — 8,491","Rogelio Gutierrez Jr. — 8,437"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading candidates ran under One Cebu. Unofficial returns, 100% precincts reporting.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/poro">Election returns</SourceLink><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Earlier election records and specific family relationships remain unverified. Shared surnames do not establish kinship.</p><SourceLink href="https://scene.ph/atlas/cebu/poro">Historical leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>FY 2025 reported local government income: ₱176.9 million; reported operating spending: ₱130.7 million. National Tax Allotment represented 84.4% of income, according to the compiled financial directory.</p><SourceLink href="https://scene.ph/atlas/cebu/poro">Financial directory</SourceLink><p>COA published a 2022 compliance audit of the 20% Development Fund on June 30, 2023. Detailed findings and corrective actions have not been verified.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/poro-compliance-audit-report-2022/">Official COA report</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development Projects</h4><div className="rounded-lg border bg-white p-4"><h5 className="font-bold">₱100 million — proposed Poro Activity Area</h5><p>Eastern Poblacion, TIEZA. The regional investment program records a proposed recreational and tourism facility. EMB Region VII advised redesign of the reclamation component under applicable restrictions. Endorsement is subject to environmental permits. Proposed amount, not confirmed expenditure.</p><SourceLink href="https://dro7.depdev.gov.ph/wp-content/uploads/2026/01/CV-RDIP-2025-Update.pdf">Regional Development Investment Program</SourceLink></div><SourceLink href={`${budgetUrl}?q=Poro#projects`}>View Poro Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Information for Further Review</h4><ul className="list-disc pl-5 text-sm"><li>Latest development fund audit recommendations and implementation status.</li><li>Updated design, permits and funding status of the activity area.</li><li>Municipal service delivery and infrastructure performance.</li></ul></section><div className="rounded-lg border bg-white p-4 text-xs">Independent civic research. Figures retain their reporting dates; proposed allocations are not actual disbursements. Unverified information is identified separately.</div></div>;
}

function RondaProfile() {
 const history = [["2025","Chantilli Ann Blanco","Rocky Gabatan"],["2022","Terence Blanco","Rocky Gabatan"],["2019","Mariano Terence Blanco V","Rocky Gabatan"],["2016","Mariano Blanco III","Jonnah Ungab"],["2013","Mariano Blanco III","Jonnah Ungab"],["2010","Mariano Blanco III","Jonnah Ungab"],["2007","Esteban Sia","Mariano Blanco III"],["2004","Mariano Blanco III","Victoria Blanco"],["2001","Mariano Blanco III","Victoria Blanco"]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Ronda, Cebu</h4><p>7th Congressional District · 14 barangays · 57.10 km² · 21,005 population (2020) · 21,179 (2024) · 15,920 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/ronda">Municipal profile</SourceLink><SourceLink href="https://lovethephilippines.com/lgu/0702239000-ronda">2024 population compilation</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Chantilli Ann Victoria Labra Blanco — 11,036 votes.</p><p>Vice Mayor: Rocky Tobes Gabatan — 11,055 votes.</p><p>Both ran unopposed. Voter turnout: 88.54%.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Ann Marie Blanco — 9,749","Jose Zozobrado — 8,511","Lope Camallere — 8,387","Joxannah Mae Villanueva — 8,327","Miguelito Lazarraga — 7,946","Bertoldo Mansueto — 7,688","Rolando Jakosalem — 7,566","Alfred Ricahuerta — 7,472"].map(n => <li key={n}>{n}</li>)}</ul><p>Seven leading council candidates represented One Cebu and one ran independently. Unofficial returns, 100% precincts reporting; current council roster not independently verified.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/ronda">Election returns</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_RONDA.pdf">COMELEC candidate list</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/Statistics/2025_NLE_RVVAV_BY_SEX_AGE_112525.pdf">COMELEC turnout statistics</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><div className="overflow-x-auto"><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table></div><p>Eight of nine mayoral election victories involved the Blanco surname. These are election results, not continuous officeholding records. Specific family relationships remain unverified.</p><SourceLink href="https://scene.ph/atlas/cebu/ronda">Historical leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>2024 revenue: ₱137.74 million; expenditure: ₱57.45 million; assets: ₱456.56 million; liabilities: ₱103.39 million. Compiled COA-referenced financial data.</p><SourceLink href="https://www.wikidata.org/wiki/Q316289">Financial compilation</SourceLink><p>2009 audit: ₱4.19 million in outstanding cash advances and ₱29.69 million in assets subject to inventory verification. A related court ruling was reported in February 2023; appellate and recovery status remain unverified.</p><SourceLink href="https://www.philstar.com/cebu-news/2010/12/03/635347/coa-says-ronda-cash-advances-illegal/amp/">2009 audit reporting</SourceLink><SourceLink href="https://www.sunstar.com.ph/cebu/local-news/explainer-why-sandiganbayan-rejected-ronda-town-treasurerrsquos-defense-that-the-mayor-coerced-him-on-illegal-p2063m-cash-advances">2023 court reporting</SourceLink><p>2014 audit: ₱53,515 in travel reimbursements questioned. The then-mayor disputed the assessment and explained that the trips sought national assistance. Final resolution unverified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2015/08/15/1488727/coa-quizzed-ronda-mayorsextravagant-travel-expenses">2014 audit reporting</SourceLink><p>2025 annual audit published September 21, 2026; detailed findings not yet reviewed.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/ronda-annual-audit-report-2025/">Official COA report</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development Projects and Social Services</h4><p>Selected 2025 GAA allocations: ₱100 million each for revetment walls at Vive River Phase 3, Ilaya to Butong, Purok Kalubihan I in Liboo, and Butong to Tupas. Total ₱400 million; actual payments and completion unverified.</p><SourceLink href="https://lovethephilippines.com/lgu/0702239000-ronda">Compiled project records</SourceLink><p>DSWD 2024 financial record: ₱11.862 million social pension recorded as disbursed and liquidated.</p><SourceLink href="https://transparency.dswd.gov.ph/wp-content/uploads/2024/07/FAR-No.1C-FC-01.pdf">DSWD financial report</SourceLink><SourceLink href={`${budgetUrl}?q=Ronda#projects`}>View Ronda Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Information for Further Review</h4><ul className="list-disc pl-5 text-sm"><li>Latest audit recommendations and implementation status.</li><li>Contract awards, disbursements and completion certificates for revetment projects.</li><li>Updated official council roster and municipal service delivery indicators.</li></ul></section><div className="rounded-lg border bg-white p-4 text-xs">Independent civic research. Historical observations do not establish present-day conditions. Allocations are not actual disbursements. Unverified information is identified separately.</div></div>;
}

function SamboanProfile() {
 const history = [["2025","Emerito Calderon Jr.","Irving Gamallo"],["2022","Emerito Calderon Jr.","Irving Gamallo"],["2019","Emerito Sy Calderon","Emerito Durano Calderon Jr."]];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Samboan, Cebu</h4><p>2nd Congressional District · 15 barangays · 45.16 km² · 20,373 population (2020) · 14,612 registered voters (2025, Rappler)</p><SourceLink href="https://scene.ph/atlas/cebu/samboan">Municipal profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Emerito Durano Calderon Jr. — 8,156 votes.</p><p>Vice Mayor: Irving Gamallo — 11,013 votes.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{["Lito Apelanio — 7,915","Boy P. Pielago — 7,354","Marissa Jude Calderon — 7,328","Sally Bilocura — 7,100","Nonon Gerzon — 6,917","Medy Tano — 6,895","Rose Zerna — 6,469","Harris Reyes — 6,290"].map(n => <li key={n}>{n}</li>)}</ul><p>All ten leading candidates represented One Cebu. Unofficial returns, 100% precincts reporting; current council roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/samboan">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><table className="w-full text-xs text-left"><thead><tr><th>Election</th><th>Mayor</th><th>Vice Mayor</th></tr></thead><tbody>{history.map(([year,mayor,vice]) => <tr key={year} className="border-t"><td className="py-2">{year}</td><td>{mayor}</td><td>{vice}</td></tr>)}</tbody></table><p>Official 2019 proclamation distinguishes the two Calderon officeholders. Earlier records and family relationships require verification.</p><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2019NLE/ElectionResults/2019NLE_LIst_of_Elected_CityMun_Candidates.pdf">Official 2019 election record</SourceLink><SourceLink href="https://peoplaid.com/2022/05/11/samboan-election-2022-results-winners/">2022 returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>2025 annual audit published September 21, 2026. Detailed findings and financial figures have not yet been verified.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/samboan-annual-audit-report-2025/">Official COA report</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development Projects and Public Services</h4><p>Project allocations, contract values, disbursements and completion status require verification.</p><SourceLink href={`${budgetUrl}?q=Samboan#projects`}>View Samboan Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Information for Further Review</h4><ul className="list-disc pl-5 text-sm"><li>Municipal financial statements and audit recommendation implementation.</li><li>Tourism revenue, water supply and public infrastructure records.</li><li>Updated official council roster and historical election records.</li></ul></section><div className="rounded-lg border bg-white p-4 text-xs">Independent civic research. Unverified information is identified separately.</div></div>;
}

function SanFernandoProfile() {
 const council = ["PJ Medalla — 28,866","Carlos Miguel Canoy — 27,251","Rizza Canoy — 23,773","Libby Manlosa — 21,147","Jovie Aratia — 20,998","Juvy Procianos — 19,735","Cocoy Enad — 19,011","Sulping Alguire — 18,944"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">San Fernando, Cebu</h4><p>1st Congressional District · 21 barangays · 69.39 km² · 72,224 population (2020) · 51,416 registered voters (2025) · 85.76% turnout</p><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/Statistics/2025_NLE_RVVAV_BY_SEX_AGE_112525.pdf">COMELEC voter statistics</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Mytha Ann Basubas Canoy (NP) — 34,571 votes, unopposed.</p><p>Vice Mayor: Eugema Villamero Bacalla (NP) — 20,805 votes; margin of 271 votes.</p><h5 className="font-semibold">Eight leading council candidates</h5><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>All eight represented the Nacionalista Party. Unofficial returns with 100% of precincts reporting; current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/san-fernando">Election returns</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_SANFERNANDO.pdf">Official candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Historical election records and documented family relationships require independent verification. Shared surnames do not establish kinship.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>Reported 2024 audit observations as of December 31, 2024:</p><ul className="list-disc pl-5 text-sm"><li>₱5,428,562.39 in barangay transfers awaiting liquidation.</li><li>₱10,399,951.44 in idle or underutilized financial assistance.</li><li>₱11,690,000 allocated to twelve development projects reported as partially implemented or unimplemented.</li></ul><p>These categories are not confirmed losses. Municipal officials committed to action plans for delayed projects. Current implementation and liquidation status require verification.</p><SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2025/12/12/2493654/san-fernando-audit-report-coa-flags-unliquidated-funds-unused-aid-delayed-projects">The Freeman, December 12, 2025</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/san-fernando-compliance-audit-report-2024-3/">Official Special Education Fund compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Employment Practices</h4><p>2024 audit reporting identified 466 job order workers and 84 permanent or coterminous workers. Reported daily pay ranged from ₱400 to ₱1,459.78; 374 job order workers received less than the cited ₱501 daily wage benchmark. Auditors noted missing formal job order contracts and standardized hiring policies. Officials explained that hiring depended on departmental proposals and mayoral approval. Latest corrective actions remain unverified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2025/12/11/2493438/coa-flags-san-fernando-over-hiring-irregularities/amp/">The Freeman, December 11, 2025</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development Projects and Public Services</h4><p>Individual project allocations, disbursements and current completion status require further verification.</p><SourceLink href={`${budgetUrl}?q=San%20Fernando#projects`}>View San Fernando Budget Records</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Information for Further Review</h4><ul className="list-disc pl-5 text-sm"><li>Updated liquidation records and development project status.</li><li>Implementation of audit recommendations and job order employment policies.</li><li>Annual municipal revenue and expenditure, historical leadership and current council roster.</li></ul></section><div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Audit observations do not establish individual liability.</div></div>;
}

function PendingProfile({ name }: { name: string }) {
  return (
    <div className="border-t bg-slate-50 p-5 space-y-5">
      <div>
        <h4 className="font-bold text-blue-950">
          Public Officials
        </h4>
        <p className="text-sm text-slate-600 mt-2">
          Verified officials and terms will be added
          when source records are available.
        </p>
        <SourceLink href={politiciansUrl}>
          Research public officials
        </SourceLink>
      </div>

      <div>
        <h4 className="font-bold text-blue-950">
          Budgets and Allocations
        </h4>
        <p className="text-sm text-slate-600 mt-2">
          LGU-specific budget data is pending verification.
        </p>
        
<SourceLink href={`${budgetUrl}?q=${encodeURIComponent(name)}#projects`}>
  View Budget Records for {name}
</SourceLink>

      </div>

      <div>
        <h4 className="font-bold text-blue-950">
          Government Projects
        </h4>
        <p className="text-sm text-slate-600 mt-2">
          Project records have not yet been researched.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-blue-950">
          Public Documents
        </h4>
        <p className="text-sm text-slate-600 mt-2">
          Official documents will be linked when verified.
        </p>
      </div>

<div>
  <h4 className="font-bold text-blue-950">
    COA Audit Reports
  </h4>

  <p className="text-sm text-slate-600 mt-2">
    Audit reports and findings for {name} are
    pending verification. The absence of a
    published report here does not indicate
    that an LGU has no audit findings.
  </p>

  <SourceLink href="https://www.coa.gov.ph/">
    Visit the Commission on Audit
  </SourceLink>
</div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-xs text-amber-900">
          Research pending for {name}. Missing records
          do not indicate wrongdoing.
        </p>
      </div>
    </div>
  );
}

export default function Government() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [openLGU, setOpenLGU] = useState<string | null>(null);

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
            Explore Cebu's local governments, officials,
            budgets, projects and public records.
            Independent civic information, not an
            official government website.
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
            <div
              key={label}
              className="bg-white border rounded-xl p-5"
            >
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
              placeholder="Search Cebu City, Alcantara, Argao..."
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

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {filtered.map(lgu => {
            const isOpen = openLGU === lgu.name;
            const isResearched = lgu.name === "Alcantara" || lgu.name === "Alcoy" || lgu.name === "Alegria" || lgu.name === "Aloguinsan" || lgu.name === "Argao" || lgu.name === "Asturias" || lgu.name === "Badian" || lgu.name === "Balamban" || lgu.name === "Bantayan" || lgu.name === "Barili" || lgu.name === "Boljoon" || lgu.name === "Borbon" || lgu.name === "Carmen" || lgu.name === "Catmon" || lgu.name === "Compostela" || lgu.name === "Consolacion" || lgu.name === "Cordova" || lgu.name === "Daanbantayan" || lgu.name === "Dalaguete" || lgu.name === "Dumanjug" || lgu.name === "Ginatilan" || lgu.name === "Liloan" || lgu.name === "Madridejos" || lgu.name === "Malabuyoc" || lgu.name === "Medellin" || lgu.name === "Minglanilla" || lgu.name === "Moalboal" || lgu.name === "Oslob" || lgu.name === "Pilar" || lgu.name === "Pinamungajan" || lgu.name === "Poro" || lgu.name === "Ronda" || lgu.name === "Samboan" || lgu.name === "San Fernando";

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
                    : lgu.name === "Alegria"
                    ? <AlegriaProfile />
                    : lgu.name === "Aloguinsan"
                    ? <AloguinsanProfile />
                    : lgu.name === "Argao"
                    ? <ArgaoProfile />
                    : lgu.name === "Asturias"
                    ? <AsturiasProfile />
                    : lgu.name === "Badian"
                    ? <BadianProfile />
                    : lgu.name === "Balamban"
                    ? <BalambanProfile />
                    : lgu.name === "Bantayan"
                    ? <BantayanProfile />
                    : lgu.name === "Barili"
                    ? <BariliProfile />
                    : lgu.name === "Boljoon"
                    ? <BoljoonProfile />
                    : lgu.name === "Borbon"
                    ? <BorbonProfile />
                    : lgu.name === "Carmen"
                    ? <CarmenProfile />
                    : lgu.name === "Catmon"
                    ? <CatmonProfile />
                    : lgu.name === "Compostela"
                    ? <CompostelaProfile />
                    : lgu.name === "Consolacion"
                    ? <ConsolacionProfile />
                    : lgu.name === "Cordova"
                    ? <CordovaProfile />
                    : lgu.name === "Daanbantayan"
                    ? <DaanbantayanProfile />
                    : lgu.name === "Dalaguete"
                    ? <DalagueteProfile />
                    : lgu.name === "Dumanjug"
                    ? <DumanjugProfile />
                    : lgu.name === "Ginatilan"
                    ? <GinatilanProfile />
                    : lgu.name === "Liloan"
                    ? <LiloanProfile />
                    : lgu.name === "Madridejos"
                    ? <MadridejosProfile />
                    : lgu.name === "Malabuyoc"
                    ? <MalabuyocProfile />
                    : lgu.name === "Medellin"
                    ? <MedellinProfile />
                    : lgu.name === "Minglanilla"
                    ? <MinglanillaProfile />
                    : lgu.name === "Moalboal"
                    ? <MoalboalProfile />
                    : lgu.name === "Oslob"
                    ? <OslobProfile />
                    : lgu.name === "Pilar"
                    ? <PilarProfile />
                    : lgu.name === "Pinamungajan"
                    ? <PinamungajanProfile />
                    : lgu.name === "Poro"
                    ? <PoroProfile />
                    : lgu.name === "Ronda"
                    ? <RondaProfile />
                    : lgu.name === "Samboan"
                    ? <SamboanProfile />
                    : lgu.name === "San Fernando"
                    ? <SanFernandoProfile />
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
