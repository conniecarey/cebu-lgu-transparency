import { Link } from 'react-router';
import { Landmark, Users, Wallet, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

const sections = [
  { title: 'Explore Cebu Government', description: 'Explore all 53 LGUs, elected officials, local finances, infrastructure and audit records.', icon: Landmark, href: '/government', external: false, pending: false },
  { title: 'Know Your Congresspeople', description: 'Explore Cebu’s 11 congressional districts, representatives, legislative records and voting history as research becomes available.', icon: Users, href: '/congress', external: false, pending: false },
  { title: 'Follow the Public Budget', description: 'Explore Cebu budget allocations, infrastructure projects and public spending information.', icon: Wallet, href: 'https://cebu-city-budget-transparency.netlify.app/', external: true, pending: false },
  { title: 'Know Your Politicians', description: 'Visit our national politician research portal for information about public officials and their records.', icon: ShieldCheck, href: 'https://knowyourpoliticians.netlify.app/', external: true, pending: false },
];

export default function GovernmentActivitySection({
  title = 'Explore BetterCebu',
  description = 'Explore local government, public officials, budgets, and transparency records across Cebu.',
}: GovernmentActivitySectionProps) {
  return (
    <section id="government" className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Citizen-Led Transparency</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sections.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Icon className="h-6 w-6" /></div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                {item.pending ? (
                  <span className="text-sm font-semibold text-slate-500">Coming soon</span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Explore {item.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}</span>
                )}
              </>
            );
            const base = 'flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm';
            const className = base + ' transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg';
            if (item.pending) return <div key={item.title} className={base}>{content}</div>;
            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
            ) : (
              <Link key={item.title} to={item.href} className={className}>{content}</Link>
            );
          })}
        </div>
        <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-sm leading-7 text-slate-700">
            <strong>Our commitment:</strong> BetterCebu is an independent citizen-led transparency initiative, not an official government website. We distinguish verified public records from information that is unavailable or has not yet been researched.
          </p>
        </div>
      </div>
    </section>
  );
}
