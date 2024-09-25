
import style from './SocialBlock.module.css';

const SocialItem = ({url, title, href}) => {
  return (
    <a href={href} style={{"background" : `url(${url}) no-repeat center / cover` }}>
      {title}
    </a>
  )
};

const SocialBlock = () => {

  return (
    <div className={style.social}>
      <SocialItem href="https://fb.me/ogonpushka" url="/images/item1.jpg" title="FACEBOOK" />
      <SocialItem href="https://www.instagram.com/ogonpushka" url="/images/item2.jpg" title="INSTAGRAM" />
      <SocialItem href="https://www.tiktok.com/@ogonpushka2023?_t=8oe3M64lrcG&_r=1" url="/images/item3.jpg" title="TIK TOK" />
    </div>
  )
};

export default SocialBlock;