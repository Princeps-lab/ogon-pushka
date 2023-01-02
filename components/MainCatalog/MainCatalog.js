import { useContext } from 'react';
import {ProductsContext} from '../../context/context.js';
import SimpleSlider from '../SimpleSlider';
import style from './mainCatalog.module.css';
import Button from '../Button';
import Link from 'next/link';

const Left = ({title, description}) => {
  return (
    <div className={style.left}>
      <div className={style.topTitle}>{title}</div>
      <p>{description}</p>
    </div>
  )
};

const ItemSlider = ({url, title}) => {
  return (
    <div className={style.catalogItem} style={{"background" : `url(${url}) center / cover`}}>
      <div className={style.button}>
        {/* <div className={style.itemTitle}>{title}</div> */}
        <Button text="ДЕТАЛЬНІШЕ" />
      </div>
    </div>
  );
};

const Right = ({products}) => {
  const mains = products.map(product => {
    return (
      <Link
        key={product.id}
        as={`/product/${product.id}`}
        href={'/product/[productId]'}>
        <a>
          <ItemSlider title={product.title} url={product.images[0].formats.large.url} />
        </a>
      </Link>
    )
  });

  return(
    <div className={style.right}>
      {mains}
    </div>
  );
};

const MainCatalog = () => {
  const context = useContext(ProductsContext);
  const recommended = context.home ? context.home.recommended : null;
  return(
    recommended ?
      <div className={style.catalog}>
      <div className={style.top}>
        <Left title={recommended?.title} description={recommended?.description} />
        <Right products={[recommended?.products[0],recommended?.products[1]]} />
      </div>
      <div className={style.bottom}>
        <SimpleSlider products={recommended?.products?.filter(((item, id) => id !== 0 && id !== 1))} />
      </div>
    </div> : null
  );
};

export default MainCatalog;