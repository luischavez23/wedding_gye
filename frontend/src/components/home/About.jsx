

const About = () => {
  return (
     <section className="py-24 px-4 bg-dark-secondary" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-4xl md:text-5xl mb-12 italic text-center text-gold">Nosotros</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
            <div className="text-center">
                <div className="relative inline-block mb-8">
                    <img src="https://images.unsplash.com/photo-1550005814-266497330725?auto=format&fit=crop&q=80&w=400" alt="Eduardo" className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-gold p-1" />
                </div>
                <p className="serif text-xl italic leading-relaxed opacity-90">"Eres el refugio donde paso todas las tormentas y el lugar donde encuentro mi calma y la paz en mi alma."</p>
                <div className="mt-4 h-px w-12 bg-gold mx-auto mb-2"></div>
                <span className="uppercase tracking-widest text-[10px] font-bold text-gold">Eduardo</span>
            </div>
            <div className="text-center">
                <div className="relative inline-block mb-8">
                    <img src="https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=400" alt="Guadalupe" className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-gold p-1" />
                </div>
                <p className="serif text-xl italic leading-relaxed opacity-90">"Eres mi hogar, mi vida y mi amor, contigo nada es fácil pero cada experiencia siempre es lo mejor; en los retos y desafíos has sido mi compañero y mi fuerza...no hay nadie más con quién quiera compartir mi vida."</p>
                <div className="mt-4 h-px w-12 bg-gold mx-auto mb-2"></div>
                <span className="uppercase tracking-widest text-[10px] font-bold text-gold">Guadalupe</span>
            </div>
        </div>
    </section>
  )
}

export default About
