import SimpleSlider from '../SimpleSlider';
import CatalogItem from '../CatalogItem';
import style from './mainCatalog.module.css';

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

const Right = () => {
  return(
    <div className={style.right}>
      <CatalogItem url="/images/extraLeft.jpg" title="Paragraphs" />
      <CatalogItem url="/images/extraRight.jpg" title="Paragraphs"/>
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