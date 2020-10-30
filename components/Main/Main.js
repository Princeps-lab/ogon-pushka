import styles from './Main.module.css';
const Main = ({hero}) => {
  return (
    <div className={styles.main}
      style={{"background" : `url(${hero.featured_image.formats.medium.url}) center / cover`}}>
      <div className={styles.title}>
        <h1>{hero.title}</h1>
        <h2>{hero.description}</h2>
      </div>
    </div>
  );
};

export default Main;