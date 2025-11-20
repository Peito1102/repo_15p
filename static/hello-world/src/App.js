import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600">
          ¡Hola Forge + Tailwind!
        </h1>
        <p className="mt-4 text-gray-600">
          Mi primera app Custom UI
        </p>
      </div>
    </div>
  );
}

export default App;
