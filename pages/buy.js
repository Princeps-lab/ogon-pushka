import Layout, { siteTitle } from '../components/Layout';
import Head from 'next/head';
import FastBuy from '../components/FastBuy';

const Buy = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FastBuy />
    </Layout>
  );
};

export default Buy;