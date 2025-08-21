

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner principal */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/333333/FFFFFF?text=C%C3%8DA+Compa%C3%B1%C3%ADa+de+Arte+y+Vida')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            CÍA - Compañía de Arte y Vida
          </h2>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto drop-shadow-md">
            Donde los hilos cobran vida y la imaginación no tiene límites.
            Descubre la magia del teatro de títeres.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 text-xl font-semibold transform hover:scale-105">
            <a href="">Explora Nuestros Espectáculos</a>
          </button>
        </div>
      </section>

      {/* Contenido adicional de la página de inicio */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Nuestra Magia en Escena
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">
              Historias Inolvidables
            </h4>
            <p className="text-gray-700">
              Creamos narrativas que tocan el corazón y la imaginación,
              llevando al público a viajes fantásticos.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">
              Arte en Movimiento
            </h4>
            <p className="text-gray-700">
              Nuestros títeres son obras de arte, meticulosamente diseñados
              para expresar cada emoción.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">
              Experiencias Únicas
            </h4>
            <p className="text-gray-700">
              Cada función es una oportunidad para conectar, reír y soñar
              juntos, creando recuerdos duraderos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;