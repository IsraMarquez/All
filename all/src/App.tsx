//import { BasicTypes } from './typescript/BasicTypes'
//import { ObjectLiterals } from './typescript/ObjectLiterals'
import RVDJ from './assets/sprites/Abuelo.png';
import FAMEH from './assets/sprites/Matrimonio.jpeg';
import RInvAde from './assets/sprites/RInvAde.jpg';
import REnt from './assets/sprites/Feliz.jpeg';
import RMun from './assets/sprites/Viajar.jpeg';
import RInv from './assets/sprites/Educacion.jpg';
import RTec from './assets/sprites/Tec.jpg';
import RSal from './assets/sprites/Comida.jpeg';
import RDep from './assets/sprites/Army.jpg';
import './App.css'

function App() {

  return (
      <>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {/* El contenedor está centrado, pero sus columnas alinean a la izquierda */}
      <div style={{ 
        display: 'grid', 
        textAlign: 'left',
        gridTemplateColumns: '300px 150px 150px 300px', // Tamaño de cada "columna" de texto
        gap: '10px' 
      }}>
        <span>Horizontal </span><span> Mayor tiempo  </span><span> posible (niños)</span><span> </span>
        <span>Para Mi-Palabras de Vida 60% </span><span>FamEH</span><span>FamExtEH</span><span>Ellos-Medido N40%</span>        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
  
        <span><td><button type = "button" style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RVDJ} alt="Div-RVDiosJ Porque? Felicidad Video" style={{ width: '50px', height: '50px' }} />
            </button></td></span><span>Motivar Cristo</span><span>QQ</span><span>Ellos-Espiritu</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex</button></td></span><span>EntEscrituras</span><span>My Info</span><span>Ellos-Info</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Ayudar</span><span>Practicar</span><span>Ellos-Lugares</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoHabitos</span><span>AyudarRutAuto</span><span>RutAuto</span><span>Ellos-RutAuto</span>

    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'purple', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={FAMEH} alt="Div-Lider Porque? AmistadAmor Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Cristo</span><span>QQ</span><span>Ellos-Espiritu</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex</button></td></span><span>EntEscrituras</span><span>My Info</span><span>Ellos-Info</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Noches Hogar (Actividades) </span><span>Practicar</span><span>Ellos-Lugares</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoHabitos</span><span>AyudarRutAuto</span><span>RutAuto</span><span>Ellos-RutAuto</span>        
    
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'purple', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInvAde} alt="Div-RInvAde Porque? Libertad Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Master)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'red', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={REnt} alt="Div-REsp Porque? Gratitud Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Espe)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>        
    
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'red', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RMun} alt="Div-RMund Porque? Entreten Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Espe)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RInv} alt="Div-RInv Porque? Prod Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Lic/Ing)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RTec} alt="Div-RTec Porque? Herramientas Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Lic/Ing)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>

    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RSal} alt="Div-RSal Porque? Funcionalidad6 Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Cur)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">
            <img src={RDep} alt="Div-RDep Porque? Seguridad Video" style={{ width: '50px', height: '50px' }} /></button></td></span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span><td><button type = "button" style={{ backgroundColor: 'yellow', color: 'black' }} className="btn btn-secondary btn-sm">Div-PreEntContex-IA (Cur)</button></td></span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span><td><button type = "button" style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-secondary btn-sm">Sim-ProPruebaRapAde</button></td></span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span style={{ color: 'green' }}>Sim-PostRutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

    Vertical - Espiral - Varias veces al día
      </div>
    </div>
        {/*<BasicTypes />*/}
        {/*<ObjectLiterals />*/}
      </>
  )
}

export default App
