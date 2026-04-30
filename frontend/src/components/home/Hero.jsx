import useCountdown from "../../hooks/useCountdown";

function Hero() {
  const timeLeft = useCountdown();

  const scrollToRSVP = () => {
    document
      .getElementById("rsvp")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  
  const isWeddingDay =
  timeLeft.days === "00" &&
  timeLeft.hours === "00" &&
  timeLeft.minutes === "00" &&
  timeLeft.seconds === "00";

  return (
    <header className="hero-bg h-screen flex flex-col items-center justify-center text-center px-4" data-aos="fade" data-aos-delay="300">

      <h2 className="text-lg uppercase tracking-[0.5em] mb-6 text-gold">
        Unimos nuestras vidas
      </h2>
      <h1 className="text-5xl md:text-8xl italic text-gold mb-8">
        Guadalupe
        <span className="block md:inline md:mx-4">&</span>
        Eduardo
      </h1>
      <div className="flex gap-6 mb-8 items-center">
        <div className="w-12 md:w-24 h-px bg-gold"></div>
        <span className="text-gold">
          28.11.2026
        </span>
        <div className="w-12 md:w-24 h-px bg-gold"></div>
      </div>

      {isWeddingDay ?(
        <h3 className="text-4xl md:text-6xl italic text-gold mb-8">
          Llegó el gran día
        </h3>)
      :( 
      <div className="flex gap-6 border-y border-white/10 py-6 px-4 text-gold">
        <div>
          <span className="text-3xl md:text-5xl block">
            {timeLeft.days}
          </span>
          <small>Días</small>
        </div>

        <div>
          <span className="text-3xl md:text-5xl block">
            {timeLeft.hours}
          </span>
          <small>Hrs</small>
        </div>

        <div>
          <span className="text-3xl md:text-5xl block">
            {timeLeft.minutes}
          </span>
          <small>Min</small>
        </div>

        <div>
          <span className="text-3xl md:text-5xl block">
            {timeLeft.seconds}
          </span>
          <small>Seg</small>
        </div>
      </div>
      )}

      <button
        onClick={scrollToRSVP}
        className="mt-10 px-10 py-4 border border-gold text-gold transition duration-500 ease-in-out hover:border-white hover:text-white hover:"
      >
        Confirmar Asistencia
      </button>
    </header>
  );
}

export default Hero;