import { texts } from "../lang";

const Hero = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#004C92] to-[#1AA9F4] pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-36 lg:pb-52 text-white">
      {/* SVG Grid Overlay - Hidden on very small screens to keep it clean */}
      <div
        className="absolute inset-0 z-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative Glow - Responsive sizing */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-blue-50">
                {t.hero_badge}
              </span>
            </div>

            {/* Responsive Heading: text-4xl on mobile, text-7xl+ on desktop */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] lg:leading-[0.95] mb-6 md:mb-8">
              {t.hero_title_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white opacity-90">
                {t.hero_title_2}
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-blue-50/80 mb-8 md:mb-12 leading-relaxed max-w-xl font-medium">
              {t.hero_desc}
            </p>

            {/* Buttons: Full width on mobile, auto on tablet+ */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="btn btn-lg w-full sm:w-auto rounded-full bg-white text-[#004C92] hover:bg-blue-50 border-none px-10 md:px-12 h-[56px] md:h-[64px] text-base md:text-lg font-bold shadow-2xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                {t.hero_cta_1}
              </button>
              <button className="btn btn-lg w-full sm:w-auto bg-transparent hover:bg-white/10 rounded-full text-white px-10 h-[56px] md:h-[64px] border border-white/30 backdrop-blur-sm transition-all">
                {t.hero_cta_2}
              </button>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 md:mt-20 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 md:gap-x-8 gap-y-4 pt-8 md:pt-10 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-blue-200">
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
                <span className="text-xs md:text-sm font-bold text-white">
                  4.9/5 Rating
                </span>
              </div>
              <div className="h-5 w-px bg-white/20 hidden md:block"></div>
              <span className="text-xs md:text-sm font-medium text-blue-100/70">
                {t.hero_trusted}
              </span>
              <div className="h-5 w-px bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-2 text-blue-100/70 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
                <svg
                  className="w-3.5 h-3.5 md:w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                GDPR Secure
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals - Adjusted for stacking and mobile sizing */}
          <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 px-4 md:px-0">
            <div className="relative group max-w-[500px] mx-auto lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-50 transition duration-1000"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900/40 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 backdrop-blur-2xl border border-white/20 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    alt="Platform"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Status Bar - Scaled for mobile */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 backdrop-blur-xl px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-white/20 shadow-xl animate-bounce-subtle">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                      <p className="text-[9px] md:text-[11px] font-bold text-white tracking-tight">
                        Claim: #SE-8829{" "}
                        <span className="text-green-400 ml-1">Active</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Insight Box - Re-positioned to not overflow on small screens */}
              <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 bg-white/10 backdrop-blur-2xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-white/20 max-w-[200px] md:max-w-[260px] transition-all duration-500 hover:-translate-y-2">
                <div className="flex gap-2 md:gap-3 items-center mb-2 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-400 to-[#004C92] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
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
                  <p className="text-[8px] md:text-[10px] font-black uppercase text-blue-100 tracking-[0.2em]">
                    {t.hero_badge2}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed font-semibold">
                  "{t.hero_badge_text1}{" "}
                  <span className="text-blue-300">100%</span>{" "}
                  {t.hero_badge_text2}."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
