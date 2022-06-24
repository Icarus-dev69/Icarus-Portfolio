import React, {useState} from 'react'
import styles from "../styles/Contact.module.css"
import { Icon } from '@iconify/react';

const Contact = () => {
  const [fullname,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  // const resetInputValues = (e) => {
  //   e.preventDefault()
  //   setFullName("")
  //   setEmail("")
  //   setMessage("")
  // }
  return (
    <div className='container'>
      <section className={styles.contactSection} id="contact">
      <p className={`water-mark ${styles.ContactWatermark}`}>Contact</p>
      <h2 className='header'>
          Contact
          <svg className='header-svg' width="90" height="7" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.0959 0L60.0822 5.73173L45.0593 0L30.0456 5.73173L15.0319 0L0 5.74224L1.72599 6.35185L15.0319 1.26827L30.0456 7L45.0593 1.26827L60.0822 7L75.0959 1.26827L88.347 6.32383L90 5.68618L75.0959 0Z" className='accentSvgPrimary'/>
          </svg>

      </h2>

      <div className={styles.contactFormContainer}>
      <form  className={styles.contactForm} action="https://formsubmit.co/thureinwin.dev@gmail.com" method="POST">
            <div className={styles.floatingLabelContainer}>
                <input  type="text" className={styles.fullNameInput} name="name" required placeholder=' '></input>
                <p className={styles.label}>Full Name</p>
            </div>
            <div className={styles.floatingLabelContainer}>
                <input  type="email" className={styles.emailInput} name="email" required placeholder=' '></input>
                <p className={styles.label}>Email</p>
            </div>
            <div className={styles.messageContainer}>
                <textarea  id="message" name='message' className={styles.messageInput} required placeholder=' '></textarea>
                <p className={styles.messageLabel} >Your Message</p>
            </div>

            <button  className={styles.formBtn}>Send</button>
            <input type="hidden" name="_captcha" value="false"></input>

            <input type="hidden" name="_next" value="http://localhost:3000/thankyou"></input>
            <div className={styles.socialIconsContainer}>
                <a className={styles.socialLink} href='https://www.facebook.com/thurein.win.5458' target="_blank" rel='noreffer'><Icon icon="akar-icons:facebook-fill" className='social-icon' /></a>
                <a className={styles.socialLink} href='http://t.me/Icarus69420' target="_blank" rel='noreffer'><Icon icon="akar-icons:telegram-fill"  className='social-icon'/></a>
                <a className={styles.socialLink} href='https://www.linkedin.com/in/thurein-win-0bb31523a' target="_blank" rel='noreffer'><Icon icon="entypo-social:linkedin-with-circle" className='social-icon' /></a>
            </div>
        </form>
        <svg className={styles.contactSvg1} width="157" height="126" viewBox="0 0 157 126" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M148.651 78.7768L102.308 85.9651L94.8769 39.6456L48.5337 46.8339L41.1195 0.526358L4.35655 6.23367L0.00946653 12.173L36.8007 6.46125L44.2149 52.7688L90.5581 45.5805L97.9887 91.9L144.332 84.7117L150.887 125.568L156.023 124.729L148.651 78.7768Z" className='accentSvgPrimary'/>
            </svg>
            <svg className={styles.contactSvg2} width="413" height="290" viewBox="0 0 413 290" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400.854 229.996L342.359 241.371L330.677 182.918L272.181 194.293L260.521 135.853L208.927 145.887L198.623 94.3287L140.127 105.704L128.445 47.2502L69.9498 58.6253L58.2895 0.186008L0.221749 11.4769L1.49994 17.9653L53.0935 7.93131L64.7539 66.3707L123.249 54.9955L134.931 113.449L193.427 102.074L203.717 153.654L255.325 143.599L266.985 202.038L325.481 190.663L337.163 249.117L395.658 237.741L405.963 289.3L412.43 288.008L400.854 229.996Z" className='accentSvgAccent'/>
            </svg>
      </div>

      </section>
    </div>
  )
}

export default Contact