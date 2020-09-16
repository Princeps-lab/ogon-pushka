import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
import style from './mobSocial.module.css';

const SocialItem = ({url, title, href}) => {
  return (
    <a  href={href} className={style.socialItem} style={{"background" : `url(${url}) no-repeat center / cover` }}>
      {title}
    </a>
  )
};

const MobSocial = () => {
  return (
    <div className={style.social}>
      <Swiper
      slidesPerView={1}
      >
        <SwiperSlide>
          <SocialItem href="https://fb.me/ogonpushka" url="/images/item1.jpg" title="FACEBOOK" />
        </SwiperSlide>

        <SwiperSlide>
          <SocialItem  href="https://www.instagram.com/ogonpushka" url="/images/item2.jpg" title="INSTAGRAM" />
        </SwiperSlide>

        <SwiperSlide>
          <SocialItem href="https://www.tiktok.com/@ogonpushka" url="/images/item3.jpg" title="TIK TOK" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default MobSocial;