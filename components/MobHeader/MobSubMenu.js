import React, { useEffect, useState, useContext } from 'react';
import styles from './mobHeader.module.css';
import Link from 'next/link';
import { ProductsContext } from '../../context/context.js';

const ItemSub = ({list, title, setShow}) => {

  console.log(list)
  return (
    <>
      <div className={styles.titleSubItem}>
        {title}
      </div>
      <div 
        onClick={() => setShow()}
        className={styles.links}>
        {
          list.map((item) => {
            return <Link as={`/catalog/${item.id}`}
            href={`/catalog/[categorieID]`} key={item.id}><a>{item.name}</a></Link>
          })
        }
      </div>
    </>
  )
};

const MobSubMenu = ({setShow}) => {

  const store = useContext(ProductsContext);

  let listMenu = [];

  useEffect(() => {
    listMenu = store.funcCategories.map(list => {
      return (
        <div
          key={list.id} className={styles.subItem}>
          <ItemSub setShow={setShow} title={list.name} list={list.categories} />
        </div>
      )
    });
  }, [store.funcCategories]);

  return (
    <div>
      {listMenu}
      <div
        className={styles.subBg} 
        style={{"background" : `url('/images/background.jpg') center / cover`}} >
      </div>
    </div>
  )
};

export default MobSubMenu;