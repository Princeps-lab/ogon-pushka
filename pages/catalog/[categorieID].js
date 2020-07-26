import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../api/api';
import Layout, { siteTitle } from '../../components/Layout';
import SocialBlock from '../../components/SocialBlock';
import CatalogContent from '../../components/CatalogContent';

const Catalog = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CatalogContent idCategorie={router.query.categorieID} api={api} />
      <SocialBlock />
    </Layout>
  )
};

export default Catalog;