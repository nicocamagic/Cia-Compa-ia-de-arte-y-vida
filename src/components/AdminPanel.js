import React, { useState, useEffect } from 'react';

const AdminPanel = ({ addEvent, events, deleteEvent, updateEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [editingEventId, setEditingEventId] = useState(null); // Estado para saber qué evento se está editando

  // Cargar datos del evento a editar en el formulario
  useEffect(() => {
    if (editingEventId) {
      const eventToEdit = events.find(event => event.id === editingEventId);
      if (eventToEdit) {
        setTitle(eventToEdit.title);
        setDate(eventToEdit.date);
        setTime(eventToEdit.time);
        setLocation(eventToEdit.location);
        setDescription(eventToEdit.description);
        setImage(eventToEdit.image);
      }
    } else {
      // Limpiar formulario si no se está editando
      setTitle('');
      setDate('');
      setTime('');
      setLocation('');
      setDescription('');
      setImage('');
    }
  }, [editingEventId, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !time || !location || !description || !image) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    if (editingEventId) {
      // Actualizar evento existente
      updateEvent({
        id: editingEventId,
        title,
        date,
        time,
        location,
        description,
        image,
      });
      setEditingEventId(null); // Salir del modo edición
    } else {
      // Añadir nuevo evento
      const newEvent = {
        id: Date.now(),
        title,
        date,
        time,
        location,
        description,
        image,
      };
      addEvent(newEvent);
    }
    // Limpiar formulario
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 pb-10">
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Panel de Administración de Eventos
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Aquí puedes añadir, editar y gestionar los eventos para que aparezcan en la página principal.
        </p>
      </section>

      <section className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {editingEventId ? 'Editar Evento' : 'Añadir Nuevo Evento'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
              Título del Evento
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: La Gran Aventura del Títere Valiente"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">
              Fecha
            </label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: 15 de Diciembre, 2023"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-2">
              Hora
            </label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: 18:00 hrs"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">
              Lugar
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: Teatro de la Ciudad, CDMX"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
              placeholder="Una breve descripción del evento..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">
              URL de la Imagen
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: https://via.placeholder.com/400x250"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
          >
            {editingEventId ? 'Actualizar Evento' : 'Añadir Evento'}
          </button>
          {editingEventId && (
            <button
              type="button"
              onClick={() => setEditingEventId(null)}
              className="w-full mt-2 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-lg"
            >
              Cancelar Edición
            </button>
          )}
        </form>
      </section>

      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Eventos Actuales
        </h3>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{event.date} - {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingEventId(event.id)}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No hay eventos para gestionar.</p>
        )}
      </section>
    </div>
  );
};

export default AdminPanel;