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
import VFAMEH from '../assets/videos/Misional.mp4';
import VRIntAde from '../assets/videos/FamEh.mp4';
import VREnt from '../assets/videos/Misional.mp4';
import VRMun from '../assets/videos/Misional.mp4';
import VRInv from '../assets/videos/Misional.mp4';
import VRTec from '../assets/videos/Misional.mp4';
import VRSal from '../assets/videos/Misional.mp4';
import VRDep from '../assets/videos/Misional.mp4';

import { useRef } from 'react';

export const Inicio = () =>  {
    // 1. Creamos la referencia para el video
  const videoRef = useRef(null);

  // 2. Función para reproducir el video
  const manejarReproduccion = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 3. Asignamos la referencia al elemento video */}
      <video ref={videoRef} width="600" controls>
        <source src={VRVDJ} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>      
      <br />
    </div>

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
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
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
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
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

        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RInvAde (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInvAde} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
          REnt (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={REnt} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RMnd (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RMun} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RInv (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInv} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RTec (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RTec} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RSal (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RSal} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{  backgroundImage: 'url(${RVDJ})', textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#ffffff' }}>
          RHab (Vertical)

            {/* Subtabla de 4 columnas x 4 renglones */}
            <table style={{tableLayout: 'fixed', textAlign: 'left', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* Renglón 1 con imagen de fondo */}
                <tr>
                <td style={{ width: '30%', padding: '8px', color: '#b1b1b1'}}><button onClick={manejarReproduccion} type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RDep} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
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
        
        <h2 style={{ textAlign: 'left', fontSize: '16px', marginBottom: '10px', color: '#b1b1b1' }}>  
        Vertical - Espiral - Varias veces al día
        </h2>
        </div>

        {/* ----------------------TABLA---------------------- */}
    </>
  )
}
