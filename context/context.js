import React, {createContext,useState, useEffect} from 'react';
import useWindowDimensions from './useWindowDimensions';
import apiProducts from '../helpers/apiProducts';

const api = new apiProducts();
const ProductsContext = createContext();

const Context = ({children}) => {

  const [ showForm, setShowForm] = useState(false);
  const [ sum, setSum ] = useState(0);
  const { width } = useWindowDimensions();
  const [ products, setProducts ] = useState([]);
  const [ favorites, setFvorites ] = useState([]);
  const [ desktop, setDesctop ] = useState(true);
  const [ funcCategories, setFuncCategories ] = useState([]);
  const [ categories, setCategories] = useState([]);
  const [ basketShow, setShow] = useState(false);
  const [ home, setHome ] = useState(null);

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
    const count = products.reduce((sum, item) => sum + item.price * item.count , 0)
    setSum(count);
  }, [products]);

  useEffect(() => {
    api.getFunctionCategories().then(funcCategories => {
      setFuncCategories(funcCategories);
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

  useEffect(() => { api.getHome().then( home => setHome(home))}, []);

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
      categories,
      home
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { Context, ProductsContext };