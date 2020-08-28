import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import NavHeader from './NavHeader';
import Basket from './Basket';

import style from "./header.module.css"

const Header = () => {
  const [ isShown, setIsShown ] = useState(false);

  const setSub = (bool) => setIsShown(bool);

  return(
    <div
      onMouseLeave={() => setIsShown(false)}
      className={style.header}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <div><NavHeader isShown={isShown} setShow={setSub} /></div> 
      <div onMouseEnter={() => setIsShown(false)}><Basket /></div>
    </div>
  );

};

export default Header;
