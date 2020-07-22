import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';
import ContactBlock from '../components/ContactBlock';

const Contacts = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ContactBlock />
      <SocialBlock />
    </Layout>
  );
};

export default Contacts;