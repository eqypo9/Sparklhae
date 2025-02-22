import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <title>Sparkle | Portfolio</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
