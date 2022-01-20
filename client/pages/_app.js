import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Body_title.css'
import '../styles/Body_About.css'
import '../styles/Body_Store.css'
import '../styles/Store_List.css'
import '../styles/Store_Info.css'
import '../styles/404.css'

import React, { useState } from 'react';
import Head from 'next/head'


import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'

function MyApp({ Component, pageProps }) {


  return (
    <>
     <Head>
        <title>YUMMY FOOD STORE</title>
     </Head>
     <Header/>
     <Component {...pageProps} />
     <Footer/>
    </>
  )
}

export default MyApp
