import React from "react";

const ClameaValue = () => {
  const content = {
    headline: "Full kontroll över ditt försäkringsärende.",
    subtext:
      "Clamea samlar allt på ett ställe och gör processen enkel att följa.",
    tidigare: {
      title: "Tidigare",
      items: [
        "Oklart vilka ersättningar du har rätt till", // Updated & Top
        "Svårt att förstå försäkringsvillkoren",
      ],
    },
    medClamea: {
      title: "Med Clamea",
      items: [
        "Tydlig bild av vilka ersättningar du kan ha rätt till", // Updated & Top
        "Dokument samlade och organiserade",
        "Tydlig vägledning och påminnelser",
      ],
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1AA9F4] to-[#004C92] py-24 md:py-40 text-white">
      {/* Hero Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-32 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
            {content.headline}
          </h2>
          <p className="text-xl md:text-2xl text-blue-50/80 font-medium">
            {content.subtext}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* LEFT: Tidigare – Subtle separation, visually "weaker" */}
          <div className="lg:col-span-2 space-y-8 opacity-60 border border-white/10 bg-white/5 p-6 rounded-2xl">
            <h3 className="text-sm uppercase tracking-widest font-bold text-blue-100">
              {content.tidigare.title}
            </h3>
            <ul className="space-y-6">
              {content.tidigare.items.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0 text-red-200"
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
                  <span className="text-lg font-medium text-blue-50 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Med Clamea – Bold, prominent card style */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-12">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-sm font-black uppercase tracking-widest text-blue-600">
                  {content.medClamea.title}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
                <ul className="space-y-10">
                  {content.medClamea.items.map((item, idx) => (
                    <li key={idx} className="flex gap-6 items-center">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#004C92] flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xl md:text-3xl font-black text-[#004C92] tracking-tight leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClameaValue;
