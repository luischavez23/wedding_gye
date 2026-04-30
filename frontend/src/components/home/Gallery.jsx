const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 1",
    rotate: "rotate-[-2deg]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 2",
    rotate: "rotate-[2deg]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 3",
    rotate: "rotate-[-1deg]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 4",
    rotate: "rotate-[1deg]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 5",
    rotate: "rotate-[-2deg]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=800",
    alt: "Galería 6",
    rotate: "rotate-[2deg]",
  },
];

const Gallery = () => {
  return (
    <section
      className="py-24 bg-dark-primary text-white px-4 text-center"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl mb-6 italic text-gold">
          Galería
        </h2>

        <p className="font-light opacity-80 mb-16 tracking-wide leading-relaxed px-6 italic serif text-lg">
          Algunos momentos que forman parte de nuestra historia
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group transform transition duration-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className={`
                  bg-white
                  p-3
                  shadow-2xl
                  ${image.rotate}
                  hover:rotate-0
                  transition
                  duration-700
                `}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;