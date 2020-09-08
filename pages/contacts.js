import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';

import Layout, { siteTitle } from '../components/Layout';
import SocialBlock from '../components/SocialBlock';
import ContactBlock from '../components/ContactBlock';
import MobSocial from '../components/MobSocial';

const Contacts = () => {

  const context = useContext(ProductsContext);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ContactBlock />
      { context.desktop ? <SocialBlock /> : <MobSocial /> }
    </Layout>
  );
};

export default Contacts;