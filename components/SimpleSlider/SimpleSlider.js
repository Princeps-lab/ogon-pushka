
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import Link from 'next/link';
import Button from '../Button';

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

const SimpleSlider = ({slidesPerView = 4, products}) => {

  return (
    <Swiper
      slidesPerView={slidesPerView}
      navigation
    >
      {
        products ?
        products.map(product => {
          return (
            <SwiperSlide 
              key={product.id}>
              <Link
              as={`/product/${product.id}`}
              href={'/product/[productId]'}>
              <a>
                <ItemSlider url={product.images[0].formats.large.url} title="Paragraphs" />
              </a>
            </Link>
            </SwiperSlide>
          )
        }) : null
      }
    </Swiper>
  );
};

export default SimpleSlider;