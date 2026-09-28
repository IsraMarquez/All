import { useNavigate } from 'react-router-dom';
import miPdf from '../../assets/pdf/RC.pdf';

export const RVDJEllos = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Llamamiento (Gloria Celestial)
        <br/>
        <iframe src={miPdf} width="100%" height="600px" title="PDF" />
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
