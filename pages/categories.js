import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

const Categories = () => {
  return (
    <Layout>
      <div>Categories</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};
export default Categories;