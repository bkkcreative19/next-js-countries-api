import React from 'react'
import { Country } from '../Country'
import styles from '../../styles/CountryList.module.scss'


export const CountryList = ({ countries }) => {
    return (
        <section className={styles.countrylist}>
            {countries.map((item, i) => {
                return <Country key={i} country={item} />
            })}
        </section>
    )
}
