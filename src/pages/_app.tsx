/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/global.css';
import '../../styles/dist.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
