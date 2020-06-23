import style from "./header.module.css"

const Basket = () => {
  return (
    <div className={style.icons}>
      <div><img src="/icons/heart.svg"></img></div>
      <div><img src="/icons/basket.svg"></img></div>
    </div>
  )
};

export default Basket;