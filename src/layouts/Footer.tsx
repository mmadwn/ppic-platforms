import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="layout-container">
        <div className="footer-content">
          <p className={styles.copyright}>
            © {currentYear} PIL-GROUP. All rights reserved.
          </p>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 