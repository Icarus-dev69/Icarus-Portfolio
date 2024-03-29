import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/ProjectsPage.module.css"
import Card from '../components/Card'
import Footer from '../sactions/footer'
import Head from "next/head"

const Projects = () => {
  return (
    <div>
      <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Icarus Web Developer Portfolio</title>
        <meta name="description" content='Portfolio of a Web Developer who speicalizes in front-end development'></meta>
        <meta name="author" content="Thurein Win"></meta>
        <meta name="keywords" content="portfolio,HTML,CSS,Javascript,Reactjs,Figma,Nodejs,Expressjs,Nextjs,Front-end development"></meta>
      </Head>
        <Navbar/>
        <div className='container'>
            <div className={styles.projectsContainer}>
                    <Card projectImg={"/project1.png"} projectName={"Icarus Cafe"} projectLink={"https://cafe-bar.vercel.app/"}/>
                    <Card projectImg={"/project2.png"} projectName={"Icandi Furniture"} projectLink={"https://icand-i-furniture.vercel.app/"}/>
                    <Card projectImg={"/project3.png"} projectName={"Icandy Portfolio"} projectLink={"https://portfolio-umber-beta.vercel.app/"}/>
                    <Card projectImg={"/project4.png"} projectName={"Icarus Ecommerce"} projectLink={"https://ecommerce-client-sandy.vercel.app/"}/>
                    
            </div>
            <div className={styles.projectsContainer}>
                <Card projectImg={"/project5.png"} projectName={"Icarus Ecommerce"} smallText={"(Admin)"} projectLink={"https://icarus-ecommerce-admin.herokuapp.com/"}/>
                <Card projectImg={"/project6.png"} projectName={"YC Fitness"} projectLink={"https://www.yc.fitness/"}/>
                <Card projectImg={"/peep-kicks.png"} projectName={"Peep Kicks"} projectLink={"https://peep-kicks.vercel.app/"}/>
                <Card projectImg={"/charity.png"} projectName={"Peach Charity"} projectLink={"https://charity-peach.vercel.app/"}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects