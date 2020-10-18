import SimpleSlider from '../SimpleSlider';
import style from './mainCatalog.module.css';
import Button from '../Button';

const Left = () => {
  return (
    <div className={style.left}>
      <div className={style.topTitle}>OGON PUSHKA</div>
      <p>
        Это то, в чем ты точно будешь сворачивать головы этим летом.<br/>
        Сочная подборка максимально востребованных цветов и стилей.
      </p>
    </div>
  )
};

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

const Right = () => {
  return(
    <div className={style.right}>
      <ItemSlider url="/images/extraLeft.jpg" title="Paragraphs" />
      <ItemSlider url="/images/extraRight.jpg" title="Paragraphs"/>
    </div>
  )
};

const MainCatalog = () => {
  return(
    <div className={style.catalog}>
      <div className={style.top}>
        <Left />
        <Right />
      </div>
      <div className={style.bottom}>
        <SimpleSlider />
      </div>
    </div>
  );
};

export default MainCatalog;