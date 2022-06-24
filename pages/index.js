import { useState,useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Hero from '../sactions/hero';
import About from '../sactions/about';
import Skills from '../sactions/skills';
import Contact from '../sactions/contact';
import Projects from '../sactions/projects';
import Footer from '../sactions/footer';
import Head from "next/head"
export default function Home() {
  
  

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
  <Navbar />
  <Hero/>
  <About/>
  <Projects/>
  <Skills/>
    <Contact/>
    <Footer/>
  </>
  )
}
