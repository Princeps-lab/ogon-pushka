import '../styles/global.css';
import 'swiper/swiper-bundle.css';
import '../styles/swipper.css';

import {Context} from '../context/context.js';

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}