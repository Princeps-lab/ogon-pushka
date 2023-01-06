import React, {useContext, useEffect} from 'react';
import styles from './submenu.module.css';
import Link from 'next/link';
import { ProductsContext } from '../../context/context.js';

const ItemSub = ({list = [], title}) => {
  return (
    <>
      <div className={styles.titleSubItem}>
        {title}
      </div>
      <div className={styles.links}>
        {
          list.map((item) => {
            return  <Link as={`/catalog/${item.id}`}
                      href={`/catalog/[categorieID]`}
                      key={item.id}>
                        {item.name}
                    </Link>
          })
        }
      </div>
    </>
  )
};

const SubMenu = ({isShown}) => {
  const store = useContext(ProductsContext);
  let listMenu =  store.funcCategories.map(list => {
    return (
      <div key={list.id} className={styles.subItem}>
        <ItemSub title={list.name} list={list.categories} />
      </div>
    )
  });

  return (
    <div className={isShown ? styles.subMenu : styles.off}>
      {listMenu}
      <Link
        as={`/catalog/new`}
        href={`/catalog/[categorieID]`}
        className={styles.subBg}
          style={{"background" : `url('/images/CatalogMenu.jpg') center / cover`}}
        >
      </Link>
      
    </div>
  )
};

export default SubMenu;