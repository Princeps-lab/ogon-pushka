import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import api from '../../api/api';
import Layout, { siteTitle } from '../../components/Layout';
import MainCatalog from '../../components/MainCatalog';
import ProductContent from '../../components/ProductContent';

const Product = () => {
  const [ product, setProduct ] = useState(false);
  const router = useRouter();
  const arrProduct = [...api[0].categories, ...api[1].categories, ...api[2].categories];

  useEffect(() => {
    const product = arrProduct[localStorage.parentId].products[router.query.productId];
    setProduct(product);
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {product ?
        <>
          <ProductContent product={product}/>
          <MainCatalog />
        </>
      : null}
    </Layout>
  );
};

export default Product;