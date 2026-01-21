import { texts } from "../lang";

const ProblemSolution = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#004C92] uppercase mb-4">
            {t.problem_badge}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {t.problem_title_1} <br />
            <span className="text-[#004C92]">{t.problem_title_2}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: THE PROBLEM */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-400"
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
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t.problem_old_way_title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.problem_old_way_desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.problem_old_way_list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-500 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE SOLUTION */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-[#004C92]/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#004C92]/10 flex items-center justify-center border border-[#004C92]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#004C92]"
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
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#004C92]">
                    {t.problem_clamea_way_title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.problem_clamea_way_desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {t.problem_clamea_way_list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[#004C92] font-semibold"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
