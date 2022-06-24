import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import { Icon } from '@iconify/react';
import Head from "next/head"

const Thankyou = () => {
  return (
    <>
    <Head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Icarus Web Developer Portfolio</title>
        <meta name="description" content='Portfolio of a Web Developer who speicalizes in front-end development'></meta>
        <meta name="author" content="Thurein Win"></meta>
        <meta name="keywords" content="portfolio,HTML,CSS,Javascript,Reactjs,Figma,Nodejs,Expressjs,Nextjs,Front-end development"></meta>
      </Head>
        <Navbar/>
        <h1 className='thankyou-text'>Thank You for Contacting.</h1>
        <Link href="/" passHref>
            <a className='thankyou-link'>
            <Icon className="goback-arrow" icon="bi:arrow-down-right" />
            Go Back
            </a>
        </Link>
    </>
  )
}

export default Thankyou