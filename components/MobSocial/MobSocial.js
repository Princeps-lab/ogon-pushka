import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
import style from './mobSocial.module.css';

const SocialItem = ({url, title}) => {
  return (
    <div className={style.socialItem} style={{"background" : `url(${url}) no-repeat center / cover` }}>
      {title}
    </div>
  )
};

const MobSocial = () => {
  return (
    <div className={style.social}>
      <Swiper
      slidesPerView={1}
      >
        <SwiperSlide>
          <SocialItem url="/images/item1.jpg" title="FACEBOOK" />
        </SwiperSlide>

        <SwiperSlide>
          <SocialItem url="/images/item2.jpg" title="INSTAGRAM" />
        </SwiperSlide>

        <SwiperSlide>
          <SocialItem url="/images/item3.jpg" title="TIK TOK" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default MobSocial;