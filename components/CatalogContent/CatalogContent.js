import {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import CatalogItem from '../CatalogItem';
import style from './CatalogContent.module.css';
import { ProductsContext } from '../../context/context.js';
const NavItem = ({arr, title}) => {
  return (
    <div>
      <h3 className={style.navTitle}>{title}</h3>
      {arr.map((item) => {
        return (
          <Link
            passHref
            href={`/catalog/${item.id}`}
            key={item.id}>
            <span className={style.link}>
              {item.name}</span> 
          </Link>
        )
      })}
    </div>
  )
};

const CatalogContent = ({categorie}) => {
  console.log(categorie, 'categorie');
  const store = useContext(ProductsContext);
  const categories = store.funcCategories;
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const reverse = categorie.reverse()
    const arr = reverse ? reverse.map((product) => {
      return (
        <Link
          passHref
          href={`/product/${product.id}`}
          key={product.id}
          onClick={() => localStorage.setItem('parentId', `${categorie.idCategorie}`)}>
            <CatalogItem
              price={product.price}
              textBtn="Купити"
              title={product.title}
              url={ product.featured_image?.formats?.large?.url ?  product.featured_image?.formats?.large?.url : product.featured_image?.url ? product.featured_image?.url : product.images[0].formats.large.url } />
        </Link> 
    )}) : []
    setProducts(arr);
  }, [categorie, store.categories]);

  return (
    <div className={style.catalog}>
      <div className={style.nav} >
        <div className={style.navStiky}>
          {
            categories.map(item => {
              return <NavItem arr={item.categories} title={item.name} key={item.id}/>
            })
          }
          <NavItem arr={[]} title="New"/>
        </div>
      </div>

      <div className={style.items} >
        {products}
      </div>
    </div>
  )
}

export default CatalogContent;