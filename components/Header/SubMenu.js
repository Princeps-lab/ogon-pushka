
import styles from './submenu.module.css';
import Link from 'next/link';

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

const ItemSub = ({list, title}) => {
  return (
    <>
      <div className={styles.titleSubItem}>
        {title}
      </div>
      <div className={styles.links}>
        {
          list.map((item) => {
            return <Link href='/categories' key={item.id}><a>{item.title}</a></Link>
          })
        }
      </div>
    </>
  )
};

const SubMenu = ({isShown}) => {
  return (
    <div className={isShown ? styles.subMenu : styles.off}>

      <div className={styles.subItem}>
        <ItemSub title='Верх' list={up} />
      </div>

      <div className={styles.subItem}>
        <ItemSub title='Верх' list={up} />
      </div>

      <div className={styles.subItem}>
        <ItemSub title='Верх' list={up} />
      </div>

      <div className={styles.subBg}  style={{"background" : `url('/images/background.jpg') center / cover`}} >
      </div>
    </div>
  )
};

export default SubMenu;