import React from "react";
import { texts } from "../lang";

const Navbar = ({ lang, setLang }) => {
  const t = texts[lang];

  return (
    <nav className="navbar sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 lg:px-12">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-72 border border-slate-100 space-y-2"
          >
            <li>
              <a className="py-3 font-semibold text-slate-700 active:bg-blue-50">
                {t.features}
              </a>
            </li>
            <li>
              <a className="py-3 font-semibold text-slate-700 active:bg-blue-50">
                {t.how}
              </a>
            </li>
            <li>
              <a className="py-3 font-semibold text-slate-700 active:bg-blue-50">
                {t.security}
              </a>
            </li>
            <div className="divider my-1 opacity-50"></div>
            <li>
              <a className="py-3 font-bold text-[#004C92]">{t.login}</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl font-black tracking-tighter text-[#004C92] cursor-pointer hover:opacity-90 transition-opacity ml-2 lg:ml-0">
          Clamea
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <div className="bg-slate-50/50 border border-slate-100 rounded-full px-2 py-1">
          <ul className="menu menu-horizontal gap-1 p-0">
            <li>
              <a className="text-[13px] uppercase tracking-wider font-bold text-slate-500 hover:text-[#004C92] hover:bg-transparent transition-all">
                {t.features}
              </a>
            </li>
            <li>
              <a className="text-[13px] uppercase tracking-wider font-bold text-slate-500 hover:text-[#004C92] hover:bg-transparent transition-all">
                {t.how}
              </a>
            </li>
            <li>
              <a className="text-[13px] uppercase tracking-wider font-bold text-slate-500 hover:text-[#004C92] hover:bg-transparent transition-all">
                {t.security}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="navbar-end gap-2 md:gap-4">
        {/* Styled Language Selector */}
        <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-[11px] font-bold rounded-md transition-all ${lang === "en" ? "bg-white shadow-sm text-[#004C92]" : "text-slate-400 hover:text-slate-600"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("sv")}
            className={`px-3 py-1 text-[11px] font-bold rounded-md transition-all ${lang === "sv" ? "bg-white shadow-sm text-[#004C92]" : "text-slate-400 hover:text-slate-600"}`}
          >
            SV
          </button>
        </div>

        {/* Desktop Mobile Select fallback for small screens */}
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="select select-ghost select-xs focus:bg-transparent font-bold text-slate-600 sm:hidden"
        >
          <option value="en">EN</option>
          <option value="sv">SV</option>
        </select>

        <button className="btn btn-ghost btn-sm hidden md:inline-flex rounded-full text-slate-700 font-bold hover:bg-slate-100 transition-colors">
          {t.login}
        </button>

        <button className="btn btn-sm md:btn-md bg-[#004C92] hover:bg-[#003a70] text-white border-none rounded-full px-5 lg:px-8 shadow-lg shadow-blue-900/10 active:scale-95 transition-all">
          {t.demo}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
