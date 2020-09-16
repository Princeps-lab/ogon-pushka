import Layout, { siteTitle } from '../components/Layout';
import Head from 'next/head';
import FormContent from '../components/FormContent';

const Form = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FormContent/>
    </Layout>
  );
};

export default Form;