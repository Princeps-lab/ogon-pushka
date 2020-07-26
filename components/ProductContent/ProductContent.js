
import style from './ProductContent.module.css';

const ItemGalery = ({url}) => {
  return (
    <div  style={{"background" : `url(${url}) center / cover`}}></div>
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

      </div>
    </div>
  )
};

export default ProductContent;