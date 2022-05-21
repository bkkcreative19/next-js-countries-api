import React from 'react'
import { Filter } from './Filter'
import { Search } from './Search'
import styles from '../../styles/FilterSearch.module.scss'

export const FilterSearch = ({ handleFilters }) => {
    return (
        <div className={styles.filterSearch}>
            <Search handleFilters={handleFilters} />
            <Filter handleFilters={handleFilters} />
        </div>
    )
}
