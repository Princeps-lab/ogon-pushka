import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Пушка Огонь - бренд пылающих шмоток
        Украина, г. Харьков</div>
        <div>Работаем без выходных с 9:00 до 20:00</div>
        <div className={styles.number}>068 482 72 75</div>
    </div>
  );
};

export default Footer;