import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Starta ditt ärende",
      text: "Beskriv kort vad som har hänt och kom igång på några minuter. Clamea hjälper dig att strukturera informationen direkt i appen.",
    },
    {
      id: "02",
      title: "Ladda upp säkert",
      text: "Ladda upp relevanta dokument på ett säkert sätt. Vår AI analyserar innehållet för att identifiera rättigheter, ersättningar och viktiga detaljer.",
    },
    {
      id: "03",
      title: "Följ ditt ärende",
      text: "Följ ditt ärende i realtid med tydlig status, struktur och vägledning direkt i appen.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#004C92] to-[#1AA9F4] py-24 md:py-32 relative overflow-hidden text-white">
      {/* Optional: Subtle Grid Texture for consistency with other sections */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-xs font-black tracking-[0.2em] text-blue-200 uppercase mb-4 block">
            PROCESSEN
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            En enklare väg genom <br className="hidden md:block" />
            försäkringsärendet
          </h2>
        </div>

        {/* Vertical Step Flow */}
        <div className="relative">
          {/* Continuous Vertical Line (Background) - Adjusted to White/20 */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-12 w-0.5 bg-white/20"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 md:gap-16 group">
                {/* Step Marker Column */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  {/* The Number Bubble - Glassmorphic Style */}
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xl md:text-2xl font-black shadow-lg group-hover:bg-white group-hover:text-[#004C92] group-hover:scale-110 transition-all duration-500 z-10">
                    {step.id}
                  </div>
                </div>

                {/* Content Column */}
                <div className="pt-2 md:pt-4 max-w-xl">
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
