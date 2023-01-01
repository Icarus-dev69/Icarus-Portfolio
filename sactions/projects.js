import Link from 'next/link'
import React from 'react'
import styles from "../styles/Projects.module.css"
import { Icon } from '@iconify/react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <div className='container'>
        <section className={styles.projectsSection}>
        <p className={`water-mark ${styles.projectsWatermark}`}>Projects</p>
        <h2 className='header'>
          Projects
          <svg className='header-svg' width="90" height="7" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.0959 0L60.0822 5.73173L45.0593 0L30.0456 5.73173L15.0319 0L0 5.74224L1.72599 6.35185L15.0319 1.26827L30.0456 7L45.0593 1.26827L60.0822 7L75.0959 1.26827L88.347 6.32383L90 5.68618L75.0959 0Z" className='accentSvgPrimary'/>
          </svg>

        </h2>
        <p className={styles.warning}>Websites might take 10s to 15s to load</p>
        
            
            <div className={styles.projectsContainer}>
                <Link href="/projects">
                    <a className={styles.seeAllbtn}>See All
                    <Icon className={styles.seeAllArrow} icon="bi:arrow-down-right" />
                    </a>
                </Link>
                <Card projectImg={"/project1.png"} projectName={"Icarus Cafe"} projectLink={"https://cafe-bar.vercel.app/"}/>
                <Card projectImg={"/project2.png"} projectName={"Icandi Furniture"} projectLink={"https://icand-i-furniture.vercel.app/"}/>
                <Card projectImg={"/project3.png"} projectName={"Icandy Portfolio"} projectLink={"https://portfolio-umber-beta.vercel.app/"}/>
                <Card projectImg={"/project4.png"} projectName={"Icarus Ecommerce"} projectLink={"https://ecommerce-client-sandy.vercel.app/"}/>
            </div>

        </section>
    </div>
  )
}

export default Projects