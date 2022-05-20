import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Country.module.scss'

export const Country = ({ country: { name, capital, region, population, flags } }) => {
    // console.log(country)

    return (
        <div className={styles.country}>
            <div className={styles.img}><Image src={flags.png} width={'100%'} height={'100%'} priority /></div>

            <div>
                hi
            </div>
            {/* <Link href='/country/[name]' as={`/country/${name}`}>{name}</Link> */}
        </div>
    )
}
