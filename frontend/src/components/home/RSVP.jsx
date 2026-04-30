import { useState } from "react";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    attend: "",
    message: "",
  });

  const [lastAttend, setLastAttend] = useState(""); 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-rsvp/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setLastAttend(formData.attend);

        setSuccess(true);

  
        setFormData({
          name: "",
          attend: "",
          message: "",
        });
      } else {
        setError(data.error || "No se pudo enviar la confirmación.");
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al enviar. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-24 px-4 bg-dark-primary"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="max-w-xl mx-auto bg-dark-soft p-12 md:p-20 shadow-2xl border-t-4 border-gold">

        {!success ? (
          <>
            <h2 className="text-4xl text-center mb-4 italic text-gold">
              Confirmar Asistencia
            </h2>

            <p className="text-center mb-12 text-[10px] uppercase tracking-[0.4em] text-white/60">
              Agradecemos tu respuesta antes del 30 de Septiembre
            </p>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Nombre */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent py-3 border-b border-white/10 text-white placeholder:text-white/20 focus:outline-none italic"
                />
              </div>

              {/* Asistencia */}
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  ¿Nos acompañas?
                </label>

                <div className="flex gap-10 flex-col sm:flex-row">
                  <label className="flex items-center cursor-pointer text-sm italic">
                    <input
                      type="radio"
                      name="attend"
                      value="si"
                      checked={formData.attend === "si"}
                      onChange={handleChange}
                      className="mr-3 accent-gold"
                    />
                    Sí, acepto
                  </label>

                  <label className="flex items-center cursor-pointer text-sm italic">
                    <input
                      type="radio"
                      name="attend"
                      value="no"
                      checked={formData.attend === "no"}
                      onChange={handleChange}
                      className="mr-3 accent-gold"
                    />
                    No podré ir
                  </label>
                </div>
              </div>

              {/* Mensaje */}
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  Déjanos un mensaje
                </label>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent py-3 px-3 border border-white/10 text-white placeholder:text-white/20 focus:outline-none italic resize-none"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-custom py-5 tracking-[0.5em] text-[10px] font-bold uppercase shadow-lg"
              >
                {loading ? "Enviando..." : "Enviar mi Confirmación"}
              </button>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-center">
                  {error}
                </p>
              )}
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-3xl md:text-4xl italic text-gold mb-6">
              ✨ Gracias por confirmar
            </h3>

            {lastAttend === "si" ? (
              <>
                <p className="text-white/80 italic mb-6">
                  Nos llena de alegría compartir este momento contigo.
                </p>

                <p className="text-white/70 italic mb-8">
                  Tu presencia será parte de uno de los días más importantes de nuestra vida.
                </p>
              </>
            ) : (
              <>
                <p className="text-white/70 italic mb-6">
                  Lamentamos que no puedas acompañarnos.
                </p>

                <p className="text-white/60 italic mb-8">
                  Aun así, agradecemos mucho tu respuesta.
                </p>
              </>
            )}

            <div className="w-20 h-px bg-gold mx-auto mb-6"></div>

            <p className="text-2xl italic text-gold">
              Guadalupe & Eduardo
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;