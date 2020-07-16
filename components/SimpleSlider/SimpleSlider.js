
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import Button from '../Button';

import './SimpleSlider.module.css';

SwiperCore.use([Navigation]);

import style from './SimpleSlider.module.css';

const ItemSlider = ({url, title}) => {
  return (
    <div className={style.catalogItem} style={{"background" : `url(${url}) center / cover`}}>
      <div className={style.button}>
        <div className={style.itemTitle}>{title}</div>
        <Button text="Подробнее" />
      </div>
    </div>
  );
};

const SimpleSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <ItemSlider url="/images/catalog/item1.jpg" title="Paragraphs" />
      </SwiperSlide>

      <SwiperSlide>
        <ItemSlider url="/images/catalog/item2.jpg" title="Paragraphs"/>
      </SwiperSlide>

      <SwiperSlide>
        <ItemSlider url="/images/catalog/item3.jpg" title="Paragraphs" />
      </SwiperSlide>

      <SwiperSlide>
        <ItemSlider url="/images/catalog/item4.jpg" title="Paragraphs" />
      </SwiperSlide>

      <SwiperSlide>
        <ItemSlider url="/images/catalog/item1.jpg" title="Paragraphs" />
      </SwiperSlide>

      <SwiperSlide>
        <ItemSlider url="/images/extraLeft.jpg" title="Paragraphs" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SimpleSlider;