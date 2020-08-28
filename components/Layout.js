import React, {useContext} from 'react';

import Head from 'next/head'
import Header from './Header';
import MobHeader from './MobHeader';
import Footer from './Footer';
import { ProductsContext } from '../context/context.js';

export const siteTitle = 'Ogon Pushka';

const Layout = ({children}) => {

  const store = useContext(ProductsContext);

  return (
    <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        { store.desktop ? <Header /> : <MobHeader /> }
        <main>{children}</main>
        { store.desktop ? <Footer /> : null }
    </div>
  )
};

export default Layout;