
import styles from './submenu.module.css';

const SubMenu = ({isShown}) => {
  return (
    <div className={isShown ? styles.subMenu : styles.off}>
      <div className={styles}>

      </div>

      <div className={styles}>

      </div>

      <div className={styles}>

      </div>

      <div className={styles.subBg}>

      </div>
    </div>
  )
};

export default SubMenu;