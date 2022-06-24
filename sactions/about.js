import React from 'react'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <div className='container'>
      <section className={styles.aboutSection} id="about">
        <p className={`water-mark ${styles.aboutWatermark}`}>About</p>
        <h2 className='header'>
          About
          <svg className='header-svg' width="90" height="7" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.0959 0L60.0822 5.73173L45.0593 0L30.0456 5.73173L15.0319 0L0 5.74224L1.72599 6.35185L15.0319 1.26827L30.0456 7L45.0593 1.26827L60.0822 7L75.0959 1.26827L88.347 6.32383L90 5.68618L75.0959 0Z" className='accentSvgPrimary'/>
          </svg>

        </h2>
        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutImgContainer}>
            <img src='/about_photo_cropped.jpg' alt="about photo"/>
            <svg className={styles.aboutSvg1} width="459" height="216" viewBox="0 0 459 216" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M436.304 158.565L381.158 181.149L358.282 126.103L303.136 148.687L280.283 93.652L231.644 113.572L211.465 65.0201L156.319 87.6039L133.443 32.5588L78.2966 55.1426L55.4441 0.107293L0.701097 22.5249L3.22226 28.6386L51.8614 8.71845L74.7139 63.7537L129.86 41.1699L152.736 96.2151L207.882 73.6312L228.052 122.207L276.701 102.263L299.553 157.298L354.699 134.715L377.575 189.76L432.722 167.176L452.901 215.728L458.991 213.197L436.304 158.565Z" className='accentSvgPrimary'/>
            </svg>
            <svg className={styles.aboutSvg2} width="264" height="182" viewBox="0 0 264 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M190.983 0.266318L174.896 72.9476L102.11 57.2319L86.0219 129.913L13.2631 114.18L0.508437 171.839L6.78588 181.692L19.5502 123.989L92.3091 139.722L108.397 67.0407L181.183 82.7564L197.271 10.0751L261.472 23.9358L263.193 15.8559L190.983 0.266318Z" className='accentSvgAccent'/>
            </svg>


          </div>
          <p className={styles.aboutText}>
            My name is Thurein Win. I am a Web Developer from Myanmar who specializes in Front End Design and Development. 
            I have been doing Web Development and learning new things regarding it for over 2 years.
            Aside from Web Development, I also have good communication skills and team work.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About