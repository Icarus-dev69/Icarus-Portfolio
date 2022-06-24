import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'
import styles from "../styles/Hero.module.css"
import { Icon } from '@iconify/react';
import heroImg from "../public/photo_bmw_rmbg_final.png"
const Hero = () => {
  return (
    <div className='container'>
      <section id = "home" className={styles.heroSection}>
          <p className={styles.watermarkBig}>Icarus</p>
          <div className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
              <h3 className={styles.heroTextSmall}>Hi, my name is Thurein Win and I am</h3>
              <h1 className={styles.heroTextBig}>A <span className={styles.heroTextAccent}>
                Web Developer
                <svg width="294" height="27" viewBox="0 0 294 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M245.313 0L196.268 22.1081L147.194 0L98.1491 22.1081L49.1043 0L0 22.1486L5.63822 24.5L49.1043 4.89189L98.1491 27L147.194 4.89189L196.268 27L245.313 4.89189L288.6 24.3919L294 21.9324L245.313 0Z" className='accentSvgAccent'/>
                </svg>

                </span> That You Need</h1>
              <div className={styles.heroCtaContainer}>
                <Link href= "/projects" passHref><a className="ctaMain">Projects</a></Link> 
                <ScrollLink className={styles.heroSecLinkContainer} to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                  <p className={styles.heroSecLinkText}>Contact</p>
                  <Icon className={styles.heroSecLinkArrow} icon="bi:arrow-down-right" />
                </ScrollLink>
              </div>
            </div>
            
            <div className={styles.heroImgContainer}>
              <img src="/photo_bmw_rmbg_final.png"/>
              <svg className={styles.heroImgSvg1} width="312" height="169" viewBox="0 0 312 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              < path d="M279.943 89.8595L204.192 120.882L172.768 45.2692L97.0172 76.2913L65.6259 0.692426L5.53644 25.3101L0.568929 37.1578L60.7046 12.5211L92.0959 88.12L167.847 57.0979L199.271 132.71L275.022 101.688L302.741 168.381L311.12 164.872L279.943 89.8595Z" className="accentSvgPrimary"/>
              </svg>

              <svg className={styles.heroImgSvg2} width="459" height="216" viewBox="0 0 459 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M436.304 158.565L381.158 181.149L358.282 126.103L303.136 148.687L280.283 93.652L231.644 113.572L211.465 65.0201L156.319 87.6039L133.443 32.5588L78.2967 55.1426L55.4442 0.107293L0.701188 22.5249L3.22235 28.6386L51.8615 8.71845L74.714 63.7537L129.86 41.1699L152.736 96.2151L207.883 73.6312L228.052 122.207L276.701 102.263L299.553 157.298L354.699 134.715L377.576 189.76L432.722 167.176L452.901 215.728L458.991 213.197L436.304 158.565Z"className="accentSvgAccent"/>
              </svg>


            </div>
          </div>

      </section>
    </div>
    
  )
}

export default Hero