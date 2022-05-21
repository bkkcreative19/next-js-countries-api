import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from '../../../styles/FilterSearch.module.scss'
import { options } from '../../../utils/selectOptions'

export const Filter = ({ handleFilters }) => {
    const [selected, setSelected] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (val) => {
        setSelected(val)
        setIsOpen(false)
    }

    const handleToggleDrop = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (selected) {
            handleFilters('select', selected)
        }
    }, [selected])

    return (
        <div onClick={handleToggleDrop} className={styles.filter}>
            <p>{selected ? selected : 'Filter by Region'}</p>
            <IoIosArrowDown />

            {isOpen && <div className={styles.dropdown}>
                {options.map((option, i) => {
                    return <div onClick={() => handleSelect(option)} key={i}><p>{option}</p></div>
                })}
            </div>}

        </div>
    )
}
