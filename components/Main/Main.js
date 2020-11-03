import {useContext} from 'react';
import { ProductsContext } from '../../context/context.js';

import styles from './Main.module.css';
const Main = ({hero}) => {

  const store = useContext(ProductsContext);

  return (
    <div className={styles.main}
      style={{"background" : `url(${ store.desktop ? hero.featured_image.url : hero.featured_image.formats.large.url}) center / cover`}}>
      <div className={styles.title}>
        <h1>{hero.title}</h1>
        <h2>{hero.description}</h2>
      </div>
    </div>
  );
};

export default Main;