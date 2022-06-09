import React, { useState, useTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavRoot from './components/navigationBar/NavRoot';
import ChartRoot from './components/charts/ChartRoot';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';
import ProductListContext from './components/context/ProductListContext';
import { product_list } from './productList';


function App() {

  const [productList, setProductList] = useState(product_list);

  const [rootData, setRootData] = useState({
    products: productList,
    searchedText: '',
  })


  return (
    <div className="App">
      <ProductListContext.Provider value={{rootData, setRootData}}>
        <NavRoot />
        <ChartRoot />
        <ProductList />
        <Footer />
      </ProductListContext.Provider>
    </div>
  );
}

export default App;
