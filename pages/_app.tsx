import { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../redux/store";
import Layout from "../components/Layout/Layout";
import "../styles/styles.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Next Boilerplate</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default wrapper.withRedux(MyApp);
