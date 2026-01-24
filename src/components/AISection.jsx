import React from "react";
import aiImg from "../assets/aichat.png";

const AISection = () => {
  return (
    <section className="bg-gradient-to-b from-[#004C92] to-[#1AA9F4] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="title text-white">
              AI som guidar dig <br className="hidden md:block" />
              hela vägen
            </h2>

            <p className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Få raka svar på dina frågor och tydlig vägledning i ditt ärende –
              direkt i appen, när du behöver det.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-6 text-left max-w-lg mx-auto lg:mx-0">
              {[
                "Förklarar försäkringsvillkor på enkel svenska",
                "Hjälper dig förstå vilka ersättningar du kan ha rätt till",
                "Påminner och guidar dig genom processen",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-white flex items-center justify-center shadow-md">
                    <svg
                      className="w-3.5 h-3.5 text-[#004C92]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-white font-semibold tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Samsung Galaxy S24 Ultra Mockup */}
          <div className="flex-1 w-full max-w-md lg:max-w-full relative flex justify-center">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-white/20 blur-[90px] rounded-full pointer-events-none"></div>

            {/* S24 Ultra Frame: Distinctive boxy shape with sharp corners */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[7px] rounded-[1.5rem] h-[640px] w-[310px] shadow-2xl flex flex-col z-10">
              {/* Buttons (Right Side Only - S24 Layout) */}
              {/* Volume Rocker */}
              <div className="h-[70px] w-[3px] bg-gray-800 absolute -right-[10px] top-[100px] rounded-r-md shadow-sm"></div>
              {/* Power Button */}
              <div className="h-[40px] w-[3px] bg-gray-800 absolute -right-[10px] top-[190px] rounded-r-md shadow-sm"></div>

              {/* Screen Area: Tight corners to match the Ultra aesthetic */}
              <div className="rounded-[1rem] overflow-hidden w-full h-full bg-white relative">
                {/* Punch-hole Camera (Infinity-O Display) */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-20 ring-1 ring-gray-800"></div>

                {/* The Image */}
                <img
                  src={aiImg}
                  alt="AI Chat Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
