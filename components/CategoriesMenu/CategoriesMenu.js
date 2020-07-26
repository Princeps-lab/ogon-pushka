import Link from 'next/link';
import style from './CategorisMenu.module.css';
import CatalogItem from '../CatalogItem';
import Button from '../Button';

const ButtonCategories = ({item}) => {
  return (
      <Link
      as={`/catalog/${item.id}`}
      href={`/catalog/[categorieID]`}><a className={style.btnCategories}>{item.title}</a></Link>
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
          <CatalogItem url="/images/categories1.jpg" title="Paragraphs" />
          <CatalogItem url="/images/categories2.jpg" title="Paragraphs" />
        </div>
      </div>

      <div className={style.rightBlock}  style={{"background" : `url("/images/CatalogMenu.jpg") center / cover`}} >
        <div className={style.content}>
          <p>Paragraph</p>
          <Button white text="Подробнее" />
        </div>
      </div>
    </div>
  )
};

export default CategoriesMenu;