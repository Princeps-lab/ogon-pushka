import React, { useEffect, useState, useContext } from 'react';
import styles from './mobHeader.module.css';
import Link from 'next/link';
import { ProductsContext } from '../../context/context.js';

const ItemSub = ({list, title, setShow}) => {
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
            return <Link href={`/catalog/${item.id}`} key={item.id}>{item.name}</Link>
          })
        }
      </div>
    </>
  )
};

const MobSubMenu = ({setShow}) => {

  const store = useContext(ProductsContext);

  let listMenu = store.funcCategories.map(list => {
    return (
      <div
        key={list.id}
        className={styles.subItem}>
        <ItemSub
          setShow={setShow}
          title={list.name}
          list={list.categories} />
      </div>
    )
  });

  return (
    <div>
      {listMenu}
      <Link href={`/catalog/new`} passHref onClick={() => setShow()}>
        <ItemSub          
          title="new"
          list={[]} />
      </Link>
    </div>
  )
};

export default MobSubMenu;