import style from "./header.module.css";
import React, {useState} from 'react';

const Basket = () => {

  const [basketShow, setShow] = useState(false);

  return (
    <div className={style.icons}>
      <div><img src="/icons/heart.svg"></img></div>
      <div onClick={() => setShow(true)}><img src="/icons/basket.svg"></img></div>

      <div className={basketShow ? style.basket : style.basketOff}>
        <div className={style.basketHeader}>
          <h2>Корзина</h2>
          <div onClick={() => setShow(false)}>
            <img src="/icons/close.svg" alt="close" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Basket;