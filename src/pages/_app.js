import '@/styles/globals.css'
import '@/styles/Layout.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layout';
import * as React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Script from 'next/script';



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
       <Script id='ga4-property-part-1' strategy='lazyOnLoad' src="https://www.googletagmanager.com/gtag/js?id=G-SN6T68SP47"/>
<Script id='ga4-property-part-2' strategy='lazyOnLoad'>
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SN6T68SP47');
  `}
</Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  );
}
