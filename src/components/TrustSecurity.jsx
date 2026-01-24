import React from "react";

const TrustSecurity = () => {
  const securityFeatures = [
    {
      title: "GDPR-Säkerhet",
      text: "Hantering av personuppgifter sker strikt enligt gällande lagstiftning.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      // Card 2 updated to focus on Login/Access
      title: "Säker inloggning",
      text: "Endast du har tillgång till ditt konto. Inloggning och åtkomst är skyddade för att förhindra obehörig användning.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
    },
    {
      // Card 3 updated to focus purely on Storage/Encryption
      title: "Krypterad lagring",
      text: "Din information lagras krypterat med banknivå-säkerhet för att skydda data mot obehörig åtkomst.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#004C92] to-[#1AA9F4] py-24 md:py-32">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-200 uppercase bg-blue-900/30 border border-blue-400/30 rounded-full">
            Säkerhet först
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Trygg hantering av <br className="hidden md:block" /> ditt ärende
          </h2>

          {/* Headline Body – Updated exactly as requested */}
          <p className="text-xl text-blue-50/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Vi använder avancerad teknik och strukturerad analys för att hjälpa
            dig förstå ditt försäkringsärende och vilka ersättningar du kan ha
            rätt till. Din data hanteras säkert och med högsta respekt för
            integritet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2"
            >
              {/* Text Content */}
              <h3 className="text-white text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100/70 font-normal leading-relaxed">
                {feature.text}
              </p>

              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-300 rounded-full transition-all duration-500 group-hover:w-1/3 opacity-50" />
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center">
          <p className="text-sm text-blue-200/50 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            End-to-end kryptering aktiverad för alla användare
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
