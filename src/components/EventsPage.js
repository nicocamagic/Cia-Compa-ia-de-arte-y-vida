import React from 'react';

const EventsPage = ({ events, onSelectEvent }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 pb-10">
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Próximos Eventos
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          No te pierdas la oportunidad de vivir la magia de CÍA en vivo. ¡Consulta nuestras próximas presentaciones!
        </p>
      </section>

      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Fecha:</span> {event.date}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Hora:</span> {event.time}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Lugar:</span> {event.location}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button
                    onClick={() => onSelectEvent(event)} // Al hacer clic, selecciona el evento
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600 col-span-full">
              No hay eventos próximos. ¡Mantente al tanto!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;