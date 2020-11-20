
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
        {/* <div className={style.itemTitle}>{title}</div> */}
        <Button text="Купить" />
      </div>
    </div>
  );
};

const ItemSliderExtraMob = ({url}) => {
  return (
    <div className={style.catalogItem} style={{"background" : `url(${url}) center / cover`}}>
    </div>
  );
};

const SimpleSlider = ({slidesPerView = 4, products, mobExtra}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      navigation
    >
      {
        products && !mobExtra ?
        products.map(product => {
          return (
            <SwiperSlide 
              key={product.id}>
              <Link
              as={`/product/${product.id}`}
              href={'/product/[productId]'}>
              <a>
                <ItemSlider url={product.images[0].formats.large.url} title={product.title} />
              </a>
            </Link>
            </SwiperSlide>
          )
        }) : mobExtra ? products.map(product => {
          return(
            <SwiperSlide key={product.id}>
              <ItemSliderExtraMob url={product.formats.large.url} title="Paragraphs" />
            </SwiperSlide>
          )
        }) : null
      }
    </Swiper>
  );
};

export default SimpleSlider;