import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

const Faq = () => {
  return (
    <Layout>
      <div>FAQ</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};
export default Faq;