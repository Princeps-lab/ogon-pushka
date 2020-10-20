import { useState } from 'react';
import style from './ProductContent.module.css';

import { ProductsContext } from '../../context/context.js';
import React, { useContext } from 'react';
import SliderProduct from './SliderProduct';

import Link from 'next/link';

const ItemGalery = ({url}) => {
  return (
    <div  style={{"background" : `url(${url}) center / cover`}}></div>
  )
};

const Select = ({sizes, changeSize}) => {
  const [ select, setSelect] = useState(sizes[0]);
  const [ show, setShow ] = useState(false);

  return (
    <div className={style.select}
      onMouseLeave={() => setShow(false)}>
      <div onClick={() => setShow(!show)} className={style.selecTtitle}>
        <span>{select.name}</span>
        <div>
          <svg width="12" height="6" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.81475 0.1875C6.55375 -0.0625 6.13075 -0.0625 5.86875 0.1875L3.50475 2.4475L1.14075 0.1875C0.87975 -0.0625 0.45675 -0.0625 0.19575 0.1875C-0.06525 0.4375 -0.06525 0.8415 0.19575 1.0915L3.03275 3.8035C3.29375 4.0515 3.71675 4.0515 3.97775 3.8035L6.81475 1.0915C7.07575 0.8415 7.07575 0.4375 6.81475 0.1875Z" fill="#999"/>
          </svg>
        </div>
      </div>
      {
        show ?
        <div className={style.list}>
          {
            sizes.map(item => {
              return <div onClick={() => {
                setShow(false);
                setSelect(item);
                changeSize(item);
              }} key={item.id}>{item.name}</div>
            })
          }
        </div> : null
      }
    </div>
  )
};

