import React, { useState, useEffect } from 'react'
import styles from '../../../styles/FilterSearch.module.scss'
import { IoIosSearch } from 'react-icons/io'

export const Search = ({ handleFilters = { handleFilters } }) => {
    const [search, setSearch] = useState(null)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }





    useEffect(() => {


        handleFilters('search', search)

    }, [search])

    return (
        <div className={styles.search}>
            <IoIosSearch />
            <input onChange={(e) => handleChange(e)} placeholder='Search for a country...' />
        </div>
    )
}
