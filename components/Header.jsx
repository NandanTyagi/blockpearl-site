import React, { useState, useCallback } from 'react'
import { HamburgerElastic } from 'react-animated-burgers'
import styles from '../styles/Header.module.css'
import Link from "next/link";


const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )

    return (
        <nav>
            <div className={styles.header}>
                <Link className={styles.link} href={'https://www.dapp.blockpearl.world'} title={'Go to dAapp'}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_609_2)">
                            <rect width="48" height="48" fill="white" />
                            <rect x="0.5" y="0.5" width="47" height="47" fill="black" stroke="#000" />
                            <circle cx="24" cy="24" r="21" fill="#FFFEFE" />
                            <circle cx="24" cy="24" r="16" fill="#070707" />
                        </g>
                        <defs>
                            <clipPath id="clip0_609_2">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </Link>
                <div className={styles.title}>
                    <h1>BLOCK PEARL</h1>
                </div>

                <HamburgerElastic
                    buttonColor="#fff"
                    barColor="#000"
                    {...{ isActive, toggleButton }}
                />
            </div>


        </nav>
    )
}

export default Header;

