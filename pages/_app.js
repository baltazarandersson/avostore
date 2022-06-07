import "../styles/globals.css";
import Layout from "@components/Layout/Layout";
import CartProvider from "@store/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
