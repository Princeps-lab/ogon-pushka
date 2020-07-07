import Button from '../Button';
import style from "./extra.module.css";

const Top = () => {
  return (
    <div className={style.top}>
      <div className={style.topTitle}>OGON PUSHKA</div>
      <p>
        Это то, в чем ты точно будешь сворачивать головы этим летом.<br/>
        Сочная подборка максимально востребованных цветов и стилей.
      </p>
      <Button text="Подробнее"/>
    </div>
  )
};

const ExtraItem = ({url}) => {
  return(
    <div style={{"background" : `url(${url}) center / cover`}} />
  )
};

const FullItem = ({url}) => <div style={{"background" : `url(${url}) center / cover`}} />;

const Extra = () => {
  return(
    <div className={style.extra}>
      <div className={style.left}>
        <Top />
        <div className={style.bottom}>
          <ExtraItem url="/images/extraLeft.jpg"/>
          <ExtraItem url="/images/extraRight.jpg"/>
        </div>
      </div>
      <div  className={style.right}>
        <FullItem url="/images/extra_full.jpg" />
      </div>
    </div>
  );
};

export default Extra;