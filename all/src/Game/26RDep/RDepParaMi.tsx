import { useNavigate } from 'react-router-dom';

export const RDepParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Deportes Equipo
        <br/>Tec Ind (Tiros3 60% - Fintas: Pases/Bote - Coladas (Clavadas)N40%)
        <br/>Army Lejos
        <br/>Def Per (Hab)
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
