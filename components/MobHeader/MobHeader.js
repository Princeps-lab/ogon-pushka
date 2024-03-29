import React, {useContext, useState} from 'react'
import { ProductsContext } from '../../context/context.js';
import Link from 'next/link';

import style from './mobHeader.module.css';
import Logo from '../Header/Logo';
import Basket from '../Header/Basket';
import MobNavHeader from './MobNavHeader';

const MobHeader = () => {

  const store = useContext(ProductsContext);
  const [ showNav, setShowNav ] = useState(false);

  const showOff = (value) => {
    setShowNav(value);
    const body = document.body;
    body.style.overflow = 'visible';
    body.style.position = 'relative';
  }

  const showOn = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    setShowNav(true);
  }

  const showOnBasket = () => {
    store.setShow(true);
    if(!store.desktop) {
      const body = document.body;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
    } 
  };

  return (
    <div className={style.header}>
      <MobNavHeader setShow={(value) => showOff(value)} isShown={showNav} />
      <Basket />
      <div onClick={() => showOn(true)} className={style.burger}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z" fill="black"/>
        </svg>
      </div>
      <div className={style.heart}>
        <Link href="/favorites" passHref>
          <>
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.9131 0.495075C14.702 0.168228 15.5474 0 16.4013 0C17.2551 0 18.1006 0.168229 18.8894 0.495075C19.6781 0.821861 20.3947 1.30081 20.9982 1.90455C21.602 2.5081 22.0813 3.22501 22.408 4.01368C22.7349 4.80249 22.9031 5.64797 22.9031 6.50183C22.9031 7.35568 22.7349 8.20116 22.408 8.98997C22.0812 9.77872 21.6022 10.4953 20.9984 11.0989C20.9983 11.099 20.9985 11.0989 20.9984 11.0989L12.1584 19.9389C11.7679 20.3295 11.1347 20.3295 10.7442 19.9389L1.90418 11.0989C0.684956 9.8797 0 8.22607 0 6.50183C0 4.77758 0.684956 3.12395 1.90418 1.90472C3.12341 0.68549 4.77704 0.000534773 6.50129 0.000534773C8.22554 0.000534773 9.87917 0.68549 11.0984 1.90472L11.4513 2.25761L11.804 1.90488C11.8041 1.90483 11.804 1.90494 11.804 1.90488C12.4076 1.30106 13.1244 0.821892 13.9131 0.495075ZM16.4013 2C15.8102 2 15.2248 2.11647 14.6787 2.34274C14.1326 2.56902 13.6365 2.90068 13.2186 3.31877L12.1584 4.37893C11.7679 4.76946 11.1347 4.76946 10.7442 4.37893L9.68418 3.31893C8.84003 2.47478 7.69511 2.00053 6.50129 2.00053C5.30747 2.00053 4.16255 2.47478 3.3184 3.31893C2.47424 4.16309 2 5.30801 2 6.50183C2 7.69564 2.47424 8.84056 3.3184 9.68472L11.4513 17.8176L19.5842 9.68472C20.0023 9.26683 20.3341 8.77049 20.5604 8.22439C20.7866 7.67828 20.9031 7.09295 20.9031 6.50183C20.9031 5.9107 20.7866 5.32537 20.5604 4.77926C20.3341 4.23316 20.0024 3.73699 19.5843 3.3191C19.1665 2.90101 18.67 2.56902 18.1239 2.34274C17.5778 2.11647 16.9924 2 16.4013 2Z" fill="black"/>
          </svg>
          </>
        </Link>
      </div>
      <div className={style.logo}>
        <Link href='/' passHref>
          <Logo width='25' height='40'/>
        </Link>
      </div>
      <div className={style.search}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.9428 15.9429C16.3333 15.5524 16.9665 15.5524 17.357 15.9429L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0977 20.6833 22.0977 20.2928 21.7071L15.9428 17.3571C15.5523 16.9666 15.5523 16.3334 15.9428 15.9429Z" fill="black"/>
        </svg>
      </div>

      <div onClick={() => showOnBasket()} className={style.basket}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.298 5 23.5805 5.13293 23.7705 5.36256C23.9605 5.59218 24.0381 5.89458 23.9823 6.18733L22.3809 14.5848C22.2437 15.2754 21.868 15.8958 21.3195 16.3373C20.7738 16.7766 20.0916 17.011 19.3914 17H9.68864C8.98837 17.011 8.3062 16.7766 7.76048 16.3373C7.21225 15.8959 6.83664 15.2759 6.69933 14.5857C6.69927 14.5854 6.69939 14.5859 6.69933 14.5857L5.02879 6.2392C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2H1C0.447715 2 0 1.55228 0 1ZM7.22073 7L8.66084 14.1952C8.70656 14.4254 8.83179 14.6322 9.01461 14.7793C9.19743 14.9265 9.42619 15.0047 9.66084 15.0002L9.68 15H19.4L19.4192 15.0002C19.6538 15.0047 19.8826 14.9265 20.0654 14.7793C20.2474 14.6328 20.3723 14.4273 20.4185 14.1984L21.7913 7H7.22073Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

    </div>
  )
};

export default MobHeader;