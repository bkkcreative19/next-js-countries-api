import React, { useState, useEffect } from 'react'
import styles from '../../../styles/FilterSearch.module.scss'
import { IoIosSearch } from 'react-icons/io'

export const Search = ({ handleFilters = { handleFilters } }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [search, setSearch] = useState(null)

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = () => {
        setSearch(searchQuery)
    }

    useEffect(() => {

        if (search) {
            handleFilters('search', search)
        }
    }, [search])

    return (
        <div className={styles.search}>
            <IoIosSearch onClick={handleSubmit} />
            <input onChange={(e) => handleChange(e)} placeholder='Search for a country...' />
        </div>
    )
}
