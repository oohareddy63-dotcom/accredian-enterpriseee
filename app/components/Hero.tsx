'use client';

import { useEffect, useState } from 'react';

const badges = ['500+ Companies Trained', 'IIT & IIM Faculty', 'Industry-Recognized Certs'];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8]">
      {/* Animated blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[360px] h-[360px] bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className={`space-y-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  ✦ {b}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Next-Gen<br />
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
              <br />For Your Enterprise
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              Cultivate high-performance teams through expert learning, tailored programs, and measurable ROI — trusted by India&apos;s leading organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-blue-300/40 hover:scale-105 transition-all duration-300">
                Enquire Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#cat"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                Explore Programs
              </a>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              {[['10K+', 'Professionals'], ['200+', 'Sessions'], ['50+', 'Corporates']].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-bold text-white">{n}</div>
                  <div className="text-xs text-blue-200">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className={`relative hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-[380px] h-[420px]">
              {/* Main card */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl">🚀</div>
                  <div>
                    <p className="text-white font-bold">Corporate Training</p>
                    <p className="text-blue-200 text-sm">Customized Programs</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {['Data Science & AI', 'Product Management', 'Leadership & Strategy', 'Gen-AI Mastery'].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 text-center">
                  <p className="text-white font-bold text-sm">Trusted by 50+ Enterprises</p>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-5 -right-5 bg-yellow-400 text-yellow-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg animate-bounce">
                🏆 #1 Rated
              </div>

              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-5 -left-5 bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg">
                ✓ ISO Certified
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
