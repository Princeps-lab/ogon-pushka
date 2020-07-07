import Button from '../Button';
import style from "./extra.module.css";

const Extra = () => {
  return(
    <div className={style.extra}>
      <div className={style.extraLeft}>
        <div className={style.top}>
          <div className={style.topTitle}>OGON PUSHKA</div>
          <p>
            Это то, в чем ты точно будешь сворачивать головы этим летом.<br/>
            Сочная подборка максимально востребованных цветов и стилей.
          </p>
          <Button text="Подробнее"/>
        </div>
      </div>
    </div>
  );
};

export default Extra;