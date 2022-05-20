import React from 'react'
import styles from '../../styles/Layout.module.scss'

import { useTheme } from '../../context/themeContext'
import { Header } from '../Header'

export const Layout = ({ children }) => {
    const { isLightMode } = useTheme()
    return (
        <section className={isLightMode ? styles.lightmode : styles.darkmode}>

            <Header />
            <div className={styles.overall}>
                <section className={styles.container}>
                    {children}
                </section>
            </div>



        </section>

    )
}
