import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div>About Us</div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
};

export default AboutUs;