const ProductContent = ({product}) => {
  const store = useContext(ProductsContext);
  const defofltSize = product.sizes.length ? product.sizes[0] : null
  const [descriptionShow, setDescriptionShow] = useState(false);
  const [ buyed, setBuyed ] = useState(false);
  const [ color, setColor ] = useState(product.colors[0]);
  const [ size, setSize ] = useState(defofltSize);
  const [favoriteAction, setFavoriteAction] = useState(false);

  const productBuyed = {
    title: product.title,
    price: product.price,
    id: product.id,
    color: color ? color.name : null,
    size,
    favoriteAction,
    img: product.featured_image ? product.featured_image.formats.medium : product.images[0].formats.medium
  };

  console.log(product);

  return (
    <div className={style.product}>
      <div className={style.galery}>
        {product.images.map(item => {
          return <ItemGalery key={item.id} url={item.formats.medium.url} />
        })}
      </div>

      {store.desktop ? null : <SliderProduct product={product} />}

      <div className={style.description}>
        
        <div className={style.title}>
          <h3>{product.title}</h3>
          <div>
            <span>Цена</span>
            <span>{product.price}₴</span>
          </div>
        </div>
        <div className={style.article}>APT. 67037683-NINETIE2-LM</div>

        {
          product.colors ? 
          <div className={style.colors}>
            {
              product.colors ? product.colors.map(colorItem => {
                const item = colorItem.name ? colorItem.name.toLowerCase() : null;
                return item ?
                    <div 
                      key={colorItem.id}
                      className={ colorItem.id === color.id ? style.activeColor : null }>
                      <div
                        className={style.colorBlock}
                        onClick={() => setColor(colorItem)}
                        style={{"background" : `${item === "white" ? "#f3f0f0" : item}`}} />
                    </div> : null
              }) : null
            }
          </div> : null
        }

        <div>
          {
            product.sizes.length ? 
            <Select changeSize = {(size) => { setSize(size) }} sizes={product.sizes} /> : null
          }
        </div>

        <div className={style.groupBtn}>

          {
            !buyed ?
            <div onClick={() => {
              store.addProduct(productBuyed);
            }} className={style.buy}>
              <Link href="/buy">
                <a>Купить в один клик</a>
              </Link>
            </div>
            : null
          }

          {
            !buyed ? 
            <div onClick={() => {
              store.addProduct(productBuyed);
              setBuyed(true);
              }} className={style.basket}>
              В корзину
            </div> :
            <div
              onClick={() => {
                store.setShow(true);
                setBuyed(false);
              }}
              style={{'width' : "100%"}} className={style.basket}>
              Добавлено корзину
            </div>
          }

          <div onClick={() => {
            store.addFavor(productBuyed);
            setFavoriteAction(!favoriteAction);
          }}
            className={favoriteAction ? style.heart : style.heartInAction}>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none"   xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3036 2.59133C20.766 2.08683 20.1278 1.68663 19.4253 1.41358C18.7228 1.14054 17.9699 1 17.2095 1C16.4491 1 15.6961 1.14054 14.9936 1.41358C14.2912 1.68663 13.6529 2.08683 13.1153 2.59133L11.9997 3.63785L10.8841 2.59133C9.79827 1.57276 8.32556 1.00053 6.78997 1.00053C5.25437 1.00053 3.78167 1.57276 2.69584 2.59133C1.61001 3.6099 1 4.99139 1 6.43187C1 7.87235 1.61001 9.25383 2.69584 10.2724L3.81147 11.3189L11.9997 19L20.188 11.3189L21.3036 10.2724C21.8414 9.76814 22.268 9.16942 22.5591 8.51045C22.8502 7.85148 23 7.14517 23 6.43187C23 5.71857 22.8502 5.01225 22.5591 4.35328C22.268 3.69431 21.8414 3.09559 21.3036 2.59133Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
        </div>

        <div className={style.nav}>
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM11.15 11.15L7.25 8.75V4.25H8.375V8.15L11.75 10.175L11.15 11.15Z" fill="black"/>
            </svg>
            <span style={{"marginLeft": ".5rem"}}>Доставка и возврат</span>
          </div>

          <div>
            <span >Наличие в магазине</span>
              <svg  style={{"marginLeft": ".5rem"}} width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7.625C4.965 7.625 4.125 6.785 4.125 5.75C4.125 4.715 4.965 3.875 6 3.875C7.035 3.875 7.875 4.715 7.875 5.75C7.875 6.785 7.035 7.625 6 7.625ZM6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5Z" fill="black"/>
              </svg>
          </div>
        </div>

        <div className={style.nav}>
          <div onClick={() => setDescriptionShow(!descriptionShow)}>
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6823 2.29543L11.9268 0.0195073C11.8338 -0.00666518 11.7353 -0.00666518 11.6423 0.0195073C9.90127 0.325805 8.12017 0.325805 6.37917 0.0195073H6.28073C6.21222 0.00471063 6.14133 0.00471063 6.07282 0.0195073L0.328263 2.29543C0.213913 2.34354 0.119788 2.42983 0.0619257 2.53956C0.00406328 2.6493 -0.013998 2.7757 0.0109021 2.89723L0.755018 6.30022C0.769404 6.36752 0.797092 6.43126 0.836563 6.48765C0.876033 6.54403 0.926439 6.59191 0.984758 6.62846C1.09782 6.70227 1.23501 6.72971 1.36777 6.70507L3.55617 6.24549V14.0691C3.55468 14.1384 3.56724 14.2074 3.5931 14.2718C3.61897 14.3362 3.65757 14.3947 3.70664 14.4438C3.75571 14.4928 3.81421 14.5315 3.87861 14.5573C3.94301 14.5832 4.01199 14.5957 4.08137 14.5943H13.9292C14.0685 14.5943 14.2021 14.5389 14.3006 14.4404C14.3991 14.342 14.4544 14.2084 14.4544 14.0691V6.24549L16.6428 6.70507C16.7083 6.72105 16.7764 6.7234 16.8429 6.71198C16.9093 6.70056 16.9728 6.67561 17.0292 6.63868C17.0856 6.60175 17.1339 6.55364 17.1709 6.4973C17.208 6.44096 17.233 6.37761 17.2446 6.31117L17.9887 2.88631C18.0137 2.76759 17.9969 2.64387 17.941 2.53616C17.8852 2.42845 17.7938 2.34338 17.6823 2.29543ZM10.57 2.05471C10.3025 2.33338 9.96602 2.53629 9.59472 2.64281C9.22342 2.74934 8.83052 2.75568 8.45597 2.66121C8.08142 2.56674 7.73857 2.37485 7.46221 2.10496C7.18586 1.83508 6.98585 1.49683 6.88252 1.12463C8.29524 1.31063 9.72627 1.31063 11.139 1.12463C11.0277 1.47883 10.8281 1.7989 10.559 2.05471H10.57ZM4.55187 5.50144C4.52058 5.36643 4.4382 5.2488 4.32206 5.17319C4.209 5.09938 4.07187 5.07194 3.93912 5.09659L1.63037 5.57804L1.09422 3.09421L5.79927 1.23406C5.93403 1.82355 6.23384 2.3625 6.66367 2.78784C7.27728 3.3893 8.1023 3.7262 8.96153 3.7262C9.82077 3.7262 10.6457 3.3893 11.2593 2.78784C11.7198 2.35926 12.0498 1.80925 12.2113 1.20123L16.9163 3.06139L16.3802 5.54521L14.1261 5.07472H13.962C13.8246 5.07758 13.6938 5.13417 13.5977 5.23236C13.5015 5.33055 13.4477 5.46249 13.4477 5.59991V13.5438H4.55187V5.49052V5.50144Z" fill="black"/>
            </svg>
            <span style={{"marginLeft": ".5rem"}}>Описание товара</span>
          </div>

          <div>
            <span >Поделиться</span>
            <svg style={{"marginLeft": ".5rem"}} width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.2019 6.66667L12.5086 3.92259L13.6653 2.74408L18.3333 7.5L13.6653 12.2559L12.5086 11.0774L15.2019 8.33333H4.9076V6.66667H15.2019ZM0 13.3333V1.66667V0H8.17933V1.66667H1.63587V13.3333H8.17933V15H0V13.3333Z" fill="black"/>
            </svg>
          </div>
        </div>
        
        {
          descriptionShow ?
          <div className={style.descriptionProduct}>
            {product.description ? product.description : null}
          </div> : null
        }

      </div>
    </div>
  )
};

export default ProductContent;