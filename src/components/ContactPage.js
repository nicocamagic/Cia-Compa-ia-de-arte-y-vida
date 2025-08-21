import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario (ej. a un backend o servicio de email)
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 pb-10">
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Contáctanos
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? ¡Estamos listos para escucharte!
        </p>
      </section>

      <section className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Envíanos un Mensaje
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Tu Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: Juan Pérez"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Tu Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: tu.correo@ejemplo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: Consulta sobre un espectáculo"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>

      <section className="w-full max-w-3xl mx-auto py-10 px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          O Encuéntranos Aquí
        </h3>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
          <p className="text-lg text-gray-700">
            <strong>Dirección:</strong> Calle de los Títeres #123, Colonia Fantasía, Ciudad Mágica
          </p>
          <p className="text-lg text-gray-700">
            <strong>Teléfono:</strong> +52 55 1234 5678
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> info@ciatiteres.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;