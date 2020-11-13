import Image from 'next/image'
import styles from './Main.module.css';
const Main = ({hero}) => {

  return (
    <div className={styles.main}>
      <Image
        src={hero.featured_image.url}
        layout="fill"
        priority
        alt="hero" />
      <div className={styles.title}>
        <h1>{hero.title}</h1>
        <h2>{hero.description}</h2>
      </div>
    </div>
  );
};

export default Main;