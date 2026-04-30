const giftInfo = {
  title: "Lluvia de Sobres",
  messages: [
    "Gracias por su cariño, su apoyo y su presencia.",
    "Contaremos con un buzón en la boda en el que podrán depositar en un sobre su regalo en efectivo.",
    "Por favor, no olviden añadir una tarjeta con sus deseos para nuestro matrimonio.",
  ],
  finalMessage: "¡Será el mejor regalo!",
  animation: "fade-up",
};

const Gift = () => {
  return (
    <section
      className="py-24 bg-dark-secondary text-white px-4 text-center"
      data-aos={giftInfo.animation}
      data-aos-delay="500"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl mb-12 italic text-gold">
          {giftInfo.title}
        </h2>

        <div className="bg-black p-12 border border-gold/30 shadow-2xl">

          {giftInfo.messages.map((message, index) => (
            <p
              key={index}
              className="font-light opacity-80 tracking-wide leading-relaxed px-2 italic serif text-lg mb-6"
            >
              {message}
            </p>
          ))}

          <div className="w-20 h-px bg-gold mx-auto mb-6"></div>

          <h3 className="text-2xl md:text-3xl italic serif text-gold">
            {giftInfo.finalMessage}
          </h3>

        </div>
      </div>
    </section>
  );
};

export default Gift;