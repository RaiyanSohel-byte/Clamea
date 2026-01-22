import React from "react";
import { texts } from "../lang";

const HowItWorks = ({ lang }) => {
  const t = texts[lang];

  const steps = [
    {
      number: "01",
      title: t.how_step_1_title,
      description: t.how_step_1_desc,
    },
    {
      number: "02",
      title: t.how_step_2_title,
      description: t.how_step_2_desc,
    },
    {
      number: "03",
      title: t.how_step_3_title,
      description: t.how_step_3_desc,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#004C92] to-[#1AA9F4] text-white overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Deep Sea Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-200 uppercase">
              {t.how_badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter">
            {t.how_title_1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              {t.how_title_2}
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Glowing Line */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="relative z-10 w-full p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 group-hover:border-blue-400/30">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Number Badge */}
                <div className="relative mb-8 inline-flex">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1AA9F4] to-[#004C92] flex items-center justify-center shadow-lg shadow-blue-500/20 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-white font-black text-2xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h4>

                <p className="text-blue-100/60 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Mobile Animated Arrow */}
              {index !== steps.length - 1 && (
                <div className="md:hidden py-6 text-blue-200 animate-bounce">
                  <svg
                    className="w-8 h-8 rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm md:text-base font-bold text-blue-100 tracking-tight">
              {t.how_bottom_text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
