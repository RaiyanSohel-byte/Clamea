import React from "react";
import { texts } from "../lang";
const Footer = ({ lang }) => {
  return (
    <footer className="pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-[#004C92]">
              Clamea
            </h2>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm lg:text-base">
              {texts[lang].footer_desc}
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer hover:bg-[#004C92] hover:text-white transition-all text-slate-500"
                >
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Product
            </h6>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              {texts[lang].footer_product.map((item, idx) => (
                <li key={idx}>
                  <a className="hover:text-[#004C92] transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Company
            </h6>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              {texts[lang].footer_company.map((item, idx) => (
                <li key={idx}>
                  <a className="hover:text-[#004C92] transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Legal
            </h6>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              {texts[lang].footer_legal.map((item, idx) => (
                <li key={idx}>
                  <a className="hover:text-[#004C92] transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter / Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full max-w-md">
            <p className="text-sm font-bold text-slate-900 mb-4">
              {texts[lang].footer_newsletter}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@example.se"
                className="input input-bordered w-full bg-white border-slate-200 rounded-xl focus:outline-none focus:border-[#004C92]"
              />
              <button className="btn bg-[#004C92] hover:bg-[#003a70] text-white border-none rounded-xl px-6">
                {texts[lang].footer_newsletter_btn}
              </button>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-xs font-semibold text-slate-400">
              {texts[lang].footer_copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
