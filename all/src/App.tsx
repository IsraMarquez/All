//import { BasicTypes } from './typescript/BasicTypes'
//import { ObjectLiterals } from './typescript/ObjectLiterals'
import { Inicio } from './Game/Inicio'
import { RVDJParaMi} from './Game/00ARVDJ/RVDJParaMi';
import { RVDJFamEH} from './Game/00ARVDJ/RVDJFamEH';
import { RVDJFamExtEH} from './Game/00ARVDJ/RVDJFamExtEH';
import { RVDJEllos} from './Game/00ARVDJ/RVDJEllos';
import { FAMEHParaMi} from './Game/10FAMEH/FAMEHParaMi';
import { FAMEHFamEH} from './Game/10FAMEH/FAMEHFamEH';
import { FAMEHFamExtEH} from './Game/10FAMEH/FAMEHFamExtEH';
import { FAMEHEllos} from './Game/10FAMEH/FAMEHEllos';
import { RInvAdeParaMi} from './Game/20RInvAde/RInvAdeParaMi';
import { RInvAdeFamEH} from './Game/20RInvAde/RInvAdeFamEH';
import { RInvAdeFamExtEH} from './Game/20RInvAde/RInvAdeFamExtEH';
import { REntParaMi} from './Game/21REnt/REntParaMi';
import { RMunParaMi} from './Game/22RMun/RMunParaMi';
import { RInvParaMi} from './Game/23RInv/RInvParaMi';
import { RTecParaMi} from './Game/24RTec/RTecParaMi';
import { RSalParaMi} from './Game/25RSal/RSalParaMi';
import { RDepParaMi} from './Game/26RDep/RDepParaMi';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
      <>
           {/* Navegación*/}
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/RVDJParaMi" element={<RVDJParaMi />} />
          <Route path="/RVDJFamEH" element={<RVDJFamEH />} />
          <Route path="/RVDJFamExtEH" element={<RVDJFamExtEH />} />
          <Route path="/RVDJEllos" element={<RVDJEllos />} />
          
          <Route path="/FAMEHParaMi" element={<FAMEHParaMi />} />
          <Route path="/FAMEHFamEH" element={<FAMEHFamEH />} />
          <Route path="/FAMEHFamExtEH" element={<FAMEHFamExtEH />} />
          <Route path="/FAMEHEllos" element={<FAMEHEllos />} />
          
          <Route path="/RInvAdeParaMi" element={<RInvAdeParaMi />} />
          <Route path="/RInvAdeFamEH" element={<RInvAdeFamEH />} />
          <Route path="/RInvAdeFamExtEH" element={<RInvAdeFamExtEH />} />
          
          <Route path="/REntParaMi" element={<REntParaMi />} />
          <Route path="/RMunParaMi" element={<RMunParaMi />} />
          <Route path="/RInvParaMi" element={<RInvParaMi />} />
          <Route path="/RTecParaMi" element={<RTecParaMi />} />
          <Route path="/RSalParaMi" element={<RSalParaMi />} />
          <Route path="/RDepParaMi" element={<RDepParaMi />} />
        </Routes>
      </Router>

        {/* <Inicio /> */}
        {/*<BasicTypes />*/}
        {/*<ObjectLiterals />*/}
      </>
  )
}

export default App
