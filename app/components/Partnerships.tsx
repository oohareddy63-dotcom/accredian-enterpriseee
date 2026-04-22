'use client';

import { useInView } from '../hooks/useInView';

const partners = [
  { name: 'Reliance', abbr: 'RIL', color: 'bg-blue-50 text-blue-700' },
  { name: 'HCL', abbr: 'HCL', color: 'bg-green-50 text-green-700' },
  { name: 'IBM', abbr: 'IBM', color: 'bg-indigo-50 text-indigo-700' },
  { name: 'CRIF', abbr: 'CRIF', color: 'bg-orange-50 text-orange-700' },
  { name: 'ADP', abbr: 'ADP', color: 'bg-red-50 text-red-700' },
  { name: 'Bayer', abbr: 'Bayer', color: 'bg-purple-50 text-purple-700' },
  { name: 'Wipro', abbr: 'Wipro', color: 'bg-teal-50 text-teal-700' },
  { name: 'Infosys', abbr: 'Infy', color: 'bg-sky-50 text-sky-700' },
];

export default function Partnerships() {
  const { ref, inView } = useInView();
  const doubled = [...partners, ...partners]; // for seamless loop
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Proven Partnerships</h2>
          <p className="text-gray-500 text-lg">Successful collaborations with the industry&apos;s best</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {doubled.map((p, i) => (
            <div
              key={i}
              className={`inline-flex flex-col items-center justify-center ${p.color} rounded-2xl px-10 py-6 min-w-[160px] shadow-sm border border-gray-100 flex-shrink-0`}
            >
              <span className="text-2xl font-extrabold tracking-tight">{p.abbr}</span>
              <span className="text-xs mt-1 opacity-70 font-medium">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
