import React, { useState,useContext } from 'react';
import Link from 'next/link';

import { ProductsContext } from '../../context/context.js';
import Logo from './Logo';
import NavHeader from './NavHeader';
import Basket from './Basket';

import style from "./header.module.css"

const Header = () => {
  const store = useContext(ProductsContext);
  const [ isShown, setIsShown ] = useState(false);

  const setSub = (bool) => setIsShown(bool);

  return(
    <div
      onMouseLeave={() => setIsShown(false)}
      className={style.header}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      {
        store.desktop ?
          <div><NavHeader isShown={isShown} setShow={setSub} /></div> : null
      }
      <div onMouseEnter={() => setIsShown(false)}><Basket /></div>
    </div>
  );

};

export default Header;
