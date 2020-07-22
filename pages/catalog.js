import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import SocialBlock from '../components/SocialBlock';
import CatalogContent from '../components/CatalogContent';

const Catalog = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CatalogContent />
      <SocialBlock />
    </Layout>
  )
};

export default Catalog;