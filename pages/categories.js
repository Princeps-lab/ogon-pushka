import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import CategoriesMenu from '../components/CategoriesMenu';
import Extra from '../components/Extra';

import style from '../styles/catalog.module.css';

const links = [
  {
    id: 0,
    title: "футболки"
  },
  {
    id: 1,
    title: "шорты"
  },
  {
    id: 2,
    title: "спортивные штаны"
  },
  {
    id: 3,
    title: "брюки"
  },
  {
    id: 4,
    title: "худи"
  },
  {
    id: 5,
    title: "Свитшоты"
  },
  {
    id: 6,
    title: "ветровки"
  },
  {
    id: 7,
    title: "куртки"
  },
  {
    id: 8,
    title: "сумки"
  },
  {
    id: 9,
    title: "носки"
  }
];

const Categories = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <CategoriesMenu arr={links} />
      <Extra />

    </Layout>
  );
};
export default Categories;