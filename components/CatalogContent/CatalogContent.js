import {useEffect, useState} from 'react';
import Link from 'next/link';

import CatalogItem from '../CatalogItem';
import style from './CatalogContent.module.css';


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
              {item.title}</span>
            </a>
          </Link>
        )
      })}
    </div>
  )
};

const CatalogContent = ({idCategorie, api}) => {

  const [ products, setProducts ] = useState([]);
  const arrProduct = [...api[0].categories, ...api[1].categories, ...api[2].categories];

  useEffect(() => {
    console.log(idCategorie)
    if (idCategorie) {
      const arr = arrProduct[idCategorie].products.map((product) => {
        return (
          <CatalogItem key={product.id}
            textBtn="Купить"
            title={product.title}
            url={product.url} />
        )
      });

      setProducts(arr);
    }
  }, [idCategorie]);

  return (
    <div className={style.catalog}>
      <div className={style.nav} >
        {
          api.map(item => {
            return <NavItem
                    arr={item.categories}
                    title={item.title}
                    key={item.id}/>
          })
        }
      </div>

      <div className={style.items} >

        {products}

        {/* <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item4.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item5.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item6.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item7.jpg' /> */}
      </div>
    </div>
  )
}

export default CatalogContent;