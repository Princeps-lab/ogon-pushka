import CatalogItem from '../CatalogItem';
import style from './CatalogContent.module.css';


const up = [
  {
    id: 0,
    title: "футболки"
  },
  {
    id: 1,
    title: "худи"
  },
  {
    id: 2,
    title: "Свитшоты"
  },
  {
    id: 3,
    title: "ветровки"
  },
  {
    id: 4,
    title: "куртки"
  }
];

const down = [
  {
    id: 0,
    title: "шорты"
  },
  {
    id: 1,
    title: "спортивные штаны"
  },
  {
    id: 2,
    title: "брюки"
  }
];

const access = [
  {
    id: 0,
    title: "сумки"
  },
  {
    id: 1,
    title: "носки"
  }
];

const NavItem = ({arr, title}) => {
  return (
    <div>
      <h3 className={style.navTitle}>{title}</h3>
      {
        arr.map((item) => {
        return (<span className={style.link} key={item.id}>{item.title}</span>)
      })
      }
    </div>
  )
};

const CatalogContent = () => {
  return (
    <div className={style.catalog}>

      <div className={style.nav} >
        <NavItem arr={up} title="Верх" />
        <NavItem arr={down} title="Низ" />
        <NavItem arr={access} title="аксуссуары" />
      </div>

      <div className={style.items} >
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item4.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item5.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item6.jpg' />
        <CatalogItem textBtn="Купить" title="Худи Scratch" url='/images/catalog/item7.jpg' />
      </div>
    </div>
  )
}

export default CatalogContent;