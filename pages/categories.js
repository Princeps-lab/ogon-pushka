import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import CategoriesMenu from '../components/CategoriesMenu';
import Extra from '../components/Extra';

import products from '../api/api';

const Categories = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <CategoriesMenu arr={[...products[0].categories,...products[1].categories, ...products[2].categories]} />
      <Extra />

    </Layout>
  );
};
export default Categories;