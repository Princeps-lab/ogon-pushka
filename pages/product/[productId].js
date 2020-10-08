import React, {useEffect, useState, useContext} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {ProductsContext} from '../../context/context.js';
import Layout, { siteTitle } from '../../components/Layout';
import MainCatalog from '../../components/MainCatalog';
import MobExtra from '../../components/MobExtra';
import ProductContent from '../../components/ProductContent';
import apiProducts from '../../api/apiProducts';

const api = new apiProducts();

const Product = () => {
  const [ product, setProduct ] = useState(false);
  const router = useRouter();
  const context = useContext(ProductsContext);

  useEffect(() => {
    api.getCategorie(localStorage.parentId).then(categorie => {
      const productItem = categorie.products.filter(item => item.id == router.query.productId);
      setProduct(productItem[0]);
    });
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {product ?
        <>
          <ProductContent product={product}/>
          { context.desktop ? <MainCatalog /> : <MobExtra /> }
        </>
      : null}
    </Layout>
  );
};

export default Product;