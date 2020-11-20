import {useContext} from 'react';
import { ProductsContext } from '../../context/context.js';
import styles from './Main.module.css';

const Main = ({hero}) => {
  const store = useContext(ProductsContext);
  const bg = store.desktop ? {"background" : `url(${hero.featured_image.url}) center / cover`} : {"background" : `url(${hero.featured_image_mobile.url}) center / cover`};
  console.log(bg);
  return (
    <div className={styles.main}
      style={bg} >
      <div className={styles.title}>
        <h1>{hero.title}</h1>
        <h2>{hero.description}</h2>
      </div>
    </div>
  );
};

export default Main;