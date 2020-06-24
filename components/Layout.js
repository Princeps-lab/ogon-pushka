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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Open+Sans:wght@700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  )
};

export default Layout;