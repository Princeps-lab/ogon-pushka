import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React, {useContext} from 'react';
import {ProductsContext} from '../../context/context.js';
import api from '../../api/api';
import Layout, { siteTitle } from '../../components/Layout';
import MainCatalog from '../../components/MainCatalog';
import MobExtra from '../../components/MobExtra';
import ProductContent from '../../components/ProductContent';

const Product = () => {
  const [ product, setProduct ] = useState(false);
  const router = useRouter();
  const arrProduct = [...api[0].categories, ...api[1].categories, ...api[2].categories];
  const context = useContext(ProductsContext);
  useEffect(() => {
    const productItem = arrProduct[localStorage.parentId].products.filter(item => item.id == router.query.productId);
    
    if(productItem.length) {
      setProduct(productItem[0]);
    }
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