import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

const Contacts = () => {
  return (
    <Layout>
      <div>Contacts</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default Contacts;