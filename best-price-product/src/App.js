import './App.css';
import React, {useState, useEffect} from 'react';
import ProductList from './components/ProductList';
import PricesList from './components/PricesList';

const App = () => {

  const [id_product, changeProduct] = useState(1);

  return (
    <>      
      <div>
        <h1>Products List</h1>
        <ProductList changeProduct={changeProduct}/>       
      </div> 
      <div>
        <h1>Prices List</h1> 
        <PricesList id_product={id_product}/>      
      </div>       
    </>
  )
}

export default App;
