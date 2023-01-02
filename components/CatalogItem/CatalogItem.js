import React, {useContext} from 'react';
import style from './CatalogItem.module.css';
import Button from '../Button';
import { ProductsContext } from '../../context/context';
import Image from 'next/image';

const CatalogItem = ({url, title, price}) => {
  const store = useContext(ProductsContext);
  let w = 1920;
  let h = 2560;
  return(
    <div className={style.catalogItem}>
      <div>
        <Image src={url} layout='responsive' priority objectFit='cover' width={w} height={h} alt={title}/>
      </div>
      <div className={style.title}>
        <div className={style.name}>
          <div className={style.itemTitle}>{title}</div>
          { store.desktop ? <img width="20px" height="auto" src="/icons/basket.svg" alt='basket'/> : null }
        </div>
        <div className={style.itemTitle}>{price}.грн</div>
      </div>
      { !store.desktop ?
        <div className={style.btn}><Button text="ДЕТАЛЬНІШЕ" /> </div>: null
        }
    </div>
  )
};

export default CatalogItem;