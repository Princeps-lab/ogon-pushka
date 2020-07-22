import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';

const Contacts = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SocialBlock />
    </Layout>
  );
};

export default Contacts;