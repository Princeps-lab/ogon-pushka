import React, {createContext,useState} from 'react';
const ProductsContext = createContext();

const Context = ({children}) => {
  const [ products, setProducts ] = useState([]);
  const [ favorites, setFvorites ] = useState([]);

  const addProduct = (product) => setProducts([...products, product]);
  const [basketShow, setShow] = useState(false);
  const deleteProduct = (id) => setProducts(products.filter(item => item.id !== id));

  const addFavor = (product) => setFvorites([...favorites, product]);
  const deleteFavor = (id) => setFvorites(favorites.filter(item => item.id !== id));

  const deleteAll = () => setProducts([]);

  return (
    <ProductsContext.Provider value={{
      products: products,
      addProduct,
      deleteProduct,
      deleteAll,
      basketShow,
      setShow,
      addFavor,
      favorites,
      deleteFavor,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { Context, ProductsContext };