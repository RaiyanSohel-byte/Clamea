import { texts } from "../lang";

const Hero = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-48">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[55%] text-left z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004C92]"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-slate-600">
                {t.hero_badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold lg:tracking-tight text-slate-900 leading-[1.05] mb-8">
              {t.hero_title_1} <br />
              <span className="text-[#004C92]">{t.hero_title_2}</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              {t.hero_desc}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="btn btn-lg rounded-full bg-[#004C92] hover:bg-[#003a70] text-white border-none px-10 h-[60px] shadow-xl shadow-blue-900/10">
                {t.hero_cta_1}
              </button>
              <button className="btn btn-lg btn-ghost rounded-full text-slate-700 hover:bg-slate-50 px-10 h-[60px] border border-slate-200">
                {t.hero_cta_2}
              </button>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">
                  4.9/5 Rating
                </span>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

              <span className="text-sm font-medium text-slate-400">
                {t.hero_trusted}
              </span>

              <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                GDPR Secure
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-2 border border-slate-100 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    alt="Clamea Platform"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <p className="text-xs font-bold text-slate-800 tracking-tight">
                        Claim: #SE-8829 Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gray-50 p-5 rounded-2xl shadow-2xl border border-gray-200 max-w-[240px] hidden md:block transition-transform group-hover:-translate-y-2">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004C92] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-bold uppercase text-gray-700 tracking-wider">
                    AI Insight
                  </p>
                </div>
                <p className="text-sm text-gray-700 leading-snug font-medium">
                  "Your policy covers 100% of rehabilitation costs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
