import React from 'react';
import SimpleSlider from '../SimpleSlider';
import style from './mobExtra.module.css';

const MobExtra = () => {
  return (
    <div className={style.extra}>
      <div className={style.content}>
        <h2>ogon pushka</h2>
        <p>
          Это то, в чем ты точно будешь сворачивать головы этим летом. Сочная подборка максимально востребованных цветов и стилей.
        </p>
      </div>
      <div className={style.slider}>
        <SimpleSlider slidesPerView={1} />
      </div>
    
    </div>
  )
};

export default MobExtra;