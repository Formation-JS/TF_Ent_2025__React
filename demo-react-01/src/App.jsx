import './App.css'
import DemoComunication from './components/DemoComunication/DemoComunication';
import DemoState from './components/DemoState/DemoState';
import Horloge from './components/Horloge/Horloge';
import PersonnageTable from './components/PersonnageTable/PersonnageTable'
import Welcome from './components/Welcome/Welcome'
import data from './data/personnage.json';

function App() {

  return (
    <>
      <h1>Demo 01</h1>
      {/* <Welcome name={'Della'} age={35} /> */}
      {/* <PersonnageTable personnages={data} /> */}
      {/* <DemoState /> */}

      <DemoComunication />
      <Horloge />
    </>
  )
}

export default App
