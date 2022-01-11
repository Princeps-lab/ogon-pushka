import Layout, { siteTitle } from '../components/Layout';
import Head from 'next/head';
import polits from '../helpers/apiPolite';
import PoliteContent from '../components/PoliteContent';

const Politics = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PoliteContent arr={polits} />
    </Layout>
  );
};

export default Politics;