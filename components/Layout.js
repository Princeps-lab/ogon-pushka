import React, {useContext} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from './Header';
import MobHeader from './MobHeader';
import { ProductsContext } from '../context/context.js';

const Footer = dynamic(
  () => import('../components/Footer')
)
export const siteTitle = 'Ogon Pushka';

const Layout = ({children}) => {
  const store = useContext(ProductsContext);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" /> 
        <meta
          name="viewport"
          content=" width=device-width, initial-scale=1 maximum-scale=1"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      { store?.desktop ? <Header /> : <MobHeader /> }
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;