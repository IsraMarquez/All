import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const UbicacionContext = createContext();

// 2. Crear el Proveedor (Provider)
export const UbicacionProvider = ({ children }) => {
  // Variable global con su función para actualizarla
  const [ubicacion, setUbicacion] = useState('http://192.168.100.90:3000');

  const cambiarUbicacion = (nuevaUbicacion) => {
    setUbicacion(nuevaUbicacion);
  };

  return (
    <UbicacionContext.Provider value={{ ubicacion, cambiarUbicacion }}>
      {children}
    </UbicacionContext.Provider>
  );
};

// 3. Hook personalizado para consumir la variable fácilmente
export const useUbicacion = () => useContext(UbicacionContext);
