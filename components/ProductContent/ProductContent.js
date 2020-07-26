import { useState } from 'react';
import style from './ProductContent.module.css';

const ItemGalery = ({url}) => {
  return (
    <div  style={{"background" : `url(${url}) center / cover`}}></div>
  )
};

const Select = ({sizes}) => {

  let maxId = 0;
  const [ select, setSelect] = useState(sizes[0]);
  const [ show, setShow ] = useState(false);

  return (
    <div className={style.select}
      onMouseLeave={() => setShow(false)}>
      <div onClick={() => setShow(!show)} className={style.selecTtitle}>
        <span>{select}</span>
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
              maxId++
              return <div onClick={() => {
                setShow(false);
                setSelect(item);
              }} key={maxId}>{item}</div>
            })
          }
        </div> : null
      }
    </div>
  )
};

const ProductContent = ({product}) => {
  return (
    <div className={style.product}>
      <div className={style.galery}>
        <ItemGalery url='/images/product/Pro1.jpg' />
        <ItemGalery url='/images/product/Pro2.jpg' />
        <ItemGalery url='/images/product/Pro3.jpg' />
        <ItemGalery url='/images/product/Pro4.jpg' />
      </div>

      <div className={style.description}>
        <div className={style.title}>
          <h3>{product.title}</h3>
          <span>{product.price}₴</span>
        </div>
        <div className={style.article}>APT. 67037683-NINETIE2-LM</div>

        <div className={style.colors}>
          {
            product.colors ? product.colors.map(color => {
              return <div style={{"background" : `#${color.colorTitle}`}} key={color.id} />
            }) : null
          }
        </div>

        <div>
          <Select sizes={product.size} />
        </div>

      </div>
    </div>
  )
};

export default ProductContent;