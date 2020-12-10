import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Layout, { siteTitle } from '../components/Layout';
// import Main from '../components/Main';
import Extra from '../components/Extra';
import Description from '../components/Description';
import MainCatalog from '../components/MainCatalog';
// import SocialBlock from '../components/SocialBlock';
import MobSocial from '../components/MobSocial';
import MobExtra from '../components/MobExtra/index.js';
import VideoPlayer from '../components/VideoPlayer/index.js';
import Preloader from '../components/Preloader/index.js';

const Main = dynamic(
  () => import('../components/Main'),
  { loading: () => <Preloader/> }
)

const SocialBlock = dynamic(
  () => import('../components/SocialBlock')
)

const App = () => {
  const context = useContext(ProductsContext);
  return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {context.home ?  <Main hero={context.home.hero} /> : <Preloader/>}
        { context.desktop ? <Extra /> : <MobExtra mobExtra /> }
        {typeof window !== 'undefined' ?<VideoPlayer /> : null}
        { context.desktop ? <MainCatalog /> : <MobExtra /> }
        { context.desktop ? <Description /> : <Description /> }
        { context.desktop ? <SocialBlock /> : <MobSocial /> }
      </Layout>
  )
};

export default App;