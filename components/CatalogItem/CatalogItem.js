import style from './CatalogItem.module.css';


const CatalogItem = ({url, title, price}) => {
  return(
    <div className={style.catalogItem}>
      <div style={{"background" : `url(${url}) center / cover`,
      "height" :"100%", "position": "relative"}}>
      </div>
      <div className={style.title}>
        <div className={style.name}>
          <div className={style.itemTitle}>{title}</div>
          <img src="/icons/basket.svg"></img>
        </div>
        <div className={style.itemTitle}>{price}.грн</div>
      </div>
    </div>
  )
};

export default CatalogItem;