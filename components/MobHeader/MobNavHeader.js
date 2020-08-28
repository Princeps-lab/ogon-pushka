import React from 'react';

import Link from 'next/link';
import style from "./mobHeader.module.css"
import SubMenu from './SubMenu';

const pagesLink = [
  {
    link: "/categories",
    name: "категории товаров",
    id: 0,
    as: "/categories"
  },
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

const MobNavHeader = ({setShow, isShown}) => {
  
  const links = pagesLink.map(item => {
    return (
      item.id === 0 ?
      <Link key={item.id}
        href={item.link}>
        <a onMouseEnter={() => setShow(true)}>{item.name}</a></Link> :
      <Link key={item.id} href={item.link}><a onMouseEnter={() => setShow(false)}>{item.name}</a></Link>
     );
  });

  return (
    <div className={style.headerNav}>
      {links}
      <SubMenu isShown={isShown} />
    </div>
  )
};

export default MobNavHeader;