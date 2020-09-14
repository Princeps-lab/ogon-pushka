import React from 'react';
import SimpleSlider from '../SimpleSlider';
import style from './mobExtra.module.css';

const MobExtra = ({product}) => {
  return (
    <div className={style.extra}>
      <div className={style.slider}>
        <SimpleSlider slidesPerView={1} />
      </div>
    </div>
  )
};

export default MobExtra;