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
        <div className={style.itemTitle}>{title}</div>
        <Button text="Подробнее" />
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
            <ItemSlider url={product.images[0].formats.large.url} title="Paragraphs" />
          </a>
        </Link>
      )
    });

  return(
    <div className={style.right}>
      {mains}
    </div>
  )
};

const MainCatalog = ({recomm}) => {
  return(
    <div className={style.catalog}>
      <div className={style.top}>
        <Left title={recomm.title} description={recomm.description} />
        <Right products={[recomm.products[0],recomm.products[1]]} />
      </div>
      <div className={style.bottom}>
        <SimpleSlider />
      </div>
    </div>
  );
};

export default MainCatalog;