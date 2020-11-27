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
      <Link as={`/catalog/new`}
        href={`/catalog/[categorieID]`}>
        <a onClick={() => setShow()}>
          <ItemSub
            
            title="new"
            list={[]} />
        </a></Link>
    </div>
  )
};

export default MobSubMenu;