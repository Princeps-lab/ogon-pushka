import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';
import AboutContent from '../components/AboutContent';

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AboutContent/>
      <SocialBlock />
    </Layout>
  )
};

export default AboutUs;