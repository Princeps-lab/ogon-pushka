import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main/>
    </Layout>
  )
};

export default App;