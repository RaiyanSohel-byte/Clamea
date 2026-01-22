import React from "react";
import { texts } from "../lang";

const TrustSecurity = ({ lang }) => {
  const t = texts[lang];

  const trustItems = [
    {
      label: t.trust_gdpr,
      icon: (
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      label: t.trust_bankid,
      icon: (
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3V1m0 10V3m0 8h8m-8 0a8.001 8.001 0 01-8 8" />
      ),
    },
    {
      label: t.trust_aes,
      icon: (
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-[#004C92] overflow-hidden">
      {/* 1. High-End Background: Concentrated Radial Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#1AA9F4]/10 rounded-[100%] blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* 2. Headline - Smaller, more sophisticated "Overline" style */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-black tracking-[0.3em] text-blue-300/60 uppercase mb-4">
            {t.trust_badge}
          </p>
          <div className="h-px w-12 bg-blue-400/30 mx-auto"></div>
        </div>

        {/* 3. Trust Grid - Using 'Material' Depth instead of borders */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-stretch">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 px-8 py-5 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-md transition-all duration-500 hover:from-white/[0.12] hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#004C92] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center text-blue-200 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(26,169,244,0.4)] transition-all duration-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {item.icon}
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] font-bold text-blue-300/40 uppercase tracking-widest">
                  Verified Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Subtext / Disclaimer */}
        <div className="mt-20 text-center">
          <div className="max-w-xl mx-auto py-6 px-8 rounded-2xl bg-black/10 border border-white/5">
            <p className="text-xs md:text-sm text-gray-100 font-medium leading-relaxed">
              <span className="text-blue-300/50 mr-2">●</span>
              {t.trust_disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
