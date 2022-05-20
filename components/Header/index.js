import React from 'react'
import styles from '../../styles/Header.module.scss'
import { BsFillMoonFill, BsMoon } from 'react-icons/bs'
import { useTheme } from '../../context/themeContext'

export const Header = () => {
    const { setIsLightMode, isLightMode } = useTheme()
    const handleClick = () => {
        setIsLightMode(!isLightMode)
    }
    return (
        <header className={styles.header}>
            <nav>
                <h1>Where in the world?</h1>
                <div className={styles.theme}>
                    <BsMoon />
                    {/* {isLightMode ? <BsMoon /> : <BsFillMoonFill />} */}
                    <p onClick={handleClick}>{isLightMode ? 'Dark Mode' : 'Light Mode'}</p>
                </div>
            </nav>
        </header>
    )
}
