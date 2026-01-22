import React from "react";
import { texts } from "../lang";

const TrustSecurity = ({ lang }) => {
  const t = texts[lang];

  const trustItems = [
    {
      label: t.trust_gdpr,
      sub: "Data Protection",
      icon: (
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      label: t.trust_bankid,
      sub: "Verified Identity",
      icon: (
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3V1m0 10V3m0 8h8m-8 0a8.001 8.001 0 01-8 8" />
      ),
    },
    {
      label: t.trust_aes,
      sub: "Military-Grade",
      icon: (
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* THEME MATCHING:
        1. We start with #1AA9F4 to seamlessly blend with the previous section.
        2. We gradient down to #003366 (Deep Navy) to create a 'grounded' feel for security.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1AA9F4] to-[#003366] z-0"></div>

      {/* Decorative 'Security Grid' Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Central Glow (The "Core" of security) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] z-0"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <div className="px-4 py-1 rounded-full bg-white/20">
              <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">
                {t.trust_badge || "SECURITY"}
              </span>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.trust_title}
          </h3>
        </div>

        {/* Trust Cards - Redesigned to look like 'Secure Plates' */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:border-white/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Circle */}
              <div className="relative w-16 h-16 mb-6 rounded-2xl bg-[#002855] flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 group-hover:border-blue-300/50 transition-all duration-500">
                <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="text-center relative z-10">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                  {item.label}
                </h4>
                <p className="text-xs font-bold text-blue-200/50 uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer with a "Lock" vibe */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#002855]/40 border border-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse"></div>
            <p className="text-xs md:text-sm text-blue-100/80 font-medium">
              {t.trust_disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
