import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import CategoriesMenu from '../components/CategoriesMenu';
import Extra from '../components/Extra';

import apiProducts from '../api/apiProducts';

const api = new apiProducts();

const Categories = () => {

  const [ functions, setFunctions ] = useState([]);

  useEffect(() => {
    api.getCategories().then( categories => {
      setFunctions(categories);
    })
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <CategoriesMenu arr={functions} />
      <Extra />

    </Layout>
  );
};
export default Categories;