import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import FaqContent from '../components/FaqContent';

const Contacts = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FaqContent/>
    </Layout>
  );
};

export default Contacts;