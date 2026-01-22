import { texts } from "../lang";

const Features = ({ lang }) => {
  const t = texts[lang];

  const features = [
    {
      title: t.features_1_title,
      desc: t.features_1_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: t.features_2_title,
      desc: t.features_2_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      title: t.features_3_title,
      desc: t.features_3_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      title: t.features_4_title,
      desc: t.features_4_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: t.features_5_title,
      desc: t.features_5_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: t.features_6_title,
      desc: t.features_6_desc,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#004C92] overflow-hidden text-white">
      {/* Continuing the SVG Grid Texture */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-200 uppercase">
              {t.features_badge}
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            {t.features_title}
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-blue-400/30 hover:-translate-y-2"
            >
              {/* Card Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-[#004C92] rounded-2xl shadow-lg flex items-center justify-center mb-6 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {f.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                  {f.title}
                </h4>
                <p className="text-blue-100/70 leading-relaxed text-sm md:text-base font-medium">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Modern Floating Style */}
        <div className="mt-20 md:mt-32 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1AA9F4] to-[#004C92] rounded-[2.5rem] blur-lg opacity-30"></div>

          <div className="relative p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10 text-center lg:text-left max-w-2xl">
              <p className="text-2xl md:text-3xl font-black text-[#004C92] leading-tight">
                {t.features_cta_text}
              </p>
            </div>

            <button className="relative z-10 btn w-full lg:w-auto h-[64px] px-10 bg-[#004C92] hover:bg-[#1AA9F4] text-white border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-900/20 transition-all hover:scale-105 active:scale-95">
              {t.features_cta_btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
