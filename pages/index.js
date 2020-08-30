import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Extra from '../components/Extra';
import Description from '../components/Description';
import MainCatalog from '../components/MainCatalog';
import SocialBlock from '../components/SocialBlock';
import SimpleSlider from '../components/SimpleSlider/index.js';
import MobExtra from '../components/MobExtra/index.js';



const App = () => {

  const context = useContext(ProductsContext);
  console.log(context.desktop);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main/>
      { context.desktop ? <Extra /> : <MobExtra/> }
      <Description />
      { context.desktop ? <MainCatalog /> : <MobExtra /> }
      { context.desktop ? <Description /> : <Description /> }
      { context.desktop ? <SocialBlock /> : null }
    </Layout>
  )
};

export default App;