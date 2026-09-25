import { BasicTypes } from './typescript/BasicTypes'
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
        <span>Yo-Palabras de Vida 60%</span><span>FamEH</span><span>FamExtEH</span><span>Ellos-Medido N40%</span>
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
  
        <span>Div-RVDiosJ Porque? Felicidad Video</span><span>Motivar Cristo</span><span>QQ</span><span>Ellos-Espiritu</span>
        <span>Div-EntenderContexto</span><span>EntEscrituras</span><span>My Info</span><span>Ellos-Info</span>
        <span>Sim-PruebaRap</span><span>Ayudar</span><span>Practicar</span><span>Ellos-Lugares</span>
        <span>Sim-RutAutoHabitos</span><span>AyudarRutAuto</span><span>RutAuto</span><span>Ellos-RutAuto</span>

    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-Lider Porque? AmistadAmor Video</span><span>Motivar Cristo</span><span>QQ</span><span>Ellos-Espiritu</span>
        <span>Div-EntenderContexto</span><span>EntEscrituras</span><span>My Info</span><span>Ellos-Info</span>
        <span>Sim-PruebaRap</span><span>Noches Hogar (Actividades) </span><span>Practicar</span><span>Ellos-Lugares</span>
        <span>Sim-RutAutoHabitos</span><span>AyudarRutAuto</span><span>RutAuto</span><span>Ellos-RutAuto</span>        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RInvAde Porque? Libertad Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA (Master)</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-REsp Porque? Gratitud Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA (Espe)</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RMund Porque? Entreten Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
        
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RInv Porque? Prod Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RTec Porque? Herramientas Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>

    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RSal Porque? Funcionalidad6 Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <span>Div-RDep Porque? Seguridad Video</span><span>Motivar Bueno</span><span>QQ</span><span>Ellos-3Productos</span>
        <span>Div-EntenderContex-IA</span><span>PlanInnovLog</span><span>My Info</span><span>Ellos-Servicios</span>
        <span>Sim-PruebaRap</span><span>Demo</span><span>Probar</span><span>Ellos-Reparaciones</span>
        <span>Sim-RutAutoRobots</span><span>Suministro</span><span>RutAuto</span><span>Ellos-Empleo</span>
    <hr style={{ gridColumn: '1 / -1', width: '100%', border: '0', borderTop: '1px solid #ccc', margin: '10px 0' }} />

    Vertical - Espiral
      </div>
    </div>
        <BasicTypes />
      </>
  )
}

export default App
