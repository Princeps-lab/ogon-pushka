import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import Header from './Header';
import Footer from './Footer';


export const siteTitle = 'Ogon Pushka';

const Layout = ({children}) => {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  )
};

export default Layout;