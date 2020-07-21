import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

const Catalog = () => {
  return (
    <Layout>
      <div>Catalog</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
};

export default Catalog;