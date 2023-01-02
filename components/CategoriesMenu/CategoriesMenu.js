import Link from 'next/link';
import style from './CategorisMenu.module.css';
import Button from '../Button';

const ItemSlider = ({url, title}) => {
  return (
    <div className={style.catalogItem} style={{"background" : `url(${url}) center / cover`}}>
      <div className={style.button}>
        <div className={style.itemTitle}>{title}</div>
        <Button text="ДЕТАЛЬНІШЕ" />
      </div>
    </div>
  );
};

const ButtonCategories = ({item}) => {
  return (
      <Link
        as={`/catalog/${item.id}`}
        href={`/catalog/[categorieID]`}>
        <a className={style.btnCategories}>{item.name}</a>
      </Link>
  );
};

const CategoriesMenu = ({arr}) => {

  return (
    <div className={style.main}>
      <div className={style.leftBlock}>
        <div className={style.menu}>
          {
            arr.map((item) => {
              return (
                <ButtonCategories item={item} key={item.id} />
              )
            })
          }
        </div>
        <div className={style.others}>
          <ItemSlider url="/images/categories1.jpg" title="Paragraphs" />
          <ItemSlider url="/images/categories2.jpg" title="Paragraphs" />
        </div>
      </div>

      <div className={style.rightBlock}  style={{"background" : `url("/images/CatalogMenu.jpg") center / cover`}} >
        <div className={style.content}>
          <p>Paragraph</p>
          <Button white text="ДЕТАЛЬНІШЕ" />
        </div>
      </div>
    </div>
  )
};

export default CategoriesMenu;