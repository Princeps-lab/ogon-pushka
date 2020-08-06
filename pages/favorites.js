import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';

const Favorites = () => {
  return (
    <Layout>
      <div>Favorites</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SocialBlock />
    </Layout>
  );
};
export default Favorites;