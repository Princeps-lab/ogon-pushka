import Link from 'next/link';

import style from "./header.module.css"

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

const NavHeader = () => {
  const links = pagesLink.map(item => {
    return (
      <Link key={item.id} href={item.link}><a>{item.name}</a></Link>
    );
  });

  return (
    <div className={style.headerNav}>
      {links}
    </div>
  )
};

export default NavHeader;