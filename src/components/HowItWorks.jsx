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
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#004C92] uppercase mb-4">
            {t.how_badge}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {t.how_title_1}{" "}
            <span className="text-[#004C92] text-3xl md:text-5xl">
              {t.how_title_2}
            </span>
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left border rounded-2xl p-8 border-gray-200"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-[#004C92] transition-colors">
                <span className="text-[#004C92] font-bold text-xl">
                  {step.number}
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {step.title}
              </h4>

              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-full bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3 px-4 py-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-semibold text-slate-600">
                {t.how_bottom_text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
