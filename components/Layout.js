import React, {useContext, useEffect, useState} from 'react';
import Head from 'next/head'
import Header from './Header';
import MobHeader from './MobHeader';
import Footer from './Footer';
import Preloader from './Preloader';
import { ProductsContext } from '../context/context.js';


export const siteTitle = 'Ogon Pushka';

const Layout = ({children}) => {
  const store = useContext(ProductsContext);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    loading ? <Preloader /> :
    <div>
      <Head> 
      <meta
        name="viewport"
        content=" width=device-width, initial-scale=1 maximum-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { store.desktop ? <Header /> : <MobHeader /> }
      <main>{children}</main>
      <Footer />
      
    </div>
  );
};

export default Layout;