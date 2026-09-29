import { useNavigate } from 'react-router-dom';

export const RInvAdeParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Autosuficiente (InvAde-AhoNeg-RInv)
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
