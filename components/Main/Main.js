import styles from './Main.module.css';
import apiProduct from '../../api/apiProducts';

import NewPoshta from '../NewPoshta';
const api = new apiProduct();

const Main = ({hero}) => {
  return (
    <div className={styles.main}
      style={{"background" : `url(${hero.featured_image.formats.medium.url}) center / cover`}}>
      <NewPoshta />
      <div className={styles.title}>
        <h1>{hero.title}</h1>
        <h2>{hero.description}</h2>
      </div>
    </div>
  );
};

export default Main;