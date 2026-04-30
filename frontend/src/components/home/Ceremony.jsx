import iglesiaIcon from "../../assets/iglesia.svg";
import bodaIcon from "../../assets/arco-de-boda.svg";

const eventList = [
  {
    id: 1,
    title: "La Ceremonia",
    time: "18:00 Horas",
    place: "Parroquia de San Francisco de Asis",
    address: [
      "Calle 5 de Mayo SN, C.P. 45100",
      "Tesistan, Zapopan",
    ],
    map: "https://www.google.com/maps/place/Parroquia+San+Francisco+de+Asis/@20.7987391,-103.4761872,17z/data=!3m1!4b1!4m6!3m5!1s0x8428a6f4fe4478a5:0xad98af2650bdcddf!8m2!3d20.7987391!4d-103.4761872!16s%2Fg%2F11bz4s09g4?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
    icon: iglesiaIcon,
    animation: "fade-right",
  },
  {
    id: 2,
    title: "La Recepción",
    time: "20:00 Horas",
    place: "Quinta los Capulines",
    address: [
      "Calle Hidalgo 503, C.P. 45200",
      "Tesistan, Zapopan",
    ],
    map: "https://www.google.com/maps/place/Terraza%2FSal%C3%B3n+para+eventos+QUINTA+LOS+CAPULINES/@20.7627022,-103.5839883,13z/data=!4m10!1m2!2m1!1squinta+los+capulines+tesistan!3m6!1s0x8428a7a976e3327d:0xacdd639388a20e19!8m2!3d20.7997447!4d-103.4858222!15sCh1xdWludGEgbG9zIGNhcHVsaW5lcyB0ZXNpc3RhblofIh1xdWludGEgbG9zIGNhcHVsaW5lcyB0ZXNpc3RhbpIBFmZ1bmN0aW9uX3Jvb21fZmFjaWxpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTFjWFoyUW5OblJSQULgAQD6AQQIABBK!16s%2Fg%2F11t73klhzb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
    icon: bodaIcon,
    animation: "fade-left",
  },
];

const Ceremony = () => {
  return (
    <section className="py-24 px-4 bg-dark-secondary">
      <div className="max-w-5xl mx-auto">

        <h2
          className="text-4xl md:text-5xl mb-12 italic text-gold text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Ceremonia y Recepción
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {eventList.map((event) => (
            <div
              key={event.id}
              className="text-center p-12 bg-black shadow-2xl border border-gold/20"
              data-aos={event.animation}
              data-aos-delay="500"
            >
              <h3 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6">
                {event.title}
              </h3>

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                <img
                  src={event.icon}
                  alt={event.title}
                  className="w-10 h-10"
                />
              </div>

              <p className="serif text-3xl italic mb-4 text-white">
                {event.time}
              </p>

              <p className="text-white/70 font-light mb-8 italic leading-relaxed">
                {event.place}
                <br />

                {event.address.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <a
                href={event.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] uppercase border-b-2 border-gold pb-1 hover:text-gold transition tracking-widest font-bold"
              >
                Ver Mapa
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ceremony;