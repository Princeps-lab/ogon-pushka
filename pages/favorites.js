import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Extra from '../components/Extra';
import FavoritesContent from '../components/FavoritesContent';

const Favorites = () => {
  return (
    <Layout>
      <div>Favorites</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FavoritesContent/>
      <Extra />
    </Layout>
  );
};
export default Favorites;