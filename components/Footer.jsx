import React, { useState, useCallback } from 'react'
import { HamburgerElastic } from 'react-animated-burgers'
import styles from '../styles/Footer.module.css'
import Link from "next/link";


const Footer = () => {


    return (
        <footer className={styles.footer}>
            <Link  href={'https://www.devnty.com'} target='_blank'>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerTextWrapper}>Powered by</div>
                    <div className={styles.footerImageWrapper}><img src="./devnty-logo.png" alt="" /></div>
                </div>
            </Link>
        </footer>
    )
}

export default Footer;