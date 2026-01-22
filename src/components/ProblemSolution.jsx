import { texts } from "../lang";

const ProblemSolution = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#1AA9F4] to-[#004C92] overflow-hidden text-white">
      {/* Continuing the SVG Grid Texture from Hero for seamless blending */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Atmospheric Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-100 uppercase">
              {t.problem_badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
            {t.problem_title_1} <br />
            <span className="text-blue-200 opacity-90">
              {t.problem_title_2}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT SIDE: THE PROBLEM (Oceanic Glass Style) */}
          <div className="flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                <svg
                  className="h-7 w-7 text-blue-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.problem_old_way_title}
              </h3>
              <p className="text-blue-100/70 leading-relaxed font-medium">
                {t.problem_old_way_desc}
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <ul className="grid gap-4">
                {t.problem_old_way_list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-blue-100/60 group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300/40 transition-colors group-hover:bg-red-400" />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: THE SOLUTION (High Contrast Focus Card) */}
          <div className="relative group flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-white shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] border border-white transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* Subtle light leak decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004C92] to-[#1AA9F4] shadow-xl shadow-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#004C92] mb-4">
                {t.problem_clamea_way_title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {t.problem_clamea_way_desc}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-8 border-t border-slate-100">
              <ul className="grid gap-4">
                {t.problem_clamea_way_list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-[#004C92] group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#004C92] transition-colors duration-300">
                      <svg
                        className="w-3.5 h-3.5 text-[#004C92] group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold tracking-tight text-slate-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
