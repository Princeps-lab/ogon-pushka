import Link from 'next/link';

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
    link: "/about-us",
    name: "о нас",
    id: 3,
    as: "/aboutUs"
  },
];

const NavHeader = () => {
  return pagesLink.map(item => {
    return (
      <Link href={item.link} as={item.as}><a>{item.name}</a></Link>
    );
  });
};

export default NavHeader;