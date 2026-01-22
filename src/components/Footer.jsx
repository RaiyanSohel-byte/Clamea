import React from "react";
import { texts } from "../lang";

const Footer = ({ lang }) => {
  const t = texts[lang];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
    },
    {
      name: "X",
      icon: (
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
      ),
    },
    {
      name: "Instagram",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
  ];

  return (
    <footer className="relative bg-[#000F1C] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Subtle Glow Effect in the corner to prevent the black-blue from feeling "flat" */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#004C92]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-black tracking-tighter text-white">
                Clamea<span className="text-[#1AA9F4]">.</span>
              </h2>
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm lg:text-base font-medium">
                {t.footer_desc}
              </p>
            </div>

            {/* Social Icons - Redesigned for Dark Theme */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#1AA9F4] hover:border-[#1AA9F4] hover:-translate-y-1 text-slate-300 hover:text-white"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Product", list: t.footer_product },
            { title: "Company", list: t.footer_company },
            { title: "Legal", list: t.footer_legal },
          ].map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h6 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1AA9F4]">
                {col.title}
              </h6>
              <ul className="space-y-4 text-sm font-semibold">
                {col.list.map((item, i) => (
                  <li key={i}>
                    <a className="text-slate-400 hover:text-white transition-all duration-300 cursor-pointer flex items-center group">
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#1AA9F4] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Simplified & Elegant */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
            {t.footer_copyright}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1AA9F4]"></span>
              </span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                System Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
