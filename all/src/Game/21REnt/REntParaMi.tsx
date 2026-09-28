import { useNavigate } from 'react-router-dom';

export const REntParaMi = () =>  {
    
      // 1. Inicializas la función de navegación
  const navigate = useNavigate();

  return (
    <div> Diseño Objetivos
        <br/> Narrativa
        <br/> Personajes
        <br/> UX
        <br/> 
        <br/> Redes 
        <br/> Software(IA) (Fisicas, Iluminación, Colisiones, Ciclos)
        <br/> BD
        <br/> VR - AR
        <br/> 
        <br/> Tactil: Mecatronica
        <br/> 
        <br/> Visual: Video:Composición - 
        <br/> Animación3D/2D - 
        <br/> Iluminación:Texturizado/Coloreado - 
        <br/> Modelado/Dibujo
        <br/> 
        <br/> Oido: Múscia - Sonidos
        <br/> 
        <br/> Grusto: -
        <br/> 
        <br/> Olfato: -
        <br/> 
        <br/> Feliz (Pos - 
        <br/>Comedia - 
        <br/>Magia)
        <br/>
        <button onClick={() => navigate(-1)} type = "button" style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-secondary btn-sm">Regresar</button>
    </div>
                
  )
}
