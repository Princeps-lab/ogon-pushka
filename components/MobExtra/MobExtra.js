import {useContext} from 'react';
import {ProductsContext} from '../../context/context.js';
import SimpleSlider from '../SimpleSlider';
import style from './mobExtra.module.css';


const MobExtra = ({mobExtra}) => {
  const context = useContext(ProductsContext);
  const extra = context.home ? context.home.extra : null;
  return (
      context.home  ?
      <div className={style.extra}>
        {
          mobExtra ?
          <div className={style.content}>
            <h2>{extra.title}</h2>
            <p>{extra.description}</p>
          </div> :
          <div className={style.content}>
            <h2>{context.home.recommended.title}</h2>
            <p>{context.home.recommended.description}</p>
          </div>
        }
        <div className={style.slider}>
          { mobExtra ?
            <SimpleSlider mobExtra products={[...extra.images, extra.featured_image ]} slidesPerView={1} /> :
            <SimpleSlider products={context.home.recommended.products} slidesPerView={1} />
          }
        </div>
      </div> : null
  )
};

export default MobExtra;