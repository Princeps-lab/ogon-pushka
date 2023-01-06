import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const pagesLink = [
  {
    link: "/categories",
    name: "категорії товарів",
    id: 0,
    as: "/categories"
  },
  {
    link: "/contacts",
    name: "контакти",
    id: 1,
    as: "/contacts"
  },
  {
    link: "/faq",
    name: "часті запитання",
    id: 2,
    as: "/faq"
  },
  {
    link: "/about",
    name: "про нас",
    id: 3,
    as: "/aboutUs"
  },
];

const Footer = () => {

  const links = pagesLink.map(item => {
    return (
      <Link key={item.id} href={item.link}>{item.name}</Link>
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
            <Image width="100%" height="100%" src="/images/logoFooter.svg" alt="logo"/>
          </Link>
        </div>

        <div className={styles.socialLinks}>
          <div>
            <div className={styles.socialLinksTitle}>Соціальні мережі::</div>
            <div className={styles.socialLinksList}>
              <a href="https://teleg.run/pushka_ogon">
                <Image width="100%" height="100%" src="/icons/Telegram/white.svg" alt="telegram"/>
              </a>
              <a href="https://www.tiktok.com/@ogonpushka">
                <Image width="100%" height="100%" src="/icons/TikTok/white.svg" alt="tik-tok"/>
              </a>
              <a href="https://www.instagram.com/ogonpushka">
                <Image width="100%" height="100%"  src="/icons/Instagram/white.svg" alt="instagram"/>
              </a>
              <a href="https://fb.me/ogonpushka">
                <Image width="100%" height="100%" src="/icons/Facebook/white.svg" alt="facebook"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBotoom}>
        <div>OGONPUSHKA - бренд палаючого одягу. Україна, м. Харків</div>
        <div>Працюємо без вихідних з 9:00 до 20:00</div>
        <div className={styles.number}>068 482 72 75</div>
      </div>

      <div className={styles.footerBayed}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 178"><g fill="none"><path fill="#FF5F00" d="M105.2 19.2h77.4v139.6h-77.4z"/>
            <path fill="#EB001B" d="M110 89a89.1 89.1 0 0133.8-69.8A88.6 88.6 0 00.8 89a88.6 88.6 0 00143 69.8A88.7 88.7 0 01110 89z"/><path fill="#F79E1B" d="M287 89a88.6 88.6 0 01-143 69.8 89.1 89.1 0 000-139.6A88.2 88.2 0 01287 89z"/><path fill="#004686" d="M438.2 143.5l17.3-101.7h27.7l-17.3 101.7h-27.7zM566 44.3c-5.4-2-14-4.3-24.7-4.3-27.3 0-46.5 13.8-46.7 33.6-.1 14.6 13.7 22.7 24.2 27.6 10.8 5 14.4 8.2 14.3 12.6 0 6.8-8.5 10-16.5 10-11 0-17-1.6-26-5.4l-3.6-1.6-3.8 22.8a87.3 87.3 0 0030.7 5.4c29.1 0 48-13.7 48.2-34.8 0-11.5-7.3-20.3-23.2-27.6-9.7-4.7-15.6-7.8-15.5-12.6 0-4.2 5-8.8 15.8-8.8 9-.1 15.6 1.9 20.7 4l2.4 1.1 3.8-22zm71-2.4h-21.4c-6.6 0-11.6 1.8-14.5 8.4l-41 93.2h29l5.8-15.3h35.4l3.4 15.3h25.6L637 42m-34 65.5l11-28.4 3.6-9.7 2 8.7 6.3 29.4h-23zM415 41.8l-27 69.4-2.9-14.1A79.3 79.3 0 00347 54.4l24.7 89h29.2l43.5-101.6h-29.2z"/>
            <path fill="#EF9B11" d="M363 41.8h-44.6l-.4 2c34.7 8.5 57.6 28.9 67.1 53.3l-9.7-46.7c-1.6-6.5-6.5-8.4-12.5-8.6z"/></g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer;