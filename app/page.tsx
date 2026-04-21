import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partnerships from './components/Partnerships';
import AccredianEdge from './components/AccredianEdge';
import CAT from './components/CAT';
import DomainExpertise from './components/DomainExpertise';
import CourseSegmentation from './components/CourseSegmentation';
import WhoShouldJoin from './components/WhoShouldJoin';
import HowItWorks from './components/HowItWorks';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Partnerships />
        <AccredianEdge />
        <CAT />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <HowItWorks />
        <Testimonials />
        <FAQs />
        <ContactForm />
      </main>

      <footer className="bg-[#0f172a] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-3">
                Accredian
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Next-Gen Expertise For Your Enterprise. Trusted by 50+ leading organizations across India.
              </p>
              <div className="flex gap-3 mt-5">
                {['in', 'tw', 'yt'].map((s) => (
                  <div key={s} className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer transition-colors duration-200">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {[
              { title: 'Programs', links: ['Product & Innovation', 'Gen-AI Mastery', 'Leadership', 'Tech & Data', 'Operations'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'] },
              { title: 'Support', links: ['FAQ', 'Documentation', 'Privacy Policy', 'Terms of Service'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; 2025 Accredian — A Brand of FullStack Education Pvt Ltd.</p>
            <p>Built with Next.js &amp; Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
