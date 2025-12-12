import './App.css'
import ProductList from './components/ProductList/ProductList'
import Header from './ui/Header/Header'
import productData from './data/product.json';

function App() {

  return (
    <>
      <Header />
      <main>
        <ProductList title={'Liste de produit d\'exemple'} products={productData} />
      </main>
    </>
  )
}

export default App
