import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';

import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';
import AboutContent from '../components/AboutContent';
import MobSocial from '../components/MobSocial';

const AboutUs = () => {
  const context = useContext(ProductsContext);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AboutContent/>
      { context.desktop ? <SocialBlock /> : <MobSocial /> }
    </Layout>
  )
};

export default AboutUs;