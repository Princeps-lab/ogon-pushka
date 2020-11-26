import Head from 'next/head';
import React, {useContext} from 'react';
import {ProductsContext} from '../../context/context.js';
import { useRouter } from 'next/router';

import Layout, { siteTitle } from '../../components/Layout';
import SocialBlock from '../../components/SocialBlock';
import MobSocial from '../../components/MobSocial';
import CatalogContent from '../../components/CatalogContent';

const Catalog = () => {
  const router = useRouter();
  const context = useContext(ProductsContext);
  console.log(router.query.categorieID)
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CatalogContent idCategorie={router.query.categorieID} />
      { context.desktop ? <SocialBlock /> : <MobSocial /> }
    </Layout>
  )
};

export default Catalog;