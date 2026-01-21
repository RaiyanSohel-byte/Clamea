import React from "react";
import { texts } from "../lang";

const TrustSecurity = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="py-20 bg-base-200 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 mb-12">
          <span className="font-bold text-xl uppercase tracking-widest">
            {t.trust_gdpr}
          </span>
          <span className="font-bold text-xl uppercase tracking-widest">
            {t.trust_bankid}
          </span>
          <span className="font-bold text-xl uppercase tracking-widest">
            {t.trust_aes}
          </span>
        </div>
        <div className="divider"></div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 italic">{t.trust_disclaimer}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
