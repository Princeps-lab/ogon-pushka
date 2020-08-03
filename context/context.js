import React, {createContext,useState} from 'react';
const ProductsContext = createContext();

const Context = ({children}) => {
  const [ products, setProducts ] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  } 

  return (
    <ProductsContext.Provider value={{
      products: products,
      addProduct,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { Context, ProductsContext };