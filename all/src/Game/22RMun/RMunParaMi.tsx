import { useNavigate } from 'react-router-dom';

export const RMunParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Mundo
        <br/>Idiomas
        <br/>Costumbres
        <br/>Arte
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
