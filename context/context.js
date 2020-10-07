import React, {createContext,useState, useEffect} from 'react';
import useWindowDimensions from './useWindowDimensions';
import apiProducts from '../api/apiProducts';

const api = new apiProducts();
const ProductsContext = createContext();

const Context = ({children}) => {

  const [showForm, setShowForm] = useState(false);
  const [ sum, setSum ] = useState(0);
  const { width } = useWindowDimensions();
  const [ products, setProducts ] = useState([]);
  const [ favorites, setFvorites ] = useState([]);
  const [ desktop, setDesctop ] = useState(false);
  const [ funcCategories, setFuncCategories ] = useState([]);
  const [ allProducts, setAllProducts ] = useState([]);
  const [ categories, setCategories] = useState([]);


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
      console.log(products);
    });
  }, []);

  useEffect(() => {
    api.getCategories().then(categories => {
      setCategories(categories);
      console.log(categories)
    });
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