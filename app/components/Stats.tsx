'use client';

import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-3">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView();

  const stats = [
    { target: 10000, suffix: '+', label: 'Professionals Trained', sub: 'For Exceptional Career Success', icon: '🎓' },
    { target: 200, suffix: '+', label: 'Sessions Delivered', sub: 'With Unmatched Learning Excellence', icon: '📚' },
    { target: 5000, suffix: '+', label: 'Active Learners', sub: 'Engaged In Dynamic Courses', icon: '🎯' },
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Numbers That Speak</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Transforming careers and organizations through excellence in learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }: { stat: { target: number; suffix: string; label: string; sub: string; icon: string }; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl border border-gray-100 hover:-translate-y-1 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-5xl mb-4">{stat.icon}</div>
      <Counter target={stat.target} suffix={stat.suffix} />
      <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
      <p className="text-sm text-gray-500 mt-1">{stat.sub}</p>
    </div>
  );
}
