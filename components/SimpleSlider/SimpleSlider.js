
import { Swiper, SwiperSlide } from 'swiper/react';

import './SimpleSlider.module.css';

const SimpleSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>

    </Swiper>
  )
}

export default SimpleSlider;