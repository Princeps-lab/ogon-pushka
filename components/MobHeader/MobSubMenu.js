import React, { useEffect, useState } from 'react';
import styles from './mobHeader.module.css';
import Link from 'next/link';
import apiProducts from '../../api/apiProducts';

const api = new apiProducts();

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

  const [ arr, setArr ] = useState([]);

  useEffect(() => {
    api.getFunctionCategories().then(functions => setArr(functions));
  }, []);

  const listMenu = arr.map(list => {
    return (
      <div
        key={list.id} className={styles.subItem}>
        <ItemSub setShow={setShow} title={list.name} list={list.categories} />
      </div>
    )
  })

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