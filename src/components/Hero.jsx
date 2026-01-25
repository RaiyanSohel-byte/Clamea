import { texts } from "../lang";
import heroImg from "../assets/heroImg.png";

const Hero = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#004C92] to-[#1AA9F4] pb-20 md:pt-20 md:pb-28 lg:pt-36 lg:pb-52 text-white">
      {/* SVG Grid Overlay - Hidden on very small screens to keep it clean */}
      <div
        className="absolute inset-0 z-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative Glow - Responsive sizing */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-1 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 px-4 md:px-0 lg:hidden">
            <div className="relative group max-w-[500px] mx-auto lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-50 transition duration-1000"></div>
            </div>
          </div>
          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-blue-50">
                Tidigt tillträde
              </span>
            </div>
            {/* Responsive Heading: text-4xl on mobile, text-7xl+ on desktop */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] lg:leading-[0.95] mb-6 md:mb-8">
              Trygg vägledning vid
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white opacity-90">
                skador och ersättning
              </span>
            </h1>
            <p className="text-xs md:text-lg lg:text-xl text-blue-50/80 mb-8 md:mb-12 leading-relaxed max-w-xl font-medium ">
              Clamea använder AI för att guida dig genom ditt försäkringsärende.
              <br /> Du får struktur på dokument, tydliga steg och stöd för att
              förstå vilken ersättning du kan ha rätt till.
            </p>
            {/* Outer Glow */} {/* Main Card */}
            <img
              src={heroImg}
              alt="Platform"
              className="w-[70%] mx-auto md:hidden"
            />
            {/* Buttons: Full width on mobile, auto on tablet+ */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="btn btn-lg w-full sm:w-auto rounded-full bg-white text-[#004C92] hover:bg-blue-50 border-none px-10 md:px-12 h-[56px] md:h-[64px] text-base md:text-lg font-bold shadow-2xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                Ladda ner appen
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals - Adjusted for stacking and mobile sizing */}
          <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 px-4 md:px-0 hidden lg:block">
            <div className="relative group max-w-[500px] mx-auto lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-50 transition duration-1000"></div>

              {/* Main Card */}

              <img
                src={heroImg}
                alt="Platform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
