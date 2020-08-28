import React, {useContext} from 'react';
import {ProductsContext} from '../context/context.js';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Main from '../components/Main';
import Extra from '../components/Extra';
import Description from '../components/Description';
import MainCatalog from '../components/MainCatalog';
import SocialBlock from '../components/SocialBlock';



const App = () => {

  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main/>
      <Extra/>
      <Description />
      <MainCatalog />
      <Description />
      <SocialBlock />
    </Layout>
  )
};

export default App;