import React from 'react'
import styles from "../styles/Footer.module.css"
import { Icon } from '@iconify/react';
import Link from "next/link"
import {Link as ScrollLink} from "react-scroll"
import Logo from '../components/Logo'
import {useRouter} from "next/router"
const Footer = () => {

  const router = useRouter()
  return (
    <div className={styles.footerContainer}>
      <div className='container'>
        <section id="footer" className={styles.footerSection}>
          <Link href="/">
          <div className={styles.logoContainer}>
            <Logo footer="true"/>
            <p className={styles.logoText}>Icarus</p>
          </div>
          </Link>

          <div className={styles.footerLinksContainer}>
            <p className={styles.footerLinksHeader}>Sections</p>
            {
                router.pathname == "/" ? 
                <ScrollLink className={styles.footerLink}  to="home" spy={true} smooth={true} offset={-120} duration={500}>Home</ScrollLink>:
                <Link href= "/" passHref><a className={styles.footerLink}>Home</a></Link>
            }<br/>
            <ScrollLink className={styles.footerLink}  to="about" spy={true} smooth={true} offset={-100} duration={500}>About</ScrollLink><br/>
            <ScrollLink className={styles.footerLink} to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</ScrollLink><br/>
            <ScrollLink className={styles.footerLink} to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</ScrollLink><br/>
            <Link href= "/projects" passHref><a className={styles.footerLink}>Projects</a></Link>
          </div>

          <div className={styles.contactSocialLinksContainer}>
            <p className={styles.footerLinksHeader}>Contact</p>
            <div className={styles.socialIconsContainer}>
                <a className={styles.socialLink} href='https://www.facebook.com/thurein.win.5458' target="_blank"><Icon icon="akar-icons:facebook-fill"  className={`social-icon ${styles.footerSocialIcon}`}/></a>
                <a className={styles.socialLink} href='http://t.me/Icarus69420' target="_blank"><Icon icon="akar-icons:telegram-fill" className={`social-icon ${styles.footerSocialIcon}`} /></a>
                <a className={styles.socialLink} href='https://www.linkedin.com/in/thurein-win-0bb31523a' target="_blank"><Icon icon="entypo-social:linkedin-with-circle" className={`social-icon ${styles.footerSocialIcon}`} /></a>
            </div>
          </div>


        </section>
        <p className={styles.copyright}>Copyright © 2022 Icarus All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer