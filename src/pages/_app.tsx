/* eslint-disable react/react-in-jsx-scope */
import 'styles/global.css';
import 'styles/dist.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
