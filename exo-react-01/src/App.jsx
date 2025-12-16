import './App.css'
import ProductList from './components/ProductList/ProductList'
import Header from './ui/Header/Header'
import productData from './data/product.json';
import Compteur from './components/Compteur/Compteur';
import CalculatriceV1 from './components/Calculatrice/Calculatrice-v1';
import CalculatriceV2 from './components/Calculatrice/Calculatrice-v2';

function App() {

  return (
    <>
      <Header />
      <main>
        {/* Exercice 02 - Liste de produit */}
        {/* <ProductList title={'Liste de produit d\'exemple'} products={productData} /> */}
      
        {/* Exercice 03 - Le compteur (State) */}
        {/* <Compteur />
        <Compteur step={5} /> */}

        {/* Exercice 04 - Les formulaires */}
        <CalculatriceV1 />
        <hr />
        <CalculatriceV2 />
      </main>
    </>
  )
}

export default App
