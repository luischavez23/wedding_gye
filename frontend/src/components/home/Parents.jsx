const parentsList = [
  {
    title: "Papás de la Novia",
    names: "Francisca Gil Esparza & Alberto Becerra Torres",
    animation: "fade-right",
  },
  {
    title: "Papás del Novio",
    names: "María Guadalupe Ramírez Mejía & Raúl Correa Arellano",
    animation: "fade-left",
  },
  {
    title: "Padrinos",
    names: "Rosaura Correa Arellano & Moisés Ocegueda Magaña",
    animation: "fade-right",
    fullWidth: true,
  },
];

const Parents = () => {
  return (
    <section className="py-24 px-4 bg-dark-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-12 italic text-gold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Nuestros Padres y Padrinos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {parentsList.map((item, index) => (
            <div
              key={index}
              data-aos={item.animation}
              data-aos-delay="500"
              className={`
                p-10
                border-l-4
                border-gold
                bg-black
                shadow-xl
                ${item.fullWidth ? "md:col-span-2" : "mb-5"}
              `}
            >
              <h3 className="serif text-xl mb-4 tracking-widest uppercase text-gold">
                {item.title}
              </h3>

              <p className="text-lg font-light italic opacity-80">
                {item.names}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parents;