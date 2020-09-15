import Link from 'next/link';
import styles from './Footer.module.css';

const pagesLink = [
  {
    link: "/categories",
    name: "категории товаров",
    id: 0,
    as: "/categories"
  },
  {
    link: "/contacts",
    name: "контакты",
    id: 1,
    as: "/contacts"
  },
  {
    link: "/faq",
    name: "частые вопросы",
    id: 2,
    as: "/faq"
  },
  {
    link: "/about",
    name: "о нас",
    id: 3,
    as: "/aboutUs"
  },
];

const Footer = () => {

  const links = pagesLink.map(item => {
    return (
      <Link key={item.id} href={item.link}><a>{item.name}</a></Link>
    );
  });

  return (
    <>
      <div className={styles.footerTop}>
        <div className={styles.nav}>
          <div>{links}</div>
        </div>

        <div className={styles.logo}>
          <Link href="/">
            <a><img src="/images/logoFooter.svg" alt="logo"/></a>
          </Link>
        </div>

        <div className={styles.socialLinks}>
          <div>
            <div className={styles.socialLinksTitle}>Социальные сети:</div>
            <div className={styles.socialLinksList}>
              <a href="@pushka_ogon">
                <img src="/icons/Telegram/white.svg" alt="telegram"/>
              </a>
              <a href="tiktok.com/@ogonpushka">
                <img src="/icons/TikTok/white.svg" alt="tik-tok"/>
              </a>
              <a href="https://www.instagram.com/ogonpushka/">
                <img  src="/icons/Instagram/white.svg" alt="instagram"/>
              </a>
              <a href="https://fb.me/ogonpushka">
                <img src="/icons/Facebook/white.svg" alt="facebook"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBotoom}>
        <div>Пушка Огонь - бренд пылающих шмоток Украина, г. Харьков</div>
        <div>Работаем без выходных с 9:00 до 20:00</div>
        <div className={styles.number}>068 482 72 75</div>
      </div>
    </>
  );
};

export default Footer;