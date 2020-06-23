import Link from 'next/link'
import Logo from './Logo';
import NavHeader from './NavHeader';

import style from "./header.module.css"

const Header = () => {

  return(
    <div className={style.header}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <div><NavHeader/></div>
    </div>
  );
};

export default Header;
