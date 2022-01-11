
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import style from './ProductContent.module.css';

SwiperCore.use([Navigation]);

const SliderProduct = ({product}) => {
  const sliders = product.images.map(item => {
    return (
      <SwiperSlide key={item.id}>
        <div className={style.imgProductSlide} style={{"background" : `url(${item.formats.small.url}) center / cover`}}/>
      </SwiperSlide>
    )
  });
  return (
    <div className={style.slides}>
      <Swiper
        slidesPerView={1}>
        {sliders}
      </Swiper>
    </div>
  )
};

export default SliderProduct;