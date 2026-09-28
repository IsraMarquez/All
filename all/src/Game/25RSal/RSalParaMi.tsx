import { useNavigate } from 'react-router-dom';

export const RSalParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Cocinar (Huerto) (Limpiar60% - Ordenar60%)
        <br/>Casa (Limpiar60% - Ordenar60%)
        <br/>Transporte (Limpiar60% - Ordenar60%)
        <br/>
        <br/>Estilo (Cara) (Limpiar60% - Ordenar60%)
        <br/>Estilo (Ropa Modesta) (Limpiar60% - Ordenar60% - Planchada60%)
        <br/>Estilo (Accesorio) (Limpiar60% - Ordenar60%)
        <br/>
        <br/>Masaje y Salud (Cara) (Limpiar60% - Ordenar60%)
        <br/>Masaje y Salud (Cuerpo) (Limpiar60% - Ordenar60%)
        <br/>Masaje y Salud (Pies) (Limpiar60% - Ordenar60%)
        <br/>
        <br/>ControlPeso (Cardio60% - (Limpiar60% - Ordenar60%)
        <br/>Gym - Preparar - 
        <br/>Kalorias Menos posible) 
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
