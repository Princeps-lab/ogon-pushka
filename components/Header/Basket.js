import { ProductsContext } from '../../context/context.js';
import React, {useContext, useState, useEffect} from 'react';
import Link from 'next/link';

import style from "./header.module.css";
import BuyForm from '../BuyForm/index.js';

const ProductItem = ({product, deleteProduct, addFavor, deleteFavor}) => {
  const {url} = product.img;
  const [itFavor, setItFavor] = useState(null);
  const store = useContext(ProductsContext);
  
  useEffect(() => {
    const arr = store.favorites.filter(favor => favor.id === product.id);
    if(arr.length) {
      setItFavor(true)
    }
  }, [store])

  useEffect(() => {
    if(itFavor) {
      addFavor(product);
    }
    if (itFavor === false){
      deleteFavor(product.id);
    }
  }, [itFavor]);
  
  console.log(product)

  return (
    <div>
      <h3 className={style.BasketTitleProduct}>{product.title}</h3>
      <div className={style.product}>
        <div className={style.img}  style={{"background" : `url(${url}) center / cover`}} />
        <div className={style.description}>
          <span className={style.price}>Цена: <span>{product.price} грн</span></span>
          {
            product.size ? 
            <span>Размер: <span>{product.size.name}</span></span> : null
          }
          { product.color ?
            <span>
              Цвет: 
              <span className={style.color}>{product.color}</span>
            </span> : null
          }
          <span>Количество: <span>1</span></span>

          <div className={style.iconsProduct}>
            <div onClick={() => deleteProduct(product.id)} >
              <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 9C8.55228 9 9 9.44771 9 10V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z" fill="black"/>
              </svg>
            </div>

            <div className={itFavor ? style.red : style.black}
              onClick={() => {
                setItFavor(!itFavor);
              }}>
              <svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9131 0.495075C14.702 0.168228 15.5474 0 16.4013 0C17.2551 0 18.1006 0.168229 18.8894 0.495075C19.6781 0.821861 20.3947 1.30081 20.9982 1.90455C21.602 2.5081 22.0813 3.22501 22.408 4.01368C22.7349 4.80249 22.9031 5.64797 22.9031 6.50183C22.9031 7.35568 22.7349 8.20116 22.408 8.98997C22.0812 9.77872 21.6022 10.4953 20.9984 11.0989C20.9983 11.099 20.9985 11.0989 20.9984 11.0989L12.1584 19.9389C11.7679 20.3295 11.1347 20.3295 10.7442 19.9389L1.90418 11.0989C0.684956 9.8797 0 8.22607 0 6.50183C0 4.77758 0.684956 3.12395 1.90418 1.90472C3.12341 0.68549 4.77704 0.000534773 6.50129 0.000534773C8.22554 0.000534773 9.87917 0.68549 11.0984 1.90472L11.4513 2.25761L11.804 1.90488C11.8041 1.90483 11.804 1.90494 11.804 1.90488C12.4076 1.30106 13.1244 0.821892 13.9131 0.495075ZM16.4013 2C15.8102 2 15.2248 2.11647 14.6787 2.34274C14.1326 2.56902 13.6365 2.90068 13.2186 3.31877L12.1584 4.37893C11.7679 4.76946 11.1347 4.76946 10.7442 4.37893L9.68418 3.31893C8.84003 2.47478 7.69511 2.00053 6.50129 2.00053C5.30747 2.00053 4.16255 2.47478 3.3184 3.31893C2.47424 4.16309 2 5.30801 2 6.50183C2 7.69564 2.47424 8.84056 3.3184 9.68472L11.4513 17.8176L19.5842 9.68472C20.0023 9.26683 20.3341 8.77049 20.5604 8.22439C20.7866 7.67828 20.9031 7.09295 20.9031 6.50183C20.9031 5.9107 20.7866 5.32537 20.5604 4.77926C20.3341 4.23316 20.0024 3.73699 19.5843 3.3191C19.1665 2.90101 18.67 2.56902 18.1239 2.34274C17.5778 2.11647 16.9924 2 16.4013 2Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basket = () => {
  const store = useContext(ProductsContext);
  const products = store.products.map(product => <ProductItem
      deleteProduct={store.deleteProduct}
      addFavor={store.addFavor}
      deleteFavor={store.deleteFavor}
      key={product.id}
      product={product}/>);

  const showOff = () => {
    store.setShow(false);
    if(!store.desktop) {
      const body = document.body;
      body.style.overflow = 'visible';
      body.style.position = 'relative';
    } 
  };

  const showOn = () => {
    store.setShow(true);

    if(!store.desktop) {
      const body = document.body;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
    } 
  };

  return (
    <div className={style.icons}>
      {
        store.showForm ? <BuyForm/> : null
      }
      <div className={style.iconsItem}>
        <div>
          <Link href="/favorites">
            <a><img src="/icons/heart.svg"></img></a>
          </Link>
        </div>
        <div onClick={() => showOn()}>
          <img src="/icons/basket.svg"></img>
        </div>
      </div>

      <div className={store.basketShow ? style.basket : style.basketOff}>
        <div className={style.basketHeader}>
          <h2>Корзина</h2>
          <div onClick={() => showOff()}>
            <img src="/icons/close.svg" alt="close" />
          </div>
        </div>

        {
          products.length ?
          <div onClick={() => store.deleteAll()} className={style.deleteAll}>Удалить все товары</div> : null
        }

        {
          !products.length ?
          <div className={style.logo}>
            <span>Корзина пуста</span>
            <img src='/images/logo.svg' />
          </div>
          : null
        }

        {products}
        
        {
          products.length ?
          <div className={style.sum}>
            <div>Всего :</div>
            <div>{store.sum} грн</div>
          </div> : null
        }

        {
          products.length ?
          <div className={style.basketBtn}>
            <Link href="/form">
              <a onClick={() => store.setShow(false)}>
                Оформить
              </a>
            </Link>
          </div> : null
        }

        <div className={style.delivery} >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM11.15 11.15L7.25 8.75V4.25H8.375V8.15L11.75 10.175L11.15 11.15Z" fill="black"/>
          </svg>
          <span style={{"marginLeft": ".5rem"}}>Доставка и возврат</span>
        </div>

      </div>
    </div>
  )
};

export default Basket;