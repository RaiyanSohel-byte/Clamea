import React, { useRef, useEffect } from "react";

const Features = () => {
  const scrollRef = useRef(null);

  const slides = [
    {
      title: "AI som driver ditt ärende framåt",
      text: "Clamea använder AI för att analysera ditt ärende, guida dig rätt och hjälpa dig att inte missa ersättning du har rätt till.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      accent: "from-purple-500/10 to-blue-500/10",
    },
    {
      title: "Förstå vad som faktiskt händer",
      text: "Vi bryter ner komplicerad försäkringsinformation till tydliga steg, så att du alltid vet vad som pågår och vad nästa steg är.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      accent: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "All dokumentation samlad",
      text: "Ladda upp och organisera alla dokument på ett tryggt sätt, utan att tappa bort något viktigt.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      accent: "from-orange-500/10 to-rose-500/10",
    },
    {
      title: "Du slipper hålla koll själv",
      text: "Clamea ser till att viktiga moment inte faller mellan stolarna och hjälper dig hålla processen i rörelse.",
      img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
      accent: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Hantera flera ärenden samtidigt",
      text: "Har du mer än ett försäkringsärende? Clamea ger dig kontroll över alla – i samma vy.",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
      accent: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "Din information är skyddad",
      text: "All data och dokumentation hanteras med hög säkerhet och kryptering på banknivå.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      accent: "from-slate-500/10 to-slate-800/10",
    },
  ];

  // Clone slides for infinite illusion
  const extendedSlides = [...slides, ...slides, ...slides];
  const startIndex = slides.length;

  const getCardWidth = () => {
    if (typeof window === "undefined") return 0;
    return window.innerWidth < 768 ? window.innerWidth * 0.85 + 32 : 480 + 32;
  };

  // Center the scroll position on mount and handle resizing
  useEffect(() => {
    const handleInitialScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = getCardWidth() * startIndex;
      }
    };

    handleInitialScroll();
    window.addEventListener("resize", handleInitialScroll);
    return () => window.removeEventListener("resize", handleInitialScroll);
  }, [startIndex]);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: getCardWidth(),
        behavior: "smooth",
      });
    }
  };

  const handleInfiniteScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = getCardWidth();
    const totalContentWidth = cardWidth * slides.length;

    // Boundary check: If we've scrolled into the third set or back into the first set,
    // snap back to the middle set instantly (no smooth behavior for the jump)
    if (el.scrollLeft >= totalContentWidth * 2) {
      el.scrollLeft = el.scrollLeft - totalContentWidth;
    } else if (el.scrollLeft <= totalContentWidth - cardWidth) {
      el.scrollLeft = el.scrollLeft + totalContentWidth;
    }
  };

  return (
    <section className="relative py-24 md:py-44 bg-[#004C92] overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23fff'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-28">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-center lg:text-left">
            Full kontroll över <br /> ditt ärende.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl">
            Clamea hjälper dig att förstå, följa och driva ditt
            försäkringsärende – utan krångel.
          </p>
        </div>
      </div>

      <div className="relative group">
        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex overflow-x-auto pb-20 pt-4 px-6 md:px-[calc((100vw-1200px)/2)] gap-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[480px] snap-center md:snap-start"
            >
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col h-full group/card transition-all duration-700 hover:-translate-y-4">
                <div className="h-[240px] md:h-[300px] relative overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-1000"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-10 md:p-14 bg-white flex flex-col flex-grow">
                  <h3 className="text-3xl md:text-4xl font-black text-[#004C92] mb-6">
                    {slide.title}
                  </h3>
                  <p className="text-slate-500 text-lg md:text-xl">
                    {slide.text}
                  </p>

                  <div className="mt-auto pt-10 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">
                      Feature 0{(index % slides.length) + 1}
                    </span>

                    <button
                      onClick={scrollNext}
                      className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#004C92] hover:bg-[#004C92] hover:text-white transition-all shadow-sm active:scale-90"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow the last card to align correctly */}
          <div className="flex-shrink-0 hidden md:block w-[10vw]" />
        </div>
      </div>
    </section>
  );
};

export default Features;
