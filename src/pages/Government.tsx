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
            const isResearched = lgu.name === "Alcantara" || lgu.name === "Alcoy" || lgu.name === "Alegria" || lgu.name === "Aloguinsan" || lgu.name === "Argao" || lgu.name === "Asturias" || lgu.name === "Badian";

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
