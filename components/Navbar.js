import React,{useState,useEffect} from 'react'
import Link from "next/link"
import {Link as ScrollLink} from "react-scroll"
import Logo from './Logo'
import styles from "../styles/Navbar.module.css"
import {useRouter} from "next/router"
const Navbar = () => {
  const [isNavOpen,setIsNavOpen] = useState(false)
  const router = useRouter()

  //light and dark toggle
  const [theme,settheme] = useState(undefined)
  // const [test,settest] = useState("dark")

  const toggleLightDark = () => {
    // console.log(test)
    if(theme === "light"){
      settheme("dark")
    }
    if(theme==="dark"){
      settheme("light")
    }
   
  };

  useEffect(() => {
    if (theme !== undefined) {
      if (theme === "light") {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'dark');
      }
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    // initialColorValue = "dark"
    const lightDark = window.localStorage.getItem("theme")
    if(lightDark){
      settheme(lightDark);
    }
    else{
      settheme(initialColorValue);
    }
    
  }, []);
  return (
    <header className={styles.navBar}>
        <div className={styles.navLinksContainer}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Logo/>
            <p className={styles.logoText}>Icarus</p>
          </div>
        </Link>
            <div className={isNavOpen ? `${styles.navLinks} ${styles.clipOpen}` : styles.navLinks}>
              {
                router.pathname == "/" ? 
                <ScrollLink className={theme == "light" ? styles.lightThemeLinks : undefined} activeClass={styles.active} to="home" spy={true} smooth={true} offset={-120} duration={500}>Home</ScrollLink>:
                <Link href= "/" passHref><a className={theme == "light" ? styles.lightThemeLinks : undefined}>Home</a></Link>
              }
              
              <ScrollLink className={theme == "light" ? styles.lightThemeLinks : undefined} activeClass={styles.active} to="about" spy={true} smooth={true} offset={-100} duration={500}>About</ScrollLink>
              <ScrollLink className={theme == "light" ? styles.lightThemeLinks : undefined} activeClass={styles.active} to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</ScrollLink>
              <ScrollLink className={theme == "light" ? styles.lightThemeLinks : undefined} activeClass={styles.active} to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</ScrollLink>
              <Link href= "/projects" passHref><a className="ctaMain">Projects</a></Link>
            </div>

            <div onClick={() => setIsNavOpen(!isNavOpen)} className={isNavOpen ? `${styles.burger} ${styles.toggleNav}`  :styles.burger}>
              <span  className={isNavOpen ? `${styles.line1} ${styles.toggleNav} ${styles.whiteCross}`  :styles.line1}></span>
              <span  className={isNavOpen ? `${styles.line2} ${styles.toggleNav} ${styles.whiteCross}`  :styles.line2}></span>
              <span  className={isNavOpen ? `${styles.line3} ${styles.toggleNav} ${styles.whiteCross}`  :styles.line3}></span>
            </div>

        </div>
          <div className={isNavOpen ? `${styles.overlay} ${styles.clipOpen}` : styles.overlay}></div>
          <div className="container">
              <div className={styles.wrapper}>
              <div className={theme==="light" ? styles.sun : `${styles.sun} ${styles.gone}`} id="sun">
                <div className={styles.triangle}></div>
                <div className={`${styles.triangle} ${styles.two}`}></div>
                <div className={`${styles.triangle} ${styles.three}`}></div>
                <div className={`${styles.triangle} ${styles.four}`}></div>
                <div className={`${styles.triangle} ${styles.five}`}></div>
                <div className={styles.circle}></div>
              </div>
              <div className={theme==="light" ? styles.moon : `${styles.moon} ${styles.gone}`} id="moon">
                <div className={styles.circle}></div>
                <div className={styles.spot}></div>
                <div className={`${styles.spot} ${styles.two}`}></div>
                <div className={`${styles.spot} ${styles.three}`}></div>
                <div className={`${styles.spot} ${styles.four}`}></div>
              </div>
              <button className={theme==="light" ? styles.toggle : `${styles.toggle} ${styles.right}`} id="toggle" onClick={toggleLightDark}>
                <div className={theme==="light" ? styles.toggleBtn : `${styles.toggleBtn} ${styles.right}`} id="toggle-btn">
                </div>
              </button>

      </div>
  </div>
    </header>
  )
}

export default Navbar