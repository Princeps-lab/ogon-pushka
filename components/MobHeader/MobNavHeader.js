import React from 'react';

import Logo from '../Header/Logo';
import MobSubMenu from './MobSubMenu';
import Link from 'next/link';
import style from "./mobHeader.module.css"

const pagesLink = [
  {
    link: "/contacts",
    name: "контакты",
    id: 1,
    as: "/contacts"
  },
  {
    link: "/faq",
    name: "частые вопросы",
    id: 2,
    as: "/faq"
  },
  {
    link: "/about",
    name: "о нас",
    id: 3,
    as: "/aboutUs"
  },
];

const MobNavHeader = ({isShown, setShow}) => {

  const links = pagesLink.map(item => {
    return (
      <div key={item.id} onClick={() => setShow()}>
        <Link href={item.link}>
          <a className={style.linkMain}>{item.name}</a></Link>
      </div>
     );
  });

  return (
    <div className={ isShown ? style.headerNav : style.headerNavOff }>
      <div className={style.logoNav} onClick={() => setShow()}>
        <Link href="/">
          <a><Logo/></a>
        </Link>
        <div><img src="/icons/close.svg" alt="close" /></div>
      </div>
      <MobSubMenu setShow={setShow} />
      <div className={style.linksMain}>{links}</div>
      <div className={style.number}>068 482 72 75</div>
    </div>
  )
};

export default MobNavHeader;