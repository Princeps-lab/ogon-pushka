import React, {createContext,useState, useEffect} from 'react';
import useWindowDimensions from './useWindowDimensions';
import apiProducts from '../api/apiProducts';

const api = new apiProducts();
const ProductsContext = createContext();

const Context = ({children}) => {

  const [ showForm, setShowForm] = useState(false);
  const [ sum, setSum ] = useState(0);
  const { width } = useWindowDimensions();
  const [ products, setProducts ] = useState([]);
  const [ favorites, setFvorites ] = useState([]);
  const [ desktop, setDesctop ] = useState(false);
  const [ funcCategories, setFuncCategories ] = useState([]);
  const [ allProducts, setAllProducts ] = useState([]);
  const [ categories, setCategories] = useState([]);
  const [basketShow, setShow] = useState(false);

  const addProduct = (product) => {
    const arr = products.filter(item => product.id !== item.id);
    const arrLocals = JSON.stringify([...arr, product]);
    localStorage.products = arrLocals;
    setProducts([...arr, product]);
  };

  const deleteProduct = (id) => {
    const newArr = products.filter(item => item.id !== id);
    setProducts([...newArr]);
    localStorage.products = JSON.stringify(newArr);
  }

  const addFavor = (product) => {
    const arr = favorites.filter(item => product.id !== item.id);
    const arrLocals = JSON.stringify([...arr, product]);
    localStorage.favorites = arrLocals;
    setFvorites([...arr, product]);
  };

  const deleteFavor = (id) => {
    const newArr = favorites.filter(item => item.id !== id);
    setFvorites([...newArr]);
    localStorage.favorites = JSON.stringify(newArr);
  };

  const deleteAll = () => {
    setProducts([]);
    localStorage.products = '';
  };

  useEffect(() => {
    width > 599 ? setDesctop(true) : setDesctop(false);
  }, [width]);

  useEffect(() => {
    const count = products.reduce((sum, item) => sum + item.price, 0)
    setSum(count);
  }, [products]);

  useEffect(() => {
    api.getFunctionCategories().then(funcCategories => {
      setFuncCategories(funcCategories);
    });
  }, []);

  useEffect(() => {
    api.getProducts().then(products => {
      setAllProducts(products);
    });
  }, []);

  useEffect(() => {
    api.getCategories().then(categories => {
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    setProducts(localStorage.products ? JSON.parse(localStorage.products) : []);
  }, []);

  useEffect(() => {
    setFvorites(localStorage.favorites ? JSON.parse(localStorage.favorites) : []);
  }, []);


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
      sum,
      setSum,
      showForm,
      setShowForm,
      funcCategories,
      allProducts,
      categories
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { Context, ProductsContext };