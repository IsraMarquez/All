import RVDJ from '../assets/sprites/Abuelo.png';
import FAMEH from '../assets/sprites/Matrimonio.jpeg';
import RInvAde from '../assets/sprites/RInvAde.jpg';
import REnt from '../assets/sprites/Feliz.jpeg';
import RMun from '../assets/sprites/Viajar.jpeg';
import RInv from '../assets/sprites/Educacion.jpg';
import RTec from '../assets/sprites/Tec.jpg';
import RSal from '../assets/sprites/Comida.jpeg';
import RDep from '../assets/sprites/Army.jpg';

import VRVDJ from '../assets/videos/Misional.mp4';
import VFAMEH from '../assets/videos/FamEh.mp4';
import VRIntAde from '../assets/videos/RInvAde.mp4';
import VREnt from '../assets/videos/REntre.mp4';
import VRMun from '../assets/videos/RMun.mp4';
import VRInv from '../assets/videos/RInv.mp4';
import VRTec from '../assets/videos/RTec.mp4';
import VRSal from '../assets/videos/RSal.mp4';
import VRDep from '../assets/videos/RDep.mp4';

import { useRef, type SetStateAction} from 'react';
import { useState } from 'react';

export const Inicio = () =>  {
    // 1. Creamos la referencia para el video
  const videoRef = useRef(null);
    const [videoActual, setVideoActual] = useState(null);

  // 2. Función para reproducir el video
  const manejarReproduccion = (nombreVideo: SetStateAction<string>) => {
    setVideoActual(nombreVideo)
    //console.log(videoActual);
    // 3. Esperamos un milisegundo a que React monte el video y hacemos el scroll suave    

    if (videoRef.current) {
      videoRef.current.play();
      setTimeout(() => {
       videoRef.current.scrollIntoView({ 
          behavior: 'smooth', // 👈 Hace que el movimiento sea animado y suave, no un brinco brusco
          block: 'center'   }); }, 50);  
    }
  };

  return (
    <>
    {videoActual !== null && (
     <div style={{ 
        position: 'fixed',        // Fija el contenedor sobre toda la pantalla
          top: 0,
          left: 0,
          width: '100vw',           // 100% del ancho de la ventana
          height: '100vh',          // 100% del alto de la ventana
          backgroundColor: 'rgba(0, 0, 0, 0.95)', // Fondo oscuro semitransparente muy elegante
          zIndex: 9999,             // Se asegura de estar por encima de ABSOLUTAMENTE todo
          display: 'flex',
          justifyContent: 'center', // Centra el video horizontalmente
          alignItems: 'center',     // Centra el video verticalmente
        // position: 'fixed',      // 1. Lo fija en la pantalla, ignorando el scroll
        //   bottom: '20px',         // 2. Lo separa 20px del borde inferior
        //   right: '20px',          // 3. Lo separa 20px del borde derecho
        //   width: '320px',         // 4. Un tamaño compacto ideal para modo flotante
        //   backgroundColor: '#000', 
        //   borderRadius: '12px',
        //   boxShadow: '0px 10px 25px rgba(0,0,0,0.3)', // Sombra para darle profundidad
        //   overflow: 'hidden',
        //   zIndex: 1000,           // 5. Asegura que se quede por encima de todo lo demás
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center'
        }}>
        {/* textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', width: '100%', maxWidth: '600px', aspectRatio: '16 / 9', overflow: 'hidden' }}>*/}

       {/* BOTÓN PARA CERRAR */}
          <button 
            onClick={() => setVideoActual(null)} // Al dar clic, vacía el estado y se cierra la pantalla
            style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                
                // 1. Dimensiones y forma circular perfecta
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                
                // 2. Colores solicitados
                backgroundColor: '#000000', // Fondo negro
                color: '#FFFFFF',          // X blanca
                
                // 3. Quitar bordes nativos y mejorar el cursor
                border: '1px solid rgba(255, 255, 255, 0.3)', // Un sutil borde blanco para que no se pierda en el fondo oscuro
                cursor: 'pointer',
                
                // 4. Centrado perfecto de la tipografía "X"
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                
                // 5. Efectos visuales profesionales
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease',
            }}
          >
            ✕
          </button>

           {/* video*/}
        <video key={videoActual} ref={videoRef} width="600" controls autoPlay style={{ 
        width: '100%', 
        height: 'auto',       // 3. Forzamos a que la altura dependa del video real
        display: 'block' 
            }}>
            <source src={videoActual} type="video/mp4" />
            Tu navegador no soporta videos.
        </video>      
        <br />
        </div>
    
    )}
        {/* ----------------------TABLA---------------------- */}
        <div style={{ marginBottom: '30px' }}>
            
        {/* Header*/}
        <h2 style={{ textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#b1b1b1' }}>  
            Horizontal - Mayor Tiempo Posible (Niños) 60%
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                {/* Un fondo semitransparente oscuro para que los encabezados se lean bien */}
                <tr style={{color: '#b1b1b1', fontSize: '16px' }}>
                    <th style={{ width: '30%', textAlign: 'left', padding: '8px' }}>Para Mi-Palabras de Vida 60%</th>
                    <th style={{ width: '20%', textAlign: 'left', padding: '8px' }}>FamEH</th>
                    <th style={{ width: '20%', textAlign: 'left', padding: '8px' }}>FamExtEH</th>
                    <th style={{ width: '30%', textAlign: 'left', padding: '8px' }}>Ellos-Medido N40%</th>
                </tr>
                </thead>
            </table>             
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

        {/* Secciones*/}
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          ARVDJ

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRVDJ)} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RVDJ} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Cristo</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-Espiritu</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>EntEscrituras</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Info</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ayudar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Practicar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Lugares</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoHabitos</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>AyudarRutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-RutAuto</td>
                </tr>
            </tbody>
            </table>
        </h2>
        
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          FAMEH

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VFAMEH)} type = "button" style={{ backgroundColor: 'purple', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={FAMEH} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Cristo</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-Espiritu</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>EntEscrituras</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Info</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Noches Hogar (Actividades)</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Practicar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Lugares</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoHabitos</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>AyudarRutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-RutAuto</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RInvAde (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRIntAde)} type = "button" style={{ backgroundColor: 'purple', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInvAde} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Master)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          REnt (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VREnt)} type = "button" style={{ backgroundColor: 'red', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={REnt} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Espe)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RMnd (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRMun)} type = "button" style={{ backgroundColor: 'red', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RMun} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Espe)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RInv (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRInv)} type = "button" style={{ backgroundColor: 'yellow', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInv} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Ing/Lic)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RTec (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRTec)} type = "button" style={{ backgroundColor: 'yellow', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RTec} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Ing/Lic)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RSal (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRSal)} type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RSal} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Cur)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RHab (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={() => manejarReproduccion(VRDep)} type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RDep} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>Motivar Bueno</td>
                <td style={{ width: '20%', padding: '8px', color: '#b1b1b1'}}>QQ</td>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}>Ellos-3Productos</td>
                </tr>
                {/* Renglón 2 (puedes alternar colores o fondos) */}
                <tr >
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContexVertical-IA (Cur)</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>PlanInnovLog</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>My Info</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Servicios</td>
                </tr>
                {/* Renglón 3 */}
                <tr>
                <td style={{padding: '8px', color: '#b1b1b1'}}><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Demo</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Probar</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Reparaciones</td>
                </tr>
                {/* Renglón 4 */}
                <tr>
                <td style={{padding: '8px', color: 'green'}}>Sim-PostRutAutoRobots</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Suministro</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>RutAuto</td>
                <td style={{padding: '8px', color: '#b1b1b1'}}>Ellos-Empleo</td>
                </tr>
            </tbody>
            </table>
        </h2>
        <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        
        <h2 style={{ textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#b1b1b1' }}>  
        Vertical - Espiral - Varias veces al día
        </h2>
        </div>

        {/* ----------------------TABLA---------------------- */}
    </>
  )
}
