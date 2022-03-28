import Layout, { siteTitle } from '../components/Layout';
import Head from 'next/head';

const Form = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <FormContent/> */}
    </Layout>
  );
};

export default Form;