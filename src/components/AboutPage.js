import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20 pb-10">
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Nuestra Historia, Nuestra Pasión
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          En CÍA, creemos en el poder transformador del arte de los títeres.
          Desde 1995, hemos dedicado nuestra vida a dar voz y movimiento a
          personajes que inspiran y entretienen.
        </p>
      </section>

      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Llevar el arte de los títeres a cada rincón, fomentando la
              imaginación, la reflexión y la conexión humana a través de
              historias originales y puestas en escena innovadoras.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Buscamos inspirar a nuevas generaciones de artistas y amantes del
              teatro, manteniendo viva una tradición milenaria con un toque
              contemporáneo.
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-600 text-xl font-semibold">
            [Imagen de la compañía o títeres]
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;