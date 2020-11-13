import React, {useContext} from 'react';
import style from './CatalogItem.module.css';
import Button from '../Button';
import { ProductsContext } from '../../context/context';
import Image from 'next/image'

const CatalogItem = ({url, title, price}) => {

  const store = useContext(ProductsContext);
  return(
    <div className={style.catalogItem}>
      <div style={{"background" : `url(${url}) center / cover`,
      "height" :"100%", "position": "relative"}}>
      </div>
      <div className={style.title}>
        <div className={style.name}>
          <div className={style.itemTitle}>{title}</div>
          { store.desktop ? <Image width="20px" height="auto" src="/icons/basket.svg"/> : null }
        </div>
        <div className={style.itemTitle}>{price}.грн</div>
      </div>
      { !store.desktop ?
        <div className={style.btn}><Button text="Подробнее" /> </div>: null
        }
    </div>
  )
};

export default CatalogItem;