import {useContext} from 'react';
import style from './description.module.css';
import {ProductsContext} from '../../context/context.js';

const Description = () => {
  const context = useContext(ProductsContext);
  const featured = context.home ? context.home.featured : null;
  return (
      featured ?
      <div style={{"background": `url(${featured.featured_image.url}) center / cover`}} className={style.description}>
        <div className={style.window}>
          <div className={style.blackBg}></div>
          <div>{featured.title}</div>
          <p>{featured.description}</p>
          </div>
      </div> : null
  )
};

export default Description;