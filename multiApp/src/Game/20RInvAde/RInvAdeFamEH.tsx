import { useNavigate } from 'react-router-dom';

export const RInvAdeFamEH = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Motivar (Publicidad) Bueno - 
        <br/>
        <br/>Plan 
        <br/>Innovación 
        <br/>Logistica - 
        <br/>
        <br/>Demos
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
