import '@/styles/globals.css'
import '@/styles/Layout.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layout';
import * as React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";



export default function App({ Component, pageProps }) {
    useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      once: false,
      mirror: false,
      offset: 100,
      duration: 400,
    });
  }, []);
  return (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  );
}
