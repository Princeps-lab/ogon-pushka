import React, { } from 'react';
import styles from './mobHeader.module.css';
import Link from 'next/link';
import products from '../../api/api';

const ItemSub = ({list, title}) => {
  return (
    <>
      <div className={styles.titleSubItem}>
        {title}
      </div>
      <div className={styles.links}>
        {
          list.map((item) => {
            return <Link as={`/catalog/${item.id}`}
            href={`/catalog/[categorieID]`} key={item.id}><a>{item.title}</a></Link>
          })
        }
      </div>
    </>
  )
};

const MobSubMenu = () => {

  const listMenu = products.map(list => {
    return (
      <div key={list.id} className={styles.subItem}>
        <ItemSub title={list.title} list={list.categories} />
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