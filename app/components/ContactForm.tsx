'use client';

import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const programs = [
  { value: 'corporate-training', label: 'Corporate Training' },
  { value: 'data-science', label: 'Data Science Excellence' },
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'leadership', label: 'Leadership Elevation' },
  { value: 'custom', label: 'Custom Program' },
];

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', program: 'corporate-training', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', program: 'corporate-training', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400';

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transform Your Team Today</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Our training experts will reach out within 24 hours.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
                <p className="text-gray-500 mb-6">We&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Program *</label>
                  <select name="program" value={form.program} onChange={handleChange} required className={inputCls}>
                    {programs.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your team's needs..." className={inputCls} />
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Get Started Today →'}
                </button>
              </form>
            )}
          </div>

          {/* Info panel — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white flex-1">
              <h3 className="text-xl font-bold mb-6">Why Accredian?</h3>
              <ul className="space-y-4">
                {[
                  ['🎓', 'IIT & IIM certified faculty'],
                  ['🏢', 'Trusted by 50+ enterprises'],
                  ['📊', '10,000+ professionals trained'],
                  ['🔧', 'Fully customized programs'],
                  ['🌐', 'Online & offline delivery'],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <span className="text-xl">{icon}</span>
                    <span className="text-blue-100">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Contact Us Directly</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📞</span> +91 98765 43210
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">✉️</span> training@accredian.com
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🕐</span> Mon–Fri, 9AM–6PM IST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
