import './App.css'
import PersonnageTable from './components/PersonnageTable/PersonnageTable'
import Welcome from './components/Welcome/Welcome'
import data from './data/personnage.json';

function App() {

  return (
    <>
      <h1>Demo 01</h1>
      <Welcome name={'Della'} age={35} />
      <PersonnageTable personnages={data} />
    </>
  )
}

export default App
