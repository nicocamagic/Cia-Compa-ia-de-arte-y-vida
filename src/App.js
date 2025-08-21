import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import EventDetailPage from './components/EventDetailPage'; // Importar la página de detalles
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import ContactPage from './components/ContactPage';
import { defaultEvents } from './mock/events';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [events, setEvents] = useState(() => {
    // Intentar cargar eventos desde localStorage al inicio
    const savedEvents = localStorage.getItem('cia_events');
    return savedEvents ? JSON.parse(savedEvents) : defaultEvents;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Nuevo estado para el evento seleccionado

  // Guardar eventos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('cia_events', JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    if (status) {
      setCurrentPage('admin');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentPage('eventDetail'); // Cambiar a la página de detalles
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
    setCurrentPage('events'); // Volver a la lista de eventos
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage events={events} onSelectEvent={handleSelectEvent} />;
      case 'eventDetail':
        return <EventDetailPage event={selectedEvent} onBack={handleBackToEvents} />;
      case 'admin':
        return isLoggedIn ? (
          <AdminPanel
            addEvent={addEvent}
            events={events}
            deleteEvent={deleteEvent}
            updateEvent={updateEvent}
          />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LayoutHeader setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
}

export default App;