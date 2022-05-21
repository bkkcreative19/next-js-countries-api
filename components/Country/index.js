import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Country.module.scss'

export const Country = ({ country: { name, capital, region, population, flags } }) => {
    // console.log(country)

    return (
        <div className={styles.country}>
            <div className={styles.img}>
                <img src={flags.png} />
                {/* <Image src={flags.png} width={293} height={150} priority /> */}
            </div>

            <div className={styles.content}>
                <h2>{name}</h2>

                <ul>
                    <li>Population: <span>{population}</span></li>
                    <li>Region: <span>{region}</span></li>
                    <li>Capital: <span>{capital}</span></li>
                </ul>
            </div>
            {/* <Link href='/country/[name]' as={`/country/${name}`}>{name}</Link> */}
        </div>
    )
}
