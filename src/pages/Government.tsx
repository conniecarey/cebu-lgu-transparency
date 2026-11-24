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

function SanFranciscoProfile() {
 const council = ["Ken Capao — 24,125 (One Cebu)","Joseph Isok — 19,741 (One Cebu)","Mhel Bacus — 17,503 (Independent)","Aurelia Andrade — 16,841 (One Cebu)","Cris Gok-Ong — 15,857 (One Cebu)","Alan Arrojado — 15,222 (One Cebu)","Rey Tindoy — 14,874 (One Cebu)","Toton Maningo — 14,340 (PDP-Laban)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">San Francisco, Cebu</h4><p>5th Congressional District · 15 barangays · 106.93 km² · 59,236 population (2020) · 39,021 registered voters (2025)</p><SourceLink href="https://sanfranciscocamotes.gov.ph/wp-content/uploads/2024/02/LCCAP_NEW-24-26-Printed2.pdf">Municipal climate action plan</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Al Arquillano — 23,505 votes. Vice Mayor: Aly Arquillano — 22,665 votes. Both ran unopposed under One Cebu.</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial returns with all precincts reporting; current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/san-francisco">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Compiled election history (mayor / vice mayor): 2025, 2022 and 2019: Al / Aly Arquillano; 2016: Aly / Al Arquillano; 2013: Aly / Allan Arquillano; 2010: Aly / Alfredo Arquillano Jr.; 2007: Alfredo Arquillano Jr. / Allan Arquillano; 2004 and 2001: Alfredo Arquillano Jr. / Avelino Obenza. Older official proclamations and family relationships require verification.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and Development</h4><p>Compiled DPWH records associate 77 contracts totaling ₱939,934,153.52 with the municipality, including a 2024 Camotes Airport multipurpose facilities contract of ₱115,749,398.43. Geographic attribution for this contract is medium confidence. Contract values are not actual expenditures or proof of completion.</p><SourceLink href="https://lovethephilippines.com/lgu/0702242000-san-francisco">Compiled infrastructure records</SourceLink><SourceLink href={`${budgetUrl}?q=San%20Francisco#projects`}>View budget records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Climate Adaptation and Water Security</h4><p>The 2016 proposal sought ₱45,484,400 from the People's Survival Fund with ₱6,166,250 in LGU counterpart funding, covering 15 barangays. These are proposed amounts, not confirmed releases.</p><SourceLink href="https://climate.gov.ph/public/ckfinder/userfiles/files/PSF/PSF%20San%20Francisco%2C%20Camotes%20-%20Project%20Proposal.pdf">Official project proposal</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Public Services</h4><p>The 2024–2026 climate action plan lists 22 public elementary schools, six public secondary schools, 15 rural health centers, one district hospital, 17 day care centers and one public tertiary school. Current operational status requires verification.</p><SourceLink href="https://sanfranciscocamotes.gov.ph/wp-content/uploads/2022/10/Citizens-Charter-HANDBOOK-of-LGU-San-Francisco.pdf">Municipal Citizen's Charter</SourceLink></section>
 <section><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>Detailed annual financial statements, COA observations, project completion and implementation of recommendations remain pending verification.</p><SourceLink href="https://www.coa.gov.ph/">Commission on Audit</SourceLink></section><div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Figures are dated and subject to source verification.</div></div>;
}

function SanRemigioProfile() {
 const council = ["Michael Jeffrey Go — 20,422 (LDP)","Lou Ornopia — 20,164 (One Cebu)","Kyle Pestolante — 19,944 (One Cebu)","Miguel Maria Martinez — 19,466 (LDP)","Conrado Loon — 18,143 (One Cebu)","Joycee Olivar — 17,883 (One Cebu)","Inocencio Miscala Jr. — 16,050 (One Cebu)","Jessa Faith Olivar — 15,614 (One Cebu)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">San Remigio, Cebu</h4><p>4th Congressional District · 27 barangays · 95.27 km² · 65,744 population (2020) · 44,858 registered voters (2025)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/san-remigio">Municipal election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Mariano Rodriguez Martinez (LDP), 20,509 votes; Alfonso Pestolante (One Cebu), 18,450 votes. Vice Mayor: Alphonsine Corominas Gonzales (LDP), 23,031 votes; Valeriano Loon, 13,972; Maria Janet Faria, 385.</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial returns with all precincts reporting; current council roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/san-remigio">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Mayor / vice mayor: 2025 — Mariano Martinez / Alphonsine Gonzales; 2022 — Alfonso Pestolante / Mariano Martinez; 2019 — Mariano Martinez / Alfonso Pestolante. Earlier proclamations and family relationships require verification.</p><SourceLink href="https://scene.ph/atlas/cebu/san-remigio">Leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Observations</h4><p>Reporting on the 2025 COA audit identified 19 development projects valued at ₱17.198 million: 12 unimplemented and seven partially implemented. Management cited earthquake-related resource realignment and reported rescheduling projects to the first half of 2026. Auditors recommended improved planning and monitoring. Actual completion and annual financial totals remain unverified. Project values do not establish financial losses.</p><SourceLink href="https://www.philstar.com/balita/2026/10/16/2563495/19-ka-proyekto-sa-san-remigio-nalangan-wala-napatuman-coa/amp/">Banat, October 16, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and Development</h4><p>Compiled records associate 137 DPWH contracts worth approximately ₱2.698 billion with San Remigio. Selected GAA allocations: ₱50 million each for Sapang Dako River flood protection and Tacup flood protection (2022), and Lapyahan access road (2025). DPWH procurement records list ₱96.45 million for shoreline protection package 1 (25H00043). Allocations and contracts are not confirmed disbursements or completion.</p><SourceLink href="https://lovethephilippines.com/lgu/0702243000-san-remigio">Compiled infrastructure records</SourceLink><SourceLink href="https://www.dpwh.gov.ph/DPWH/sites/default/files/pmr/dpwhregionalofficevii-pmr1stsemester2025.pdf">DPWH procurement report</SourceLink><SourceLink href={`${budgetUrl}?q=San%20Remigio#projects`}>Budget records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Earthquake Recovery and Public Services</h4><p>CPA proposed ₱150 million for Hagnaya Port repairs and ₱20 million for a new office building, subject to site assessments and implementation verification. DSWD documented relocation of support facilities to the New Market Evacuation Center after sinkholes made the previous site unsafe.</p><SourceLink href="https://www.sunstar.com.ph/cebu/cpa-lacks-disaster-plan">Port rehabilitation reporting</SourceLink><SourceLink href="https://dromic.dswd.gov.ph/wp-content/uploads/2025/11/DSWD-DROMIC-Report-43-on-the-Effects-of-Magnitude-6.9-Earthquake-in-the-City-of-Bogo-Cebu-as-of-01-November-2025-6PM.pdf">DSWD situation report</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Current project status and audit resolutions require verification.</div></div>;
}

function SantaFeProfile() {
 const council = ["Ryan-RJ Fariolen — 13,226 (One Cebu)","Jaypee Lao — 12,668 (One Cebu)","Junrel Bataycan — 12,488 (One Cebu)","Dodo Zaspa — 11,201 (One Cebu)","Joan Gay Pasasadaba — 10,844 (NUP)","Kelvin Mondejar — 10,744 (One Cebu)","Goyang Espinosa — 10,418 (One Cebu)","Boy Batobalonos — 9,147 (One Cebu)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Santa Fe, Cebu</h4><p>4th Congressional District · 10 barangays · 28.05 km² · 34,471 population (2020) · 22,646 registered voters (2025) · 86.13% turnout</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/santa-fe">Election profile</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/Statistics/2025_NLE_RVVAV_BY_SEX_AGE_112525.pdf">COMELEC voter statistics</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Tamar Espinosa (One Cebu), 11,762 votes; Paulo Esgana (NUP), 7,016; Wilfredo Salise (Independent), 115. Vice Mayor: Lovely Cabrera (One Cebu), 9,969; Jayson Repaso (NUP), 5,837; Titing Esgana (ABC), 2,591.</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial returns with all precincts reporting. Current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/santa-fe">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Mayor / vice mayor: 2025 — Tamar Espinosa / Lovely Cabrera; 2019 — Ithamar Espinosa / Naomi Espinosa. Older election records and specific family relationships require primary-source verification.</p><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2019NLE/ElectionResults/2019NLE_LIst_of_Elected_CityMun_Candidates.pdf">2019 official COMELEC proclamation list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Observations</h4><p>Reporting on the 2024 COA audit identified 17 unimplemented development projects totaling approximately ₱23.31 million. Selected allocations: public toilet ₱4.5 million; health center phase I ₱3 million; Okoy road opening ₱2.5 million; docking facility ₱2 million; Langub road concreting ₱1 million. Auditors identified project preparation issues. Current implementation and audit resolutions remain unverified; allocations do not establish financial losses.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2025/12/30/2497699/coa-flags-p23m-unimplemented-development-projects-sta-fe">The Freeman, December 30, 2025</SourceLink><SourceLink href="https://www.philstar.com/banat/balita/2025/12/28/2497228/17-ka-proyekto-sa-santa-fe-wa-mapatuman/amp/">Banat, December 28, 2025</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and Development</h4><p>MCIAA Bantayan Airport runway extension: ₱295.98 million project cost; ₱103.51 million disbursed and 50.37% physical accomplishment in a 2025 monitoring report, ahead of the 21.14% target. Actual completion unverified. 2024 GAA tourism road allocation: ₱50 million. Provincial infrastructure assistance announced December 2024: ₱8 million for Santa Fe. These are distinct funding records.</p><SourceLink href="https://dro7.depdev.gov.ph/wp-content/uploads/2025/10/Updated-RPMES-Forms-5-and-6.pdf">Regional monitoring report</SourceLink><SourceLink href="https://www.dpwh.gov.ph/dpwh/sites/default/files/gaa2024reg7.pdf">DPWH 2024 GAA</SourceLink><SourceLink href="https://www.pna.gov.ph/articles/1239590">PNA provincial assistance report</SourceLink><SourceLink href={`${budgetUrl}?q=Santa%20Fe#projects`}>Budget records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Community Development</h4><p>Resolution 393-2023 prioritizes activities funded through Aid to the Barangay. Regional monitoring in September 2023 documented budget reductions affecting Yolanda permanent housing. Current completion status remains unverified.</p><SourceLink href="https://cids.up.edu.ph/wp-content/uploads/2025/08/Perspectives-on-Community-Driven-Development-CDD-in-the-Province-of-Cebu-Philippines.pdf">UP community development study</SourceLink><SourceLink href="https://dro7.depdev.gov.ph/central-visayas-monitoring-team-inspects-housing-hospital-projects-in-northern-cebu/">Regional housing monitoring</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Annual financial totals, current project status and audit resolutions require verification.</div></div>;
}

function SantanderProfile() {
 const council = ["Wilson Wenceslao — 9,401","Joji Culanag — 9,036","Manny Regulacion — 8,368","Rene Pentac Estaño — 8,366","Margie Cajigas — 8,042","Judito Buscato — 8,029","Bambi Buscato — 7,846","Dondon Teves — 7,677"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Santander, Cebu</h4><p>2nd Congressional District · 10 barangays · 29.53 km² · 18,527 population (2020) · 18,669 (2024) · 13,642 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/santander">Municipal profile and leadership records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Marites Bureros Buscato (9,956 votes); Benny Aseñas (1,349); Royroy Gumere (50). Vice Mayor: Julie Anne Singco Wenceslao (9,945); Mary Ann Aseñas (1,378).</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>All eight leading council candidates represented One Cebu. Unofficial returns with all precincts reporting; current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/santander?contest=Mayor">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Mayor / vice mayor: 2025 — Marites Buscato / Julie Wenceslao; 2022 and 2019 — Marites Buscato / Marilyn Wenceslao; 2016, 2013 and 2010 — Marilyn Wenceslao / Wilson Wenceslao; 2007, 2004 and 2001 — Wilson Wenceslao / Marilyn Wenceslao. Compiled records reference COMELEC and DILG. Specific kinship is not established.</p><SourceLink href="https://scene.ph/atlas/cebu/santander">Historical directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Observations</h4><p>Reporting on the 2024 annual audit describes ₱1.6 million in payroll for 75 job order workers recorded under an inappropriate expense category, missing verified accomplishment reports, delayed barangay real property tax shares and idle transfers. These observations do not establish losses. COA also published a separate 2024 Special Education Fund compliance audit; detailed findings and corrective actions require review.</p><SourceLink href="https://www.philstar.com/cebu-news/2025/12/15/2494373/coa-cited-santander-finance-deficiencies/amp/">The Freeman, December 15, 2025</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/santander-compliance-audit-report-2024/">COA compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and Development</h4><p>Compiled GAA records list ₱100 million each for Liloan and Poblacion flood control, ₱40 million for the Liptong road to Ambakan Falls, and ₱35 million for public market completion in 2025. A separate FY2026 proposed budget lists ₱2 million each for multipurpose buildings in Liloan, Liptong and Looc. Allocations and proposals are not disbursements. Current completion remains unverified.</p><SourceLink href="https://lovethephilippines.com/lgu/0702245000-santander">Compiled infrastructure records</SourceLink><SourceLink href="https://www.dbm.gov.ph/wp-content/uploads/NEP2026/Details-of-DPWH.pdf">DBM FY2026 NEP, page 1585</SourceLink><SourceLink href={`${budgetUrl}?q=Santander#projects`}>Budget records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Water Services</h4><p>SunStar reported that the provincial bulk water facility in Santander was completed December 31, 2023, but lacked supply because the Samboan source project remained unfinished when its contract was terminated September 16, 2025. The 2025 provincial audit documented the issue. Current operational status requires verification.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/15-waterworks-idle">SunStar, November 20, 2026</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Annual financial totals, port project details, current project status and audit resolutions require verification.</div></div>;
}

function SibongaProfile() {
 const council = ["Joel Ponce (NP) — 23,294", "Lorraine Khate Bacaltos (NP) — 19,771", "Eloisa Bacaltos (NP) — 19,593", "Michelle Caballes (NP) — 17,569", "Cirila Dela Cruz (NP) — 12,917", "Tommy Codilla (NP) — 12,223", "Amon Pananganan (LP) — 11,012", "Badig Lopez (Independent) — 10,858"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Sibonga, Cebu</h4><p>1st Congressional District · 25 barangays · 133.45 km² · 53,424 population (2020) · 54,610 (2024) · 34,444 registered voters (2025)</p><SourceLink href="https://scene.ph/atlas/cebu/sibonga">Municipal profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Caroline Sanchez Bacaltos (NP, 20,968 votes); Nestor Ponce (8,504); Eutiquio Vilocura Jr. (117). Vice Mayor: Mariano Laude (NP, 24,917 votes, unopposed).</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial COMELEC returns with all precincts reporting. Current council roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/sibonga">Election results</SourceLink><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Mayor / vice mayor: 2025 — Caroline Bacaltos / Mariano Laude; 2022 and 2019 — Lionel Bacaltos / Mariano Laude; 2016 — Caroline Bacaltos / Cirilo Apuda. Earlier records and midterm succession require further verification. Shared surnames do not establish kinship.</p><SourceLink href="https://scene.ph/atlas/cebu/sibonga">Historical directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Procurement</h4><p>Compiled PhilGEPS records identify 231 infrastructure awards valued at ₱1.138 billion across available years. Annual infrastructure awards: 2023 — ₱78.24M; 2024 — ₱277.31M; 2025 — ₱279.39M. Awards are not disbursements.</p><SourceLink href="https://lovethephilippines.com/agencies/municipality-of-sibonga-cebu">Compiled procurement records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Provincial Infrastructure Assistance</h4><p>On May 18, 2026 the province reported releasing ₱39.6M: ₱20M for roads, ₱11.6M for a covered court (Phase 3), and ₱8M for other infrastructure. A separate April announcement documented ₱19.99M for a 1.5-km road in Lower Manatad. Completion is not verified.</p><SourceLink href="https://www.cebu.gov.ph/12474/capitol-releases-%E2%82%B139-6m-for-sibonga-infrastructure-projects-in-cebu/">Provincial funding announcement</SourceLink><SourceLink href="https://www.cebu.gov.ph/11776/gov-pam-leads-groundbreaking-of-%E2%82%B119-9m-road-project-in-sibonga/">Manatad road project</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">National Budget and Development</h4><p>Selected compiled allocations: Dumlog flood control ₱150M (2024); Simala flood control ₱150M (2025); Lamacan flood mitigation ₱100M (2025). DPWH lists ₱10M for a solar water system (2023). Compiled support fund releases include ₱5M for Cagay road upgrading (2025) and ₱5M for food assistance (2026). These are not confirmed project expenditures.</p><SourceLink href="https://lovethephilippines.com/lgu/0702246000-sibonga">Compiled public records</SourceLink><SourceLink href="https://www.dpwh.gov.ph/dpwh/sites/default/files/gaa_2023_region_vii_as_of_05-may-2023.pdf">DPWH GAA 2023</SourceLink><SourceLink href={`${budgetUrl}?q=Sibonga#projects`}>Budget records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Finances and Audit Records</h4><p>A BLGF annex published in 2024 lists a development fund allocation of ₱38,717,821 and expenditures of ₱60,492,766 (156.24%). Prior-year balances and accounting records require reconciliation before interpreting this ratio. COA's 2023 annual audit is available; detailed findings and responses remain pending review.</p><SourceLink href="https://blgf.gov.ph/wp-content/uploads/2024/06/ANNEX-C-NTA-LDP-M.pdf">BLGF Annex C</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/sibonga-annual-audit-report-2023/">COA annual audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Annual financial totals, family relationships, historical proclamations, project completion and audit resolutions require further verification.</div></div>;
}

function SogodProfile() {
 const council = ["Dong Jeno Streegan — 17,225", "Arman Menchavez — 15,086", "Inday Lyn Cabahug — 13,745", "Woodrow Presillas — 13,473", "Exyl Cruz Arnado III — 13,106", "Edgar Ceniza — 12,925", "Riel Roble — 12,446", "Dean Severo Dosado — 10,952"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Sogod, Cebu</h4><p>5th Congressional District · 18 barangays · 119.23 km² · 39,447 population (2020) · 26,198 registered voters (2025) · 4th class (2025 election profile)</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/sogod">Municipal profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Moonyeen Streegan (One Cebu, 16,445 votes); Thaddeus Durano Jr. (BAKUD, 5,473). Vice Mayor: Richard Streegan (One Cebu, 16,889); Wilson Tapere (BAKUD, 3,943).</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n} (One Cebu)</li>)}</ul><p>Unofficial COMELEC returns with all precincts reporting; current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/sogod">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/sogod-cebu-election-2025-results-winners/">Council results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Earlier election proclamations and specific family relationships remain pending primary-source verification. Shared surnames do not establish kinship.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Budget — 2024</h4><p>The official annual budget report lists estimated appropriations of ₱33,998,727.60 for the 20% Development Fund and ₱8,937,455.77 for the local disaster risk reduction and management fund. These are budget estimates, not confirmed expenditures.</p><SourceLink href="https://sogodcebu.gov.ph/wp-content/uploads/2026/01/ANNUAL-BUDGET-REPORT-2024.pdf">Official annual budget report</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Audit Records and Infrastructure</h4><p>COA published a compliance audit management letter concerning allocation and utilization of the Special Education Fund for FY2024. Detailed observations and management responses require review of the full report. Project-specific allocations, completion and disbursements remain pending verification.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/sogod-compliance-audit-report-2024/">COA compliance audit</SourceLink><SourceLink href={`${budgetUrl}?q=Sogod#projects`}>Budget and infrastructure records</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request actual development fund utilization, project completion reports and education fund audit responses. Budget estimates do not establish actual spending.</div></div>;
}

function TabogonProfile() {
 const council = ["Benhur Salimbangon II — 14,224 (One Cebu)", "Martin Etulle — 13,862 (One Cebu)", "Mike Tan — 12,615 (One Cebu)", "Venerando Manloloyo — 12,551 (One Cebu)", "Sherwin Dichos — 12,436 (One Cebu)", "Kyle Chezka Hortelano — 12,422 (One Cebu)", "Leonardo Arpon — 11,376 (One Cebu)", "Michael Angelo Pasaol — 10,177 (PMP)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Tabogon, Cebu</h4><p>4th Congressional District · Population 42,066 (2024) · 2nd income class (2026 PSGC compilation) · 29,265 registered voters · 26,215 actual voters (89.58% turnout, 2025).</p><SourceLink href="https://lovethephilippines.com/lgu/0702248000-tabogon">Compiled PSA and infrastructure records</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/Statistics/2025_NLE_RVVAV_BY_SEX_AGE_112525.pdf">COMELEC voter statistics</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Francis Edward Trocino Salimbangon (One Cebu, 16,748 votes); Zigfred Duterte (PMP, 8,579). Vice Mayor: Jerome Rosell Escalona (PMP, 12,277); Eric Alivio (One Cebu, 11,596).</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial returns with all precincts reporting. Current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tabogon">Election results</SourceLink><SourceLink href="https://peoplaid.com/2025/05/10/tabogon-election-2025-results-winners/">Council results</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_TABOGON.pdf">Certified candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Earlier election proclamations and specific family relationships remain pending primary-source verification. Shared surnames do not establish kinship.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and provincial assistance</h4><p>Compiled DPWH records associate 143 contracts totaling ₱2.289 billion with Tabogon; three records lack published coordinates. Contract values are not actual disbursements. In December 2024, provincial assistance of ₱8 million for infrastructure and ₱3.25 million for the Sanggi Festival was reported.</p><SourceLink href="https://lovethephilippines.com/lgu/0702248000-tabogon">Compiled infrastructure records</SourceLink><SourceLink href="https://www.pna.gov.ph/articles/1239590">PNA provincial funding report</SourceLink><SourceLink href={`${budgetUrl}?q=Tabogon#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Water infrastructure and audit records</h4><p>November 2026 reporting identifies 2027 as the expected completion year for the provincial water system in Tabogon. Actual completion remains unverified. COA published a FY2025 compliance audit concerning disaster fund allocations and alignment of investment and financial plans with disaster risk reduction plans. Specific findings and responses require full-report review.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/15-waterworks-idle">Provincial waterworks reporting</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/tabogon-compliance-audit-report-2025/">Official COA compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request infrastructure completion reports, disaster fund utilization, provincial assistance liquidation and water system implementation schedules. Annual municipal financial totals remain pending verification.</div></div>;
}

function TabuelanProfile() {
 const council = ["Catherine Gallo — 13,663 (One Cebu)", "Ramon Arellano — 12,499 (One Cebu)", "Ike Momo — 12,387 (PMP)", "Riza Bravo — 11,936 (One Cebu)", "Joel Gerona — 10,578 (PFP)", "Tamagie Gerona — 10,314 (PMP)", "Joyce Balvez-Arellano — 10,126 (PMP)", "Bert Comahig — 9,661 (One Cebu)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Tabuelan, Cebu</h4><p>4th Congressional District · Population 29,662 (2024) · 2nd income class (2026 PSGC compilation) · 21,219 registered voters (2025).</p><SourceLink href="https://lovethephilippines.com/lgu/0702249000-tabuelan">Compiled PSA and infrastructure records</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Rex Casiano Gerona (NUP, 9,584 votes); Raul Gerona (One Cebu, 9,220). Vice Mayor: Day Rose Gerona (NUP, 10,386); Miguel Montecillo (PMP, 7,261).</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial COMELEC returns with all precincts reporting. Current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tabuelan">Election results</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical Leadership</h4><p>Rex Casiano Gerona was identified as mayor in May 2014 reporting. Earlier election proclamations and specific family relationships remain pending primary-source verification. Shared surnames do not establish kinship.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2014/05/28/1328228/tabuelan-town-coa-discovers-p5m-unutilized-devt-projects">Historical reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and development</h4><p>Compiled DPWH records associate 87 contracts totaling ₱2.113 billion with Tabuelan; two lack published coordinates. Largest recorded contractor totals include WTG Construction (₱811.23M), Duros Development (₱495.63M), Zion Construction (₱270.72M), CYJE First Builders (₱81.26M) and Prime Gigabuild (₱78.80M). Contract values are not actual disbursements or findings of wrongdoing.</p><SourceLink href="https://lovethephilippines.com/lgu/0702249000-tabuelan">Compiled infrastructure records</SourceLink><SourceLink href={`${budgetUrl}?q=Tabuelan#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal audit observations</h4><p>May 2014 reporting on the 2013 audit identified ₱5.3 million in unutilized funds and development fund appropriations used for casual and job order personnel expenses. COA recommended returning excess funds for completed or infeasible projects; management committed to implementing intended projects. Current resolution is not verified.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2014/05/28/1328228/tabuelan-town-coa-discovers-p5m-unutilized-devt-projects">2013 audit reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Water district — separate government entity</h4><p>FY2025 audit reporting identified ₱400,000 in DENR earthquake rehabilitation assistance initially recorded as income rather than a liability. Repairs remained incomplete at year end. Management submitted correcting journal entries in April 2026. COA also published a water sampling compliance audit; detailed findings require review.</p><SourceLink href="https://www.sunstar.com.ph/cebu/state-auditors-find-accounting-errors-in-tabuelan-medellin-water-districts">October 2026 audit reporting</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/tabuelan-water-district-cebu-biennium-audit-report-2024-2025/">Official biennium audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/tabuelan-water-district-cebu-compliance-audit-report-2025/">Official compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request current municipal financial statements, development fund utilization, project completion reports and water rehabilitation updates. Current audit resolutions and annual municipal totals remain pending verification.</div></div>;
}

function TuburanProfile() {
 const council = ["Wilfredo Diamante — 21,540 (Lakas)", "Ado Pesiao — 20,729 (Independent)", "Louise Potencioso — 18,641 (Lakas)", "Eugenio Arigo — 18,117 (Lakas)", "Rodillo Dela Cerna — 16,935 (Lakas)", "Carmelli Luz Suezo — 15,635 (Lakas)", "Glenn Regado — 15,454 (Lakas)", "Marvin Monterola — 14,971 (Lakas)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Tuburan, Cebu</h4><p>3rd Congressional District · 54 barangays · Population 68,167 (2020) · 224.50 km² · 2nd income class (2025 election profile) · 46,602 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tuburan">Municipal election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal Officials — 2025 election</h4><p>Mayor: Christian Daniel Bartolome Diamante (Lakas, 29,039 votes). Vice Mayor: Danilo Mercado Diamante (Lakas, 28,920 votes). Both ran unopposed.</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial COMELEC returns with all precincts reporting; winners confirmed by municipal announcement.</p><SourceLink href="https://www.tuburancebu.gov.ph/2025/05/election-2025/">Official municipal announcement</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_TUBURAN.pdf">COMELEC certified candidate list</SourceLink><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tuburan">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>Democrito “Aljun” Diamante is identified as former mayor in June 2026 government reporting. Earlier election proclamations and specific family relationships remain pending independent verification. Shared surnames do not establish kinship.</p><SourceLink href="https://pia.gov.ph/news/da-to-establish-1st-visayas-coffee-devt-office-in-tuburan-cebu/">PIA historical context</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">National infrastructure</h4><p>FY2025: Mangga–Kabangkalan road approved contract budget ₱49M (25HF0077); Alegria–Bangkito coffee plantation access road slope protection allocation ₱20M; Mag-Alwa road approved contract budget ₱19.8M (25HF0097). FY2026 GAA: Jagbuaya and Mag-Alwa road allocations ₱4.845M each. Allocations and approved contract budgets are not actual disbursements or completion records.</p><SourceLink href="https://www.dpwh.gov.ph/DPWH/sites/default/files/gaa_2025_region_vii.pdf">DPWH 2025 program</SourceLink><SourceLink href="https://www.dpwh.gov.ph/sites/default/files/webform/civil_works/advertisement/bidding-document-25hf0077_for_posting.pdf">Mangga–Kabangkalan procurement</SourceLink><SourceLink href="https://www.dpwh.gov.ph/dpwh/sites/default/files/webform/civil_works/advertisement/ngpa_pbds_infrastructure-projects-25hf0097-_for_posting.pdf">Mag-Alwa procurement</SourceLink><SourceLink href="https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2026/DBM-OFFICIAL-GAZETTE-FY-2026_VOLUME-1-C.pdf">FY2026 GAA, page 575</SourceLink><SourceLink href={`${budgetUrl}?q=Tuburan#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Coffee industry development</h4><p>June 2026 PIA reporting describes approximately 2,000 coffee farmers, 336 hectares of production area, and 108 metric tons produced in 2025. A one-hectare site was donated for the proposed Visayas Coffee Industry Development Office in Kabangkalan. PSA cleared a regional impact evaluation survey with a budget of approximately ₱1.6M covering areas in Cebu, Bohol and Negros Oriental; this is not exclusively municipal funding. Office completion and evaluation results remain unverified.</p><SourceLink href="https://pia.gov.ph/news/da-to-establish-1st-visayas-coffee-devt-office-in-tuburan-cebu/">PIA coffee development announcement</SourceLink><SourceLink href="https://psa.gov.ph/content/psa-clears-impact-evaluation-convergence-strategy-tuburan-coffee-production-program-survey">PSA evaluation survey clearance</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Provincial assistance</h4><p>On May 11, 2026, the province announced ₱1.52M in assistance to 14 barangays: ₱1.2M for infrastructure in Kaorasan, Kansi, Poblacion 1, Molobolo, Ga-ang and Apalan, and ₱320,000 for socio-cultural activities in eight barangays. Completion remains unverified.</p><SourceLink href="https://www.cebu.gov.ph/12247/capitol-releases-%E2%82%B11-52-million-aid-to-14-barangays-in-tuburan/">Official provincial announcement</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal finances and audit records</h4><p>COA published FY2024 and FY2025 annual audits and a FY2025 disaster fund compliance audit. Detailed findings, financial totals and management responses require full-report review.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/tuburan-annual-audit-report-2024/">FY2024 annual audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/tuburan-annual-audit-report-2025/">FY2025 annual audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/tuburan-compliance-audit-report-2025-2/">FY2025 disaster fund compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request annual financial statements, project completion and disbursement records, coffee program evaluation results and audit implementation updates.</div></div>;
}

function TudelaProfile() {
 const council = ["Meldred Otadoy — 5,300", "Melca Lativo — 5,094", "Edy Diocampo — 4,979", "Jey Belarmino — 4,957", "Erwin Yu — 4,922", "Lycel Estremos — 4,709", "Nelson Sumalinog — 4,687", "Eddie Portarcos — 4,563"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Tudela, Cebu</h4><p>5th Congressional District · Camotes Islands · 11 barangays · Population 11,304 (2020); 11,638 (2024, compiled PSA data) · 33.02 km² · 8,914 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tudela">Election profile</SourceLink><SourceLink href="https://lovethephilippines.com/lgu/0702253000-tudela">Compiled population and infrastructure data</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal officials — 2025 election</h4><p>Mayor: Jojo Solante (6,092 votes). Vice Mayor: Lymarne Yu (5,884 votes). Both One Cebu, unopposed. Eight leading council candidates, all One Cebu:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>Unofficial COMELEC returns with all precincts reporting as of May 15, 2025. Current roster requires confirmation.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/tudela">Election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>The municipal website lists Greman B. Solante as mayor and Lymarne O. Yu as vice mayor under its 2022–2025 heading. This is not an original election proclamation. Earlier election results and specific family relationships require independent verification.</p><SourceLink href="https://www.tudela-cebu.gov.ph/municipal-officials.html">Municipal leadership directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and development</h4><p>Compiled DPWH data links 47 records worth ₱474.09M to Tudela. A 2023 road concreting contract covering Santander, Secante Bag-O, Puertobello and Mc Arthur is recorded at ₱57.84M. Largest contractor totals include CYJE First Builders (₱252.47M), Suprea Phils Development (₱57.84M), MPJR Builders (₱47.17M), Genetian Builders (₱46.97M) and VSP Structure Ventures (₱29.69M). These are contract records, not confirmed disbursements or completion; geographic attribution requires verification.</p><SourceLink href="https://lovethephilippines.com/lgu/0702253000-tudela">Compiled DPWH records</SourceLink><SourceLink href={`${budgetUrl}?q=Tudela#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal borrowing and development</h4><p>Municipal Ordinance No. 082-2025 identifies ₱45M in borrowing for new heavy equipment and also identifies wastewater treatment as a priority project. Loan drawdown, delivery and facility completion remain unverified.</p><SourceLink href="https://www.tudela-cebu.gov.ph/uploads/1/4/2/6/142635269/mun.ord.no.082-2025.pdf">Official ordinance</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Municipal finances and audit records</h4><p>COA published a FY2024 Special Education Fund compliance audit on November 26, 2025. Detailed findings and management responses require full-report review. A similarly named FY2025 audit for Tudela, Misamis Occidental is excluded.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/tudela-compliance-audit-report-2024/">Official COA compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request annual financial statements, borrowing and repayment schedules, equipment delivery records, wastewater facility implementation updates, project disbursements and audit responses.</div></div>;
}

function BogoProfile() {
 const council = ["Erwin Rosal — 40,092 (One Cebu)", "Luis Asierto Jr. — 37,146 (One Cebu)", "Elena Armenton-Xie — 30,587 (One Cebu)", "Vivian Canama — 29,991 (One Cebu)", "Jingle Boy Lepiten — 26,281 (One Cebu)", "Lyndon Acusar — 25,081 (One Cebu)", "Dodong Gulane — 24,967 (One Cebu)", "Santiago Oliamot — 23,882 (One Cebu)", "Raul Ursal — 23,727 (Independent)", "Joseph Sevilla — 23,425 (One Cebu)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Bogo City, Cebu</h4><p>4th Congressional District · Component city · 29 barangays · Population 88,867 (2020) · 103.52 km² · 57,046 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/bogo-city">Election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City officials — 2025 election</h4><p>Mayor: Maria Cielo Asas Martinez (One Cebu), 37,498 votes; Maria Celeste Martinez (Independent), 2,275 votes. Vice Mayor: Carlo Jose Asas Martinez (One Cebu), 40,281 votes, unopposed. Unofficial COMELEC returns with all precincts reporting on May 15, 2025.</p><p>Ten highest-ranked council candidates; official proclamations and current membership require confirmation:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><SourceLink href="https://peoplaid.com/2025/05/10/bogo-election-2025-results-winners/">Published council results</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/Cebu_BOGOCITY.pdf">COMELEC certified candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>Earlier election proclamations and specific family relationships require independent verification. Shared surnames alone do not establish kinship.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Earthquake recovery and assistance</h4><p>DSWD DROMIC Report No. 52, April 15, 2026, records ₱210,610,629.57 of assistance for Bogo City: DSWD ₱202,164,342.15; NGOs ₱8,281,287.42; others ₱165,000. Across all affected areas the reported total was ₱1,428,365,797.14. These are assistance values, not city government expenditure.</p><SourceLink href="https://dromic.dswd.gov.ph/wp-content/uploads/2026/04/DSWD-DROMIC-Report-52-on-the-Effects-of-Magnitude-6.9-Earthquake-in-the-City-of-Bogo-Cebu-as-of-15-April-2026-6AM.pdf">Official DSWD report, Annex H</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Legislative actions and infrastructure</h4><p>City resolutions 296–319 of 2025 each request ₱100M in national financial assistance for rehabilitation after the September 30, 2025 earthquake. Requests are not approvals or releases and must not be aggregated as secured funding. Implementation and actual disbursements require verification.</p><SourceLink href="https://cityofbogocebu.gov.ph/resolutions/">Official city resolutions</SourceLink><SourceLink href={`${budgetUrl}?q=Bogo#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City finances and audit records</h4><p>COA published its FY2025 disaster fund compliance audit on October 1, 2026, covering required allocations and alignment of investment and financial plans and budgets with the disaster management plan. Specific findings and management responses require full-report review. Annual city financial totals remain pending verification.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/bogo-city-compliance-audit-report-2025/">Official COA compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request rehabilitation funding releases, project completion schedules, beneficiary assistance records, annual financial statements and audit responses.</div></div>;
}

function CarcarProfile() {
 const council = ["Rey Lawas — 42,725 (NP)", "Bebe Barcenas — 41,690 (NP)", "Eddie Alberca — 40,797 (Independent)", "Inting Escobido — 39,501 (NP)", "Mich Amistad-Zozobrado — 35,424 (NPC)", "Jeson Fernandez — 35,258 (NP)", "Roy Velez — 34,723 (NP)", "Archilles Gantuangco — 31,284 (NP)", "Nice Apura — 29,874 (NPC)", "Lorena Mae Tabora — 29,313 (NPC)"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Carcar City, Cebu</h4><p>1st Congressional District · Component city · 15 barangays · Population 136,453 (2020) · 116.78 km² · 87,040 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/carcar-city">Election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City officials — 2025 election</h4><p>Mayor: Patrick Barcenas (NP), 45,889 votes; Mercy Apura (NPC), 29,678; Raul Gabijan (Independent), 572. Vice Mayor: Perkins de Dios (NP), 34,246 votes; Efren Quijano (NPC), 19,574; Jufhel Alcuizar (PDP-Laban), 18,875. Unofficial COMELEC returns with all precincts reporting on May 15, 2025.</p><p>Ten highest-ranked council candidates; official proclamations and current membership require confirmation:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><SourceLink href="https://peoplaid.com/2025/05/10/carcar-election-2025-results-winners/">Published election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>Patrick Barcenas sought reelection in 2025; former mayor Mercedita Apura ran against him. Earlier proclamations and family relationships require independent verification.</p><SourceLink href="https://en.wikipedia.org/wiki/2025_Cebu_local_elections">Election background (secondary source)</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development fund and audit observations</h4><p>FY2025 audit reporting identifies ₱93.55 million in 53 projects not commenced by December 31, 2025, representing 60.29% of ₱155.16 million in development project appropriations. Reported obstacles include land concerns, site preparation, documentation and procurement delays. Unimplemented allocations are not established losses.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/carcar-city-annual-audit-report-2025/">Official annual audit</SourceLink><SourceLink href="https://www.philstar.com/cebu-news/2026/10/06/2561249/coa-flags-carcars-idle-projects-facilities/amp">The Freeman, October 6, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Completed facilities awaiting utilization</h4><p>Three facilities valued at ₱270.77 million were identified as idle in reporting on the FY2025 audit: Takdog Water Treatment Facility (₱19.99M, completed 2018), City Public Transport Terminal (₱100.89M, completed 2020), and Livestock Auction Market (₱149.89M, completed 2024). Current operational status requires verification.</p><SourceLink href="https://tribune.net.ph/2026/10/07/coa-flags-p9355m-in-stalled-carcar-projects">Daily Tribune, October 7, 2026</SourceLink><SourceLink href={`${budgetUrl}?q=Carcar#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Disaster fund compliance</h4><p>COA published its FY2025 disaster fund compliance audit on September 15, 2026. Detailed findings and management responses require full-report review. Annual city financial totals remain pending verification.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/carcar-city-compliance-audit-report-2025/">Official compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request updated project schedules, facility activation plans, heritage conservation budgets, financial statements and audit responses.</div></div>;
}

function DanaoProfile() {
 const council = ["Jed Almendras — 53,519", "Monching Durano — 46,102", "Roland Perez — 42,783", "Ram Duterte — 42,044", "Calvin Tuadles — 41,480", "Glee Delicano — 41,166", "Pangging Arias — 40,614", "Jojo Roble — 38,681", "Danny Roble — 38,680", "Dax Banzon — 35,914"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Danao City, Cebu</h4><p>5th Congressional District · Component city · 42 barangays · Population 156,321 (2020) · 107.30 km² · 99,396 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/danao-city">Election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor: Ramon Duterte Durano III (BAKUD), 56,126 votes; Migs Magpale (NUP), 26,298. Vice Mayor: Carmen Remedios Hotchkiss Durano (BAKUD), 42,849 votes; Dino Sybico (Independent), 39,136. Unofficial returns with all precincts reporting on May 15, 2025.</p><p>Ten highest-ranked council candidates, all BAKUD; official proclamations and current membership require confirmation:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/danao-city">Published election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership and documented relationships</h4><p>In 2022 Thomas Mark Durano won as mayor and Ramon Durano III as vice mayor; in 2019 and 2016 their positions were reversed. Compiled records identify Durano-named candidates in both executive positions across nine elections from 2001 to 2025. Older proclamations require verification. The city biography confirms Thomas Mark is the son of Ramon Durano III.</p><SourceLink href="https://scene.ph/atlas/cebu/danao-city">Compiled historical leadership</SourceLink><SourceLink href="https://danaocity.gov.ph/city-mayor/">Official historical biography (2022 administration)</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Water infrastructure and audit observations</h4><p>October 2026 reporting on the FY2025 audit identifies outstanding DOH and NWRB permits and an unused administrative building within the ₱418.65 million bulk water system. The city clarified that ₱405.04 million was the entire system's net book value at December 31, 2025, not the building's cost. Management reported permit applications and asset cost separation underway. Missing permits do not independently establish unsafe water. Current resolution requires verification.</p><SourceLink href="https://www.sunstar.com.ph/cebu/danao-clarifies-coa-findings-on-p41865-m-bulk-water-system">SunStar, October 7, 2026 — audit and city response</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Proposed development projects</h4><p>June 2026 proposals include a sports complex and convention center estimated at ₱1 billion or more, five hectares of commercial reclamation in Poblacion, 25 hectares of industrial reclamation in Sabang, waste processing and riverbank protection. A March 2026 city announcement reported over ₱900 million in proposed DPWH 2027 investment programming. Proposals are not confirmed funding releases.</p><SourceLink href="https://www.cebu.gov.ph/13118/danao-city-seeks-rdc-7-support-for-p1-billion-sports-complex-and-major-development-projects/">Official provincial announcement</SourceLink><SourceLink href={`${budgetUrl}?q=Danao#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Reported accomplishments and services</h4><p>The July 28, 2026 State of the City Address reported 99 completed projects, 14 ongoing and 21 upcoming; the public market was 80% complete with a target opening in early 2027. The mayor reported average local revenue growth of 7%, support for 555 scholars and free Wi-Fi coverage across 42 barangays. These are administration-reported indicators, not independently audited results.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/danao-ramps-up-infrastructure-drive">SunStar, July 29, 2026</SourceLink><SourceLink href="https://qa.philstar.com/the-freeman/cebu-news/2026/08/03/2546652/danao-city-mayor-reports-infra-social-services-gains/amp">The Freeman, August 3, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Additional audit records</h4><p>FY2024 Special Education Fund and FY2025 disaster fund compliance audits are published. Detailed findings and annual city financial totals require further review.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/danao-city-compliance-audit-report-2024/">FY2024 compliance audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/danao-city-compliance-audit-report-2025/">FY2025 compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request updated permit status, audited financial statements, project completion records, and feasibility and environmental assessments for proposed developments.</div></div>;
}

function NagaProfile() {
 const council = ["Clint Isidro A. Chiong — 45,849", "Amelita M. Lara — 38,890", "Dominador A. Libor — 37,688", "Anecito B. Alinsonorin — 35,998", "Carmelino Navales Cruz Jr. — 35,875", "Charmaine R. Navarro — 35,872", "Elmer John R. Lapitan — 35,707", "Justino L. Dakay — vote total pending confirmation", "Ray A. Manabat — 31,905", "Letecia F. Abangan — 31,415"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">City of Naga, Cebu</h4><p>1st Congressional District · Component city · 28 barangays · Population 133,184 (2020) · 101.97 km² · 86,935 registered voters (2025).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/naga-city">Election profile</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor Valdemar M. Chiong (NP), 63,102 votes; Manny Sanchez (Independent), 3,348. Vice Mayor Virgilio M. Chiong (NP), unopposed with 56,492 votes. City announcement confirms proclamation on May 13, 2025.</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>The city confirms Amelita Lara replaced her late husband Alex Lara. Dakay's tally differs between the city announcement (35,106) and media returns (34,106); official canvass confirmation is needed.</p><SourceLink href="https://cityofnagacebu.gov.ph/sp-corner/">Official city announcement</SourceLink><SourceLink href="https://ph.rappler.com/elections/2025/local-race/cebu/naga-city">Published election returns</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>The city announcement confirms both incumbent executives were reelected in 2025. Earlier election proclamations and specific Chiong family relationships require primary-source verification; shared surnames alone do not establish kinship.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and audit observations</h4><p>October 11, 2026 reporting on the FY2025 audit identifies implementation deficiencies in 16 infrastructure projects valued at ₱425.35 million. Six projects worth ₱68.93 million exceeded revised 2025 deadlines; five worth ₱199.53 million exceeded revised January–February 2026 deadlines. These are project values, not established losses. Current completion status and management responses require verification.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2026/10/11/2562412/city-naga-coa-questions-16-infrastructure-projects">The Freeman, October 11, 2026</SourceLink><SourceLink href={`${budgetUrl}?q=Naga#projects`}>Budget and infrastructure records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Public land legislation — Lutac</h4><p>Further review of HB 363 and HB 10214 is needed to confirm the current legislative text and status, proposed land coverage, eligibility for free patents and geohazard safeguards. No enactment or land transfer is asserted here.</p><SourceLink href="https://www.congress.gov.ph/">House of Representatives — legislative records</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Disaster fund compliance</h4><p>COA published the FY2025 disaster risk reduction and management fund compliance audit on September 22, 2026. Detailed findings and annual city financial totals require further review.</p><SourceLink href="https://www.coa.gov.ph/wpfd_file/naga-city-compliance-audit-report-2025-2/">Official compliance audit</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request updated project schedules, management responses, audited financial statements, and land classification and geohazard assessments.</div></div>;
}

function TalisayProfile() {
 const council = ["Digul Gullas — 93,222", "Rocky Bas — 83,435", "Socrates Fernandez — 80,983", "Lito Bacaltos — 79,109", "Lester Daan — 77,791", "Danny Caballero — 77,327", "Ferdz Rabaya — 76,485", "Rodylle Cabigas — 75,699", "Fe Ylanan — 67,239", "Dan Villaver — 63,555"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Talisay City, Cebu</h4><p>1st Congressional District · Component city · 22 barangays · Population 263,048 (2020).</p><SourceLink href="https://www.cebu.gov.ph/vice-governor-sangguniang-panlalawigan/">Provincial government directory</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor Gerald Anthony (Samsam) Gullas Jr., 115,825 votes; Vice Mayor Richard Francis (Choy) Aznar, 106,186 votes. Both Nacionalista Party. Published media returns list one candidate per executive race; the November 2024 certified list also included Roger Cimafranca for mayor, whose subsequent status requires verification.</p><p>Ten highest-ranked council candidates, all Nacionalista Party; official proclamations and current roster require confirmation:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/talisay-city">Unofficial election returns, May 15, 2025</SourceLink><SourceLink href="https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/COC_2025NLE/CLC2025_R7/CEBU_TALISAYCITY.pdf">COMELEC certified candidate list</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>2019: Samsam Gullas and Alan Bucao; 2022 and 2025: Samsam Gullas and Choy Aznar. Earlier proclamations and specific family relationships require primary-source verification.</p></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Budget controls — FY2025 audit</h4><p>October 6, 2026 reporting identifies ₱139.51 million in obligations exceeding specific allotments across 21 offices and units: social welfare ₱53.28 million, mayor's office ₱48.57 million, city college ₱31.66 million, other units approximately ₱6 million (calculated). The mayor committed to better forecasting and earlier supplemental budgets. Over-obligations do not establish financial losses or misappropriation.</p><SourceLink href="https://www.sunstar.com.ph/cebu/tighten-budget-controls">SunStar, October 6, 2026</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/talisay-city-annual-audit-report-2025/">Official annual audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Disaster fund expenditure</h4><p>GMA reported on December 12, 2025 that auditors questioned eligibility of ₱20.94 million spent in 2023 on rehabilitation and CCTV installation at the traffic command center. The mayor explained the facility had been damaged by Odette and the city had submitted its response to COA. Final disposition requires verification.</p><SourceLink href="https://www.gmanetwork.com/regionaltv/news/111913/talisay-city-cebu-flagged-for-ineligible-expenses-charged-to-disaster-funds/story/">GMA Regional TV report</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/talisay-city-compliance-audit-report-2025/">FY2025 disaster fund compliance audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure and procurement</h4><p>The official city portal lists infrastructure bidding results for July 8, August 5 and August 13, 2025. Individual contract values, completion and current utilization require verification.</p><SourceLink href="https://talisaycitycebu.gov.ph/index.php/transparency-1/">City procurement results</SourceLink><SourceLink href={`${budgetUrl}?q=Talisay#projects`}>Budget and infrastructure records</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request current financial statements, supplemental budgets, contract awards, project completion reports and updated audit responses.</div></div>;
}

function ToledoProfile() {
 const council = ["Nick Pepito — 67,324", "Eric Espinosa — 63,941", "Chito Alferez — 62,253", "Pinky Espinosa — 61,714", "Amiboy Perales — 60,901", "James Gaite — 54,314", "Jun-Jun Borja — 52,071", "Ophelio Dolino — 51,564", "Jeffrey Borja — 50,727", "Pedro Sepada Jr. — 49,351"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Toledo City, Cebu</h4><p>3rd Congressional District · Component city · 129,196 registered voters (2025).</p><SourceLink href="https://scene.ph/atlas/cebu/toledo-city">City profile and leadership directory</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor Marjorie Piczon (Joie) Perales (One Cebu): 72,616; Ian Zambo (NUP): 32,419; Yen Apurado (PFP): 1,096. Vice Mayor Jay Blanco Sigue (One Cebu): 68,368; Dydee Zambo (NUP): 33,984.</p><p>Ten highest-ranked council candidates (first nine One Cebu, tenth NUP); current membership requires official roster confirmation:</p><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><SourceLink href="https://peoplaid.com/2025/05/10/toledo-city-cebu-election-2025-results-winners/">Published unofficial election results</SourceLink><SourceLink href="https://ph.rappler.com/elections/2025/local-race/embed/cebu/toledo-city?contest=Vice+Mayor">COMELEC media server returns, May 15, 2025</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership</h4><p>2019, 2022 and 2025: Marjorie Perales and Jay Sigue, according to compiled leadership records. Earlier proclamations and specific family relationships require verification.</p><SourceLink href="https://scene.ph/atlas/cebu/toledo-city">Historical directory</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Borrowing and development fund — FY2025 audit</h4><p>Published audit reporting identifies ₱388.70 million in Landbank infrastructure loans alongside approximately ₱1 billion in deposits. Auditors questioned financing efficiency. The city treasurer explained that deposits were earmarked for projects and earned interest pending implementation, and committed to reviewing borrowing and possible early repayment.</p><p>Of ₱265.82 million appropriated for 15 development projects, only two projects were implemented during 2025. The planning office cited feasibility and priority changes. This is a project-count measure, not a spending rate.</p><p>The new public market was reported 95% complete on October 5, 2026. Current status requires verification.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-questions-toledos-p388m-loans-in-2025">SunStar, October 8, 2026</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/toledo-city-annual-audit-report-2025/">Official FY2025 annual audit</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Additional audit records</h4><p>FY2024 reporting identifies ₱6.13 million in unliquidated cash advances including ₱2.19 million classified as dormant, some dating to the 1990s. These balances do not automatically establish financial losses or responsibility of current officials.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2025/12/05/2492060/coa-flags-p457-million-unliquidated-cash-advances-6-cities">The Freeman, December 5, 2025</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/toledo-city-compliance-audit-report-2025/">FY2025 disaster fund audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/toledo-city-water-district-cebu-annual-audit-report-2025/">Water district audit — separate entity</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Industrial development and public records</h4><p>Mining revenues, environmental monitoring, rehabilitation commitments, industrial employment and local economic contributions require further source verification.</p><SourceLink href={`${budgetUrl}?q=Toledo#projects`}>Budget and infrastructure records</SourceLink></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request loan terms, financing comparisons, project implementation schedules and updated audit responses. Reported audit observations are not findings of criminal wrongdoing.</div></div>;
}

function CebuCityProfile() {
 const north = ["Winston Pepito", "Nice Archival", "Harold Kendrick Go", "Edgardo (Jaypee) Labella", "Joel Garganera", "Alvin Arcilla", "Pastor (Jun) Alcover", "Sisinio (Bebs) Andales"];
 const south = ["Dave Tumulak", "Philip Zafra", "Paul Labra", "Jose Abellanosa", "Mikel Rama", "Francis Esparis", "Michelle Abella", "Harry Eran"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Cebu City</h4><p>Highly urbanized city · North and South congressional districts · 80 barangays · 964,169 residents (2020 census) · 721,469 registered voters (2025). Administratively independent of Cebu Province.</p></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor Nestor Archival (LP): 256,197; Raymond Garcia: 176,967; Michael Rama: 120,124; Yogi Ruiz: 27,652; Julieto Co: 3,163. Vice Mayor Tomas Osmeña (LP): 233,906; Dondon Hontiveros: 190,586; Joey Daluz: 147,343. Published complete unofficial returns; winners formally proclaimed in May 2025.</p><p>Congressional representatives elected: Rachel Marguerite del Mar (North) and Eduardo Rama Jr. (South).</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/central-visayas-cebu-city">Election returns</SourceLink><SourceLink href="https://www.gmanetwork.com/regionaltv/news/108086/archival-osmea-tandem-proclaimed-as-cebu-city-mayor-vice-mayor/story/">Proclamation reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City council — proclaimed 2025 winners</h4><div className="grid gap-4 sm:grid-cols-2"><div><h5 className="font-semibold">North District</h5><ul className="list-disc pl-5 text-sm">{north.map(n => <li key={n}>{n}</li>)}</ul></div><div><h5 className="font-semibold">South District</h5><ul className="list-disc pl-5 text-sm">{south.map(n => <li key={n}>{n}</li>)}</ul></div></div><p>Election-time alignment: BOPK 6, Kusug–Panaghiusa 6, Partido Barug 4; excludes ex officio members. Mikel Rama is identified in published reporting as former mayor Michael Rama’s son. Current membership and other family relationships require verification.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/archivals-election-triumph-signals-bopks-return-to-cebu-citys-top-post">Council composition and documented relationship</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Financial position — FY2025</h4><p>Reported assets ₱34.08B; liabilities ₱13.43B; equity ₱20.65B; revenue ₱9.67B (2024: ₱9.22B); net surplus ₱326.15M. Personnel services ₱2.67B; maintenance and operating expenses ₱4.95B. COA issued a qualified opinion on the financial statements.</p><SourceLink href="https://www.philstar.com/cebu-news/2026/07/14/2542014/2025-annual-audit-report-city-gets-qualified-opinion/amp">FY2025 audit reporting, July 14, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Bus rapid transit — city-administered funds</h4><p>Of ₱460.26M released since 2017, ₱46.55M was utilized and ₱413.71M remained unused, according to FY2025 audit reporting. Delays involve staffing, scheduling and right-of-way acquisition. City corrective measures include a validated work program and oversight committee. These figures are not the total CBRT project cost.</p><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/cebu-city-faces-scrutiny-over-unused-cbrt-budget">Audit reporting, October 3, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Cash position and budget commitments</h4><p>COA estimated a potential ₱14.44B funding shortfall. The City Budget Office disputed the estimate, proposing adjustments to appropriations, obligations and disaster funds. COA requested documentation. Published calculations differ slightly; this is a disputed funding estimate, not missing money.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-finds-p144b-cash-shortfall-in-cebu-city">Audit and management response, July 15, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Confidential fund audit request</h4><p>On November 3, 2026, the council requested COA findings concerning ₱50M in confidential funds: ₱40M released December 27, 2024 and ₱10M released June 27, 2025. Former mayor Raymond Garcia welcomed review of the records. The request does not establish unlawful expenditure.</p><SourceLink href="https://www.sunstar.com.ph/cebu/cebu-city-council-seeks-coas-findings-on-p50m-confidential-funds">Council resolution reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Additional public records</h4><SourceLink href="https://www.coa.gov.ph/wpfd_file/cebu-city-compliance-audit-report-2025/">FY2025 disaster fund compliance audit</SourceLink><SourceLink href={`${budgetUrl}?q=Cebu%20City#projects`}>Budget and infrastructure records</SourceLink><p>Historical election proclamations, approved annual budgets, project-level completion and final audit dispositions require further verification.</p></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request updated financial statements, project milestones, procurement records and audit responses. Audit observations are not findings of criminal wrongdoing.</div></div>;
}

function LapuLapuCityProfile() {
 const council = ["Jun Alforque (Lakas) — 116,402", "Annabeth Cuizon (PFP) — 116,128", "Susan Baring (Lakas) — 115,236", "Celestino Aying (PFP) — 114,007", "Jan Vincent Dela Serna (Lakas) — 108,871", "Efren Herrera (PFP) — 107,954", "Ariane Yap (Lakas) — 104,321", "Rufo Bering (PFP) — 103,338", "Climaco Tatoy Jr. (PFP) — 101,395", "Jeorgen Eyas-Book (Lakas) — 96,970", "Joseph Pangatungan (PFP) — 95,801", "Emilio Galaroza Jr. (PFP) — 95,383"];
 return <div className="border-t bg-slate-50 p-5 space-y-6">
 <div className="rounded-lg bg-blue-100 p-4"><h4 className="text-xl font-bold text-blue-950">Lapu-Lapu City</h4><p>Highly urbanized city · Lone congressional district · 30 barangays · 497,604 residents (2020 census) · 58.10 sq km · 277,288 registered voters (2025). Administratively independent of Cebu Province.</p><SourceLink href="https://lapulapucitygov.ph/city-officials">Official city directory</SourceLink></div>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City leadership — 2025 election</h4><p>Mayor Cindi King Chan (Lakas): 142,058; Paz Radaza: 42,757; Cristine Takahashi: 39,010. Vice Mayor Celedonio Sitoy (PFP): 145,995; Myk Dignos: 59,591. Congressman Junard Chan: 160,447. Published unofficial returns with all precincts reporting; winners confirmed in proclamation reporting and city directory.</p><SourceLink href="https://ph.rappler.com/elections/2025/local-race/central-visayas-lapu-lapu-city">Election returns</SourceLink><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/15-0-landslide-win-for-chan-led-alliance">Proclamation reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">City council — 2025 election</h4><ul className="list-disc pl-5 text-sm">{council.map(n => <li key={n}>{n}</li>)}</ul><p>The official roster also lists Orlan Joseph Chan Carungay and Jasmine Chan. Party affiliations follow the published election returns.</p><SourceLink href="https://lapulapucitygov.ph/sangguniang-panlungsod">Official council roster</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Historical leadership and documented relationships</h4><p>Cindi Chan served as representative from 2022 before succeeding her husband Junard Chan as mayor in 2025. Junard was elected representative in 2025. Earlier election proclamations and other relationships require verification.</p><SourceLink href="https://lapulapucitygov.ph/city-officials/ma-cynthia-cindi-king-chan">Mayor biography</SourceLink><SourceLink href="https://www.sunstar.com.ph/amp/story/cebu/15-0-landslide-win-for-chan-led-alliance">Documented relationship and election reporting</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Economic development</h4><p>Real GDP at constant 2018 prices: ₱151.44B (2022), ₱165.63B (2023), ₱176.36B (2024). Growth in 2024: 6.5%. Accommodation and food services grew 13.94%; transportation and storage 13.89%; agriculture, forestry and fishing declined 2.2%. GDP is not government revenue.</p><SourceLink href="https://rsso07.psa.gov.ph/system/files/attachment-dir/2025-PR22-010.pdf">PSA economic report, October 7, 2025</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Development fund implementation — FY2025 audit reporting</h4><p>₱379.59M in appropriations remained unimplemented at year-end: approximately ₱180.4M for 32 current projects and ₱199.2M for 34 continuing projects. Of 61 projects programmed for 2025, 29 were underway or completed. Implementation rates: 2022 47.37%; 2023 69.01%; 2024 44.44%; 2025 47.54%. Delays involved engineering, procurement and land acquisition. The city reported activating monthly project monitoring and hiring technical staff. Unimplemented appropriations are not established losses.</p><SourceLink href="https://www.philstar.com/the-freeman/cebu-news/2026/10/07/2561495/lapu-lapu-city-fails-implement-p3796-million-project-backlogs-coa">Audit reporting</SourceLink><SourceLink href="https://www.sunstar.com.ph/cebu/city-tightens-oversight-after-coa-flags-projects">City response</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Infrastructure implementation</h4><p>Four contracts totaling ₱64.92M were identified in FY2025 audit reporting: Jorge Tampus Road and drainage (₱59.24M, 60% complete), Taneo school classrooms (₱2.99M, 40%), and two Bankal Night High School repairs (₱973,888 and ₱1.71M, both 20%). The city reported termination proceedings for Bankal, schedule extensions for Basak and weather and earthquake delays for Tingo. COA maintained its assessment. Current completion and final dispositions remain unverified.</p><SourceLink href="https://www.sunstar.com.ph/cebu/coa-flags-lapu-on-delayed-projects">Audit and city response, October 12, 2026</SourceLink></section>
 <section className="space-y-3"><h4 className="font-bold text-blue-950">Official audit and budget records</h4><SourceLink href="https://www.coa.gov.ph/wpfd_file/lapu-lapu-city-annual-audit-report-2025/">FY2025 annual audit</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/lapu-lapu-city-executive-summary-2025/">FY2025 executive summary</SourceLink><SourceLink href="https://www.coa.gov.ph/wpfd_file/lapu-lapu-city-compliance-audit-report-2025/">FY2025 disaster fund compliance audit</SourceLink><SourceLink href={`${budgetUrl}?q=Lapu-Lapu%20City#projects`}>Budget and infrastructure records</SourceLink><p>Annual financial totals, detailed audit dispositions and updated project status remain pending verification.</p></section>
 <div className="rounded-lg border bg-white p-4 text-xs">Independent, nonpartisan civic information. Citizens may request current project schedules, appropriations, procurement records and management responses. Audit observations do not establish criminal wrongdoing.</div></div>;
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
            const isResearched = lgu.name === "Alcantara" || lgu.name === "Alcoy" || lgu.name === "Alegria" || lgu.name === "Aloguinsan" || lgu.name === "Argao" || lgu.name === "Asturias" || lgu.name === "Badian" || lgu.name === "Balamban" || lgu.name === "Bantayan" || lgu.name === "Barili" || lgu.name === "Boljoon" || lgu.name === "Borbon" || lgu.name === "Carmen" || lgu.name === "Catmon" || lgu.name === "Compostela" || lgu.name === "Consolacion" || lgu.name === "Cordova" || lgu.name === "Daanbantayan" || lgu.name === "Dalaguete" || lgu.name === "Dumanjug" || lgu.name === "Ginatilan" || lgu.name === "Liloan" || lgu.name === "Madridejos" || lgu.name === "Malabuyoc" || lgu.name === "Medellin" || lgu.name === "Minglanilla" || lgu.name === "Moalboal" || lgu.name === "Oslob" || lgu.name === "Pilar" || lgu.name === "Pinamungajan" || lgu.name === "Poro" || lgu.name === "Ronda" || lgu.name === "Samboan" || lgu.name === "San Fernando" || lgu.name === "San Francisco" || lgu.name === "San Remigio" || lgu.name === "Santa Fe" || lgu.name === "Santander" || lgu.name === "Sibonga" || lgu.name === "Sogod" || lgu.name === "Tabogon" || lgu.name === "Tabuelan" || lgu.name === "Tuburan" || lgu.name === "Tudela" || lgu.name === "Bogo City" || lgu.name === "Carcar City" || lgu.name === "Danao City" || lgu.name === "Naga City" || lgu.name === "Talisay City" || lgu.name === "Toledo City" || lgu.name === "Cebu City" || lgu.name === "Lapu-Lapu City";

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
                    : lgu.name === "San Francisco"
                    ? <SanFranciscoProfile />
                    : lgu.name === "San Remigio"
                    ? <SanRemigioProfile />
                    : lgu.name === "Santa Fe"
                    ? <SantaFeProfile />
                    : lgu.name === "Santander"
                    ? <SantanderProfile />
                    : lgu.name === "Sibonga"
                    ? <SibongaProfile />
                    : lgu.name === "Sogod"
                    ? <SogodProfile />
                    : lgu.name === "Tabogon"
                    ? <TabogonProfile />
                    : lgu.name === "Tabuelan"
                    ? <TabuelanProfile />
                    : lgu.name === "Tuburan"
                    ? <TuburanProfile />
                    : lgu.name === "Tudela"
                    ? <TudelaProfile />
                    : lgu.name === "Bogo City"
                    ? <BogoProfile />
                    : lgu.name === "Carcar City"
                    ? <CarcarProfile />
                    : lgu.name === "Danao City"
                    ? <DanaoProfile />
                    : lgu.name === "Naga City"
                    ? <NagaProfile />
                    : lgu.name === "Talisay City"
                    ? <TalisayProfile />
                    : lgu.name === "Toledo City"
                    ? <ToledoProfile />
                    : lgu.name === "Cebu City"
                    ? <CebuCityProfile />
                    : lgu.name === "Lapu-Lapu City"
                    ? <LapuLapuCityProfile />
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
