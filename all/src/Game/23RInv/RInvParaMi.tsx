import { useNavigate } from 'react-router-dom';

export const RInvParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div>Gestion Talento Humano
        <br/> Educación
        <br/>Proyectos
        <br/>Producto
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
