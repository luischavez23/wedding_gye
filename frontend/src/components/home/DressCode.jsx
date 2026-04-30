import dressCodeIcon from "../../assets/dress-code.svg";

const dressCodeInfo = {
  title: "Código de Vestimenta",
  subtitle: "Ayúdanos a crear una atmósfera única",
  dressCode: "Dress Code: All Black",
  description:
    "Nuestra paleta de color eres tú: Viste de negro para celebrar nuestro amor",
  animation: "zoom-in-up",
};

const DressCode = () => {
  return (
    <section
      className="py-24 px-4 bg-dark-primary"
      data-aos={dressCodeInfo.animation}
      data-aos-delay="500"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl mb-12 italic text-gold">
          {dressCodeInfo.title}
        </h2>

        <div className="bg-dark-soft p-10 border border-gold/20 shadow-xl">

          <p className="font-light opacity-80 mb-5 tracking-wide leading-relaxed px-6 italic serif text-lg">
            {dressCodeInfo.subtitle}
          </p>

          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
            <img
              src={dressCodeIcon}
              alt="Dress Code"
              className="w-10 h-10"
            />
          </div>

          <h3 className="text-3xl md:text-4xl serif italic text-gold mb-5">
            {dressCodeInfo.dressCode}
          </h3>

          <p className="text-sm opacity-70 font-light leading-relaxed">
            {dressCodeInfo.description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default DressCode;