import React from 'react';

const LayoutHeader = ({ setCurrentPage, isLoggedIn, onLogout }) => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          CÍA - Compañía de Arte y Vida
        </h1>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
          >
            Inicio
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
          >
            Nosotros
          </button>
          <button
            onClick={() => setCurrentPage('events')}
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
          >
            Eventos
          </button>
          {isLoggedIn ? (
            <>
              <button
                onClick={() => setCurrentPage('admin')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
              >
                Admin
              </button>
              <button
                onClick={onLogout}
                className="text-red-600 hover:text-red-800 transition-colors text-lg"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => setCurrentPage('admin')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Admin
            </button>
          )}
          <button
            onClick={() => setCurrentPage('contact')}
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
          >
            Contacto
          </button>
        </nav>
        <div className="md:hidden">
          {/* Icono de menú para móviles */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;