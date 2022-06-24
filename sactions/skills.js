import React from 'react'
import styles from "../styles/Skills.module.css"

const Skills = () => {
  return (
    <div className='container'>
      <section className={styles.skillsSection} id="skills">
      <p className={`water-mark ${styles.skillsWatermark}`}>Skills</p>
      <h2 className='header'>
          Skills
          <svg className='header-svg' width="90" height="7" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.0959 0L60.0822 5.73173L45.0593 0L30.0456 5.73173L15.0319 0L0 5.74224L1.72599 6.35185L15.0319 1.26827L30.0456 7L45.0593 1.26827L60.0822 7L75.0959 1.26827L88.347 6.32383L90 5.68618L75.0959 0Z" className='accentSvgPrimary'/>
          </svg>
          
        </h2>
        <div className={styles.skillsContainer}>
            <div className={styles.skillContainer}>
              <img src="/html_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>Html</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/css_rmbg_final.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>CSS</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/js_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>Javascript</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/react_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>ReactJs</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/figma_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>Figma</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/node_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>NodeJs</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/express_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>ExpressJs</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/mongo-real-rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>MongoDB</p>
            </div>
            <div className={styles.skillContainer}>
              <img src="/next_rmbg.png" className={styles.skillImg} alt="skill image"/>
              <p className={styles.skillName}>NextJs</p>
            </div>
          </div>
      </section>
      
    </div>
  )
}

export default Skills