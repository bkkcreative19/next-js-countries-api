import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/CountryDetails.module.scss'

export const CountryDetails = ({ country }) => {
    const router = useRouter()
    console.log(country)
    return (
        <section className={styles.countryDetail}>
            <div onClick={router.back} className={styles.back}>
                <HiOutlineArrowNarrowLeft />
                <span>Back</span>
            </div>

            <div className={styles.content}>
                <div className={styles.flag}>
                    <img src={country.flag} />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>{country.name}</h2>
                    <div className={styles.stats}>
                        <ul className={styles.left}>
                            <li>Native Name:<span>{country.nativeName}</span></li>
                            <li>Population:<span>{country.population}</span></li>
                            <li>Region:<span>{country.region}</span></li>
                            <li>Sub Region:<span>{country.subregion}</span></li>
                            <li>Capital:<span>{country.capital}</span></li>
                        </ul>
                        <ul className={styles.right}>
                            <li>Top Level Domain:<span>{country.topLevelDomain[0]}</span></li>
                            <li>Currencies:<span>{country.currencies[0].name}</span></li>
                            <li>Languages:<span>{country.languages[0].name}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
