import React, {createContext,useState, useEffect} from 'react';
import useWindowDimensions from './useWindowDimensions';

const ProductsContext = createContext();

const Context = ({children}) => {

  const { width } = useWindowDimensions();
  const [ products, setProducts ] = useState([]);
  const [ favorites, setFvorites ] = useState([]);
  const [ desktop, setDesctop ] = useState(false);

  const addProduct = (product) => {
    const arr = products.filter(item => product.id !== item.id);
    setProducts([...arr, product]);
  };

  const [basketShow, setShow] = useState(false);

  const deleteProduct = (id) => setProducts(products.filter(item => item.id !== id));

  const addFavor = (product) => {
    const arr = products.filter(item => product.id !== item.id);
    setFvorites([...arr, product]);
  };

  const deleteFavor = (id) => setFvorites(favorites.filter(item => item.id !== id));

  const deleteAll = () => setProducts([]);

  useEffect(() => {
    width > 460 ? setDesctop(true) : setDesctop(false);
  }, [width]);

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
      desktop,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { Context, ProductsContext };