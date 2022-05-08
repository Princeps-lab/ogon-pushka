import Head from 'next/head';
import React, { useContext } from 'react';
import {ProductsContext} from '../../context/context.js';
import apiProducts from '../../helpers/apiProducts';
import Layout, { siteTitle } from '../../components/Layout';
import SocialBlock from '../../components/SocialBlock';
import MobSocial from '../../components/MobSocial';
import CatalogContent from '../../components/CatalogContent';

const api = new apiProducts();

const Catalog = ({categorie}) => {
  const context = useContext(ProductsContext);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CatalogContent categorie={categorie} />
      {context.desktop ? <SocialBlock /> : <MobSocial />}
    </Layout>
  )
};

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  if (!params?.categorieID) {
    return {
      notFound: true
    }
  }
  try {
    const [ categorie ] = await Promise.all([
      params?.categorieID !== "new" ?
      api.getCategorie(params?.categorieID).then(categorie => categorie) :
      api.getNew().then(categorie => categorie)
    ])
    return {
      props: {
        categorie
      }
    }
  }

  catch (error) {
    return {
      props: {}
    }
  }

}

export default Catalog;