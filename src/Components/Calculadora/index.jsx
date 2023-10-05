import React, { useState } from 'react';

function CalcularPrecios() {
  const [cpOrigen, setCpOrigen] = useState(''); // Estado para cpOrigen
  const [cpDestino, setCpDestino] = useState(''); // Estado para cpDestino
  const [provOrigen, setProvOrigen] = useState(''); // Estado para cpDestino
  const [provDestino, setProvDestino] = useState(''); // Estado para cpDestino
  const [peso, setPeso] = useState(''); // Estado para cpDestino
  const [result, setResult] = useState(null); // Estado para almacenar el resultado de la API

  const apiUrl = 'https://correo-argentino1.p.rapidapi.com/calcularPrecio';

  const handleCalculate = async () => {
    // Construye la URL de la API con los valores ingresados
    const url = `${apiUrl}?cpOrigen=${cpOrigen}&cpDestino=${cpDestino}&provinciaOrigen=${provOrigen}&provinciaDestino=${provDestino}&peso=${peso}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3b792e66d6mshe5ebed5fd43341bp157a0fjsnf287ad573c54',
          'X-RapidAPI-Host': 'correo-argentino1.p.rapidapi.com',
        },
      });
      const resultText = await response.text();
      setResult(resultText);
    } catch (error) {
      console.error(error);
    }
  };


  function parseResult(result) {
    try {
      return JSON.parse(result);
    } catch (error) {
      console.error('Error al analizar el resultado JSON:', error);
      return {};
    }
  }

  return (
    <div>
      <h1>Calcular Precio</h1>
      <div>
        <label>Código Postal Origen:</label>
        <input
          type="text"
          value={cpOrigen}
          onChange={(e) => setCpOrigen(e.target.value)}
        />
      </div>
      <div>
        <label>Código Postal Destino:</label>
        <input
          type="text"
          value={cpDestino}
          onChange={(e) => setCpDestino(e.target.value)}
        />
      </div>

      <div>
        <label>Provincia Origen:</label>
        <select
          value={provOrigen}
          onChange={(e) => setProvOrigen(e.target.value)}
        >
          <option value="">Selecciona una provincia</option>
          <option value="AR-B">Buenos Aires</option>
          <option value="AR-K">Catamarca</option>
          <option value="AR-H">Chaco</option>
          <option value="AR-U">Chubut</option>
          <option value="AR-X">Córdoba</option>
          <option value="AR-W">Corrientes</option>
          <option value="AR-E">Entre Ríos</option>
          <option value="AR-P">Formosa</option>
          <option value="AR-Y">Jujuy</option>
          <option value="AR-L">La Pampa</option>
          <option value="AR-F">La Rioja</option>
          <option value="AR-M">Mendoza</option>
          <option value="AR-N">Misiones</option>
          <option value="AR-Q">Neuquén</option>
          <option value="AR-R">Río Negro</option>
          <option value="AR-A">Salta</option>
          <option value="AR-J">San Juan</option>
          <option value="AR-D">San Luis</option>
          <option value="AR-Z">Santa Cruz</option>
          <option value="AR-S">Santa Fe</option>
          <option value="AR-G">Santiago del Estero</option>
          <option value="AR-V">Tierra del Fuego</option>
          <option value="AR-T">Tucumán</option>
        </select>
      </div>

      <div>
        <label>Provincia Destino:</label>
        <select
          value={provDestino}
          onChange={(e) => setProvDestino(e.target.value)}
        >
          <option value="">Selecciona una provincia</option>
          <option value="AR-B">Buenos Aires</option>
          <option value="AR-K">Catamarca</option>
          <option value="AR-H">Chaco</option>
          <option value="AR-U">Chubut</option>
          <option value="AR-X">Córdoba</option>
          <option value="AR-W">Corrientes</option>
          <option value="AR-E">Entre Ríos</option>
          <option value="AR-P">Formosa</option>
          <option value="AR-Y">Jujuy</option>
          <option value="AR-L">La Pampa</option>
          <option value="AR-F">La Rioja</option>
          <option value="AR-M">Mendoza</option>
          <option value="AR-N">Misiones</option>
          <option value="AR-Q">Neuquén</option>
          <option value="AR-R">Río Negro</option>
          <option value="AR-A">Salta</option>
          <option value="AR-J">San Juan</option>
          <option value="AR-D">San Luis</option>
          <option value="AR-Z">Santa Cruz</option>
          <option value="AR-S">Santa Fe</option>
          <option value="AR-G">Santiago del Estero</option>
          <option value="AR-V">Tierra del Fuego</option>
          <option value="AR-T">Tucumán</option>
        </select>
      </div>

      <div>
        <label>Peso en kg:</label>
        <input
            type="number"  
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            step="0.01"  
            pattern="[0-9]+([\.,][0-9]+)?"  // Acepta números enteros y decimales con punto o coma
        />
    </div>

      <button onClick={handleCalculate}>Calcular</button>
      {result && (
     <div>
        <h2>Resultado:</h2>
        <p>Sucursal: ${parseResult(result).paqarClasico.aSucursal}</p>
        <p>Domicilio: ${parseResult(result).paqarClasico.aDomicilio}</p>
     </div>
)}
    </div>
  );



}

export default CalcularPrecios;