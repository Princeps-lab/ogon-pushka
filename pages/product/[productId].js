import React, {useEffect, useState, useContext} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {ProductsContext} from '../../context/context.js';
import Layout, { siteTitle } from '../../components/Layout';
import MainCatalog from '../../components/MainCatalog';
import MobExtra from '../../components/MobExtra';
import ProductContent from '../../components/ProductContent';
import apiProducts from '../../helpers/apiProducts';

const api = new apiProducts();

const Product = () => {
  const [ product, setProduct ] = useState(false);
  const router = useRouter();
  const context = useContext(ProductsContext);
  const productId = router.query.productId;

  useEffect(() => {
    if(productId) {
      api.getProduct(productId).then(product => {
        setProduct(product);
      });
    }
  }, [productId]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {product ?
        <>
          <ProductContent product={product}/>
          { context.desktop ? <MainCatalog  /> : <MobExtra /> }
        </>
      : null}
    </Layout>
  );
};

export default Product;