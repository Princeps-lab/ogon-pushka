import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';

import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Extra from '../components/Extra';
import MobExtra from '../components/MobExtra';
import FavoritesContent from '../components/FavoritesContent';

const Favorites = () => {

  const context = useContext(ProductsContext);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FavoritesContent/>
      { context.desktop ? <Extra /> : <MobExtra /> }
    </Layout>
  );
};
export default Favorites;