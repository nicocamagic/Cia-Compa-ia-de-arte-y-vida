import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // ¡Nuevas credenciales!
    // Usuario: Admin
    // Contraseña: Titeres
    if (username === 'Admin' && password === 'Titeres') {
      onLogin(true);
    } else {
      setError('Usuario o contraseña incorrectos. ¡Intenta de nuevo, campeón!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20 pb-10">
      <section className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Acceso al Panel de Administración
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
          >
            Iniciar Sesión
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminLogin;