import style from './CatalogItem.module.css';
import Button from '../Button';

const CatalogItem = ({url, title, textBtn = "Подробнее"}) => {
  return(
    <div className={style.catalogItem} style={{"background" : `url(${url}) center / cover`}}>
      <div className={style.button}>
        <div className={style.itemTitle}>{title}</div>
        <Button text={textBtn} />
      </div>
    </div>
  )
};

export default CatalogItem;