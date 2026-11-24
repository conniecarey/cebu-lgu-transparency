import { useState } from 'react';
import { Link } from 'react-router';

const members = [
 ['Cebu Province','1st District','Rhea Mae A. Gullas','Carcar, Naga, Talisay, Minglanilla, San Fernando, Sibonga'],
 ['Cebu Province','2nd District','Edsel A. Galeos','Alcoy, Argao, Boljoon, Dalaguete, Oslob, Samboan, Santander'],
 ['Cebu Province','3rd District','Karen Hope F. Garcia','Toledo, Aloguinsan, Asturias, Balamban, Barili, Pinamungajan, Tuburan'],
 ['Cebu Province','4th District','Sun J. Shimura','Bogo, Bantayan, Daanbantayan, Madridejos, Medellin, San Remigio, Santa Fe, Tabogon, Tabuelan'],
 ['Cebu Province','5th District','Vincent Franco “Duke” D. Frasco','Danao, Borbon, Carmen, Catmon, Compostela, Liloan, Pilar, Poro, San Francisco, Sogod, Tudela'],
 ['Cebu Province','6th District','Daphne A. Lagon','Consolacion, Cordova'],
 ['Cebu Province','7th District','Patricia C. Calderon','Alcantara, Alegria, Badian, Dumanjug, Ginatilan, Malabuyoc, Moalboal, Ronda'],
 ['Cebu City','1st District','Rachel Marguerite B. Del Mar','North District'],
 ['Cebu City','2nd District','Eduardo R. Rama Jr.','South District'],
 ['Lapu-Lapu City','Lone District','Junard “Ahong” Q. Chan','Lapu-Lapu City'],
 ['Mandaue City','Lone District','Emmarie “Lolypop” Ouano-Dizon','Mandaue City'],
];
const house = 'https://congress.gov.ph/house-members';
const journal = 'https://docs.congress.hrep.online/legisdocs/journals_20/Journal-01589-20250728.pdf';
const budget = 'https://cebu-city-budget-transparency.netlify.app/';
export default function Congress() {
 const [query,setQuery] = useState('');
 const filtered = members.filter(m=>m.join(' ').toLowerCase().includes(query.trim().toLowerCase()));
 return <main className="bg-slate-50 flex-1 px-4 py-12"><div className="mx-auto max-w-7xl space-y-6">
 <Link to="/" className="text-blue-700 text-sm">← Back to BetterCebu</Link>
 <div className="rounded-2xl bg-blue-950 text-white p-8"><p className="uppercase text-xs tracking-widest">20th Congress · 2025–2028</p><h1 className="text-3xl font-bold mt-3">Know Your Congresspeople</h1><p className="mt-3">Explore Cebu’s 11 district representatives and monitor their legislative work and public spending.</p></div>
 <div className="grid grid-cols-3 gap-3">{[['11','Districts'],['7','Provincial seats'],['4','Independent city seats']].map(([n,label])=><div key={label} className="bg-white border rounded-xl p-4"><p className="text-2xl font-bold text-blue-950">{n}</p><p className="text-sm text-slate-600">{label}</p></div>)}</div>
 <p className="text-sm text-slate-600">Representative names checked against the official House roster on November 25, 2026. District coverage is a reference guide; detailed legislative and financial records are being verified.</p>
 <label className="block font-semibold" htmlFor="congress-search">Search representative, district or locality</label><input id="congress-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Cebu districts…" className="w-full rounded-xl border p-3 bg-white"/>
 <div className="grid gap-4 md:grid-cols-2">{filtered.map(([area,district,name,coverage])=><details key={area+district} className="rounded-xl bg-white border p-5"><summary className="cursor-pointer"><span className="text-xs font-semibold text-blue-700">{area} · {district}</span><h2 className="text-xl font-bold text-blue-950 my-2">{name}</h2><p className="text-sm text-slate-600">{coverage}</p></summary><div className="mt-4 border-t pt-4 space-y-3 text-sm">{area === 'Cebu Province' && district === '1st District' ? (
 <div className="space-y-4">
 <div className="rounded-lg bg-blue-50 p-4"><p className="font-semibold text-blue-950">36 principal-authored bills</p><p>House profile snapshot, November 25, 2026. Bills are not equivalent to enacted laws.</p></div>
 <h3 className="font-bold text-blue-950">Selected legislative measures — 20th Congress</h3>
 <ul className="list-disc pl-5 space-y-2">
 <li><strong>HB 362 → HB 11710:</strong> CTU Naga campus upgrade. Original bill filed June 30, 2025; substitute listed with Rules for November 9, 2026.</li>
 <li><strong>HB 363 → HB 10214:</strong> Naga public land reclassification and disposition. Substitute filed July 23, 2026; listed with Rules for July 28, 2026.</li>
 <li><strong>HB 364:</strong> Proposed mathematics and science high school in San Fernando. Filed June 30, 2025; referred to Basic Education and Culture.</li>
 </ul>
 <h3 className="font-bold text-blue-950">Previous Congress — selected proposals</h3>
 <p>HB 1070: additional Cebu district; HB 1071: Naga land disposition; HB 1072: San Fernando science school; HB 1073: Cebu light rail. All filed July 4, 2022. These references do not establish enactment or implementation.</p>
 <h3 className="font-bold text-blue-950">Questions for public accountability</h3>
 <ul className="list-disc pl-5 space-y-1"><li>What safeguards and beneficiary eligibility rules apply to the proposed Naga land disposition?</li><li>What funding and implementation milestones exist for the proposed campus and school?</li><li>What is the implementation status of the earlier rail proposal?</li></ul>
 <p>Roll-call votes, enacted-law totals, committee memberships, district spending and project completion remain under verification.</p>
 <a className="block text-blue-700 underline" href="https://congress.gov.ph/index.php/house-members/view/K040" target="_blank" rel="noopener noreferrer">Official member profile and bills</a>
 <a className="block text-blue-700 underline" href="https://congress.gov.ph/legislative-documents?congress=20" target="_blank" rel="noopener noreferrer">20th Congress bill records</a>
 <a className="block text-blue-700 underline" href="https://www.congress.gov.ph/legis/results?congress=20&amp;oth_nos=HB10214&amp;qrytype=N&amp;signif=NL" target="_blank" rel="noopener noreferrer">HB 10214 legislative record</a>
 <a className="block text-blue-700 underline" href="https://ldr.senate.gov.ph/congress-author/gullas-rhea-mae" target="_blank" rel="noopener noreferrer">Senate legislative reference — previous Congress</a>
 </div>
  ) : area === 'Cebu Province' && district === '2nd District' ? (
 <div className="space-y-4">
 <div className="rounded-lg bg-blue-50 p-4"><p className="font-semibold text-blue-950">77 principal-authored bills listed</p><p>Official House profile snapshot, November 25, 2026. This listing can include shared authorship and does not count enacted laws.</p></div>
 <h3 className="font-bold text-blue-950">Selected legislative measures — 20th Congress</h3>
 <ul className="list-disc pl-5 space-y-2">
 <li><strong>HB 3513:</strong> Proposed TESDA training and assessment center in Boljoon. Filed August 12, 2025; committee approval February 24, 2026.</li>
 <li><strong>HB 3514 → HB 11168:</strong> Additional Regional Trial Court branch in Dalaguete. Substitute passed the House October 12, 2026 and was received by the Senate October 13, 2026.</li>
 <li><strong>HB 4082:</strong> Proposed regular Cebu Normal University campus in Argao. Committee approval November 18, 2025, according to the captured BatasWatch record.</li>
 </ul>
 <h3 className="font-bold text-blue-950">Previous Congress — selected proposals</h3>
 <p>HB 3347 proposed converting Cebu Technological University into a university system; HB 4104 proposed a multispecies marine hatchery in Argao. These 2022 proposals do not establish enactment or completion.</p>
 <h3 className="font-bold text-blue-950">Questions for public accountability</h3>
 <ul className="list-disc pl-5 space-y-1"><li>What funding, staffing and implementation schedules are available for the proposed training center and university campus?</li><li>What is the subsequent legislative status of the additional court branch?</li><li>What happened to the proposed marine hatchery, and what benefits have reached local fishers?</li></ul>
 <p>Individual roll-call votes, committee memberships, political family history and district spending remain under verification.</p>
 <a className="block text-blue-700 underline" href="https://congress.gov.ph/house-members/view/K035" target="_blank" rel="noopener noreferrer">Official House member profile and bills</a>
 <a className="block text-blue-700 underline" href="https://congress.gov.ph/legislative-documents?congress=20&amp;page=8" target="_blank" rel="noopener noreferrer">Official bill records — HB 3513 and HB 3514</a>
 <a className="block text-blue-700 underline" href="https://econgress.gov.ph/house-members/?id=118&amp;views=authoredbills" target="_blank" rel="noopener noreferrer">Previous congressional records</a>
 <a className="block text-blue-700 underline" href="https://bills.juris.ph/authors?author=GALEOS%2C+EDSEL+A." target="_blank" rel="noopener noreferrer">BatasWatch captured legislative records — secondary source</a>
 </div>
 ) : (<p><strong>Legislative record:</strong> Individual bills, enacted laws, committee assignments and roll-call votes pending verification.</p>)}<p><strong>Historical leadership and family relationships:</strong> Pending source review.</p><p><strong>District budgets:</strong> Explore project records by locality. Allocations do not establish personal control or actual expenditures.</p><a href={house} target="_blank" rel="noopener noreferrer" className="block text-blue-700 underline">Official House membership directory</a><a href={journal} target="_blank" rel="noopener noreferrer" className="block text-blue-700 underline">20th Congress opening journal</a><a href={budget} target="_blank" rel="noopener noreferrer" className="block text-blue-700 underline">Cebu budget transparency portal</a></div></details>)}</div>
 {filtered.length===0 && <p>No matching representatives.</p>}
 <div className="rounded-xl border bg-blue-50 p-5 text-sm text-slate-700">BetterCebu is an independent, nonpartisan citizen-led initiative. Bills filed are not necessarily enacted laws. Budget allocations are not necessarily disbursements. Missing research is not evidence of misconduct.</div>
 </div></main>;
}
