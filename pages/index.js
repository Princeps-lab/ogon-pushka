import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Extra from '../components/Extra';
import Description from '../components/Description';
import MainCatalog from '../components/MainCatalog';

const App = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main/>
      <Extra/>
      <Description />
      <MainCatalog />
    </Layout>
  )
};

export default App;