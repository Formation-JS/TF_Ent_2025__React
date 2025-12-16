import './App.css'
import ProductList from './components/ProductList/ProductList'
import Header from './ui/Header/Header'
import productData from './data/product.json';
import Compteur from './components/Compteur/Compteur';

function App() {

  return (
    <>
      <Header />
      <main>
        {/* Exercice 02 - Liste de produit */}
        {/* <ProductList title={'Liste de produit d\'exemple'} products={productData} /> */}
      
        {/* Exercice 03 - Le compteur (State) */}
        <Compteur />
        <Compteur step={5} />
      </main>
    </>
  )
}

export default App
