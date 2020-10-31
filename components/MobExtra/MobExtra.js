import React, {useState, useEffect} from 'react';
import SimpleSlider from '../SimpleSlider';
import style from './mobExtra.module.css';

import apiProduct from '../../api/apiProducts';
const api = new apiProduct();

const MobExtra = () => {

  const [ extra, setExtra ] = useState();

  useEffect(() => {
    api.getHome().then( home => {
      setExtra(home.extra);
    });
  }, []);

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