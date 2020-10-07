import {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import CatalogItem from '../CatalogItem';
import style from './CatalogContent.module.css';
import { ProductsContext } from '../../context/context.js';
import apiProducts from '../../api/apiProducts';


const apiCategorie = new apiProducts();
const NavItem = ({arr, title}) => {
  return (
    <div>
      <h3 className={style.navTitle}>{title}</h3>
      {arr.map((item) => {
        return (
          <Link
            as={`/catalog/${item.id}`}
            href={`/catalog/[categorieID]`}
            key={item.id}>
            <a>
              <span
              className={style.link}>
              {item.name}</span>
            </a>
          </Link>
        )
      })}
    </div>
  )
};

const CatalogContent = ({idCategorie}) => {
  const store = useContext(ProductsContext);
  const categories = store.funcCategories;
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    console.log(store.categories)
    
    if(store.categories.length) {
      apiCategorie.getCategorie(idCategorie).then(categorie => {
        const arr = categorie.products.map((product) => {
          return (
            <Link
              as={`/product/${product.id}`}
              key={product.id}
              href={'/product/[productId]'}>
              <a onClick={() => localStorage.setItem('parentId', `${product.parentId}`)}>
                <CatalogItem
                textBtn="Купить"
                title={product.title}
                url={product.url} />
              </a>
            </Link>
          )
        });
        setProducts(arr);
      })
    }


  }, [idCategorie, store.categories]);

  return (
    <div className={style.catalog}>
      <div className={style.nav} >
        {
          categories.map(item => {
            return <NavItem
                    arr={item.categories}
                    title={item.name}
                    key={item.id}/>
          })
        }
      </div>

      <div className={style.items} >
        {products}
      </div>
    </div>
  )
}

export default CatalogContent;