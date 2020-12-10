import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Layout, { siteTitle } from '../components/Layout';
import Preloader from '../components/Preloader/index.js';

const Main = dynamic(
  () => import('../components/Main'),
  { loading: () => <Preloader/> }
)

const SocialBlock = dynamic(() => import('../components/SocialBlock'));
const MobSocial = dynamic(() => import('../components/MobSocial'));
const MainCatalog = dynamic(() => import('../components/MainCatalog'));
const MobExtra = dynamic(() => import('../components/MobExtra'));
const Extra = dynamic(() => import('../components/Extra'));
const Description = dynamic(() => import('../components/Description'));
const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {ssr: false});

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
        <Description />
        { context.desktop ? <SocialBlock /> : <MobSocial /> }
      </Layout>
  )
};

export default App;