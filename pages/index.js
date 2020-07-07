import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Extra from '../components/Extra';

const App = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main/>
      <Extra/>
    </Layout>
  )
};

export default App;