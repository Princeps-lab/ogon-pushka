import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Extra from '../components/Extra';
import Description from '../components/Description';
import MainCatalog from '../components/MainCatalog';
import SocialBlock from '../components/SocialBlock';
import MobSocial from '../components/MobSocial';
import MobExtra from '../components/MobExtra/index.js';
import VideoPlayer from '../components/VideoPlayer/index.js';

const App = () => {
  const context = useContext(ProductsContext);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      { context.home ? <Main hero={context.home.hero} /> : null }
      { context.desktop ? <Extra /> : <MobExtra mobExtra /> }
      <VideoPlayer />
      { context.desktop ? <MainCatalog /> : <MobExtra /> }
      { context.desktop ? <Description /> : <Description /> }
      { context.desktop ? <SocialBlock /> : <MobSocial /> }
    </Layout>
  )
};

export default App;