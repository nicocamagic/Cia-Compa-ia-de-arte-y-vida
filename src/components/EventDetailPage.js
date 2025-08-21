import React from 'react';

const EventDetailPage = ({ event, onBack }) => {
  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20 pb-10">
        <h2 className="text-4xl font-bold text-gray-800">Evento no encontrado.</h2>
        <button
          onClick={onBack}
          className="mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Volver a Eventos
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 pb-10">
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Detalles del Evento
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Toda la información que necesitas sobre "{event.title}".
        </p>
      </section>

      <section className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
        <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-xl mb-6" />
        <h3 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h3>
        <p className="text-gray-700 text-lg mb-2">
          <span className="font-semibold">Fecha:</span> {event.date}
        </p>
        <p className="text-gray-700 text-lg mb-2">
          <span className="font-semibold">Hora:</span> {event.time}
        </p>
        <p className="text-gray-700 text-lg mb-4">
          <span className="font-semibold">Lugar:</span> {event.location}
        </p>
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          {event.description}
        </p>
        <button
          onClick={onBack}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Volver a Eventos
        </button>
      </section>
    </div>
  );
};

export default EventDetailPage;