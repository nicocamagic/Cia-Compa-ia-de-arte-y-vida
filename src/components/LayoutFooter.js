import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          CÍA - Compañía de Arte y Vida © 2023. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Redes Sociales
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;