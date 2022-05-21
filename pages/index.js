import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { CountryList } from '../components/CountryList'
import { FilterSearch } from '../components/FilterSearch'

export default function Home({ data }) {

  const [filters, setFilters] = useState(null)
  const [filteredData, setFilteredData] = useState(null)

  const handleFilters = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    console.log(filters)
    let arr = [...data]

    if (filters) {

      if (filters.select) {
        arr = arr.filter(item => item.region === filters.select)
      }
      if (filters.search) {
        arr = arr.filter(item => item.name === filters.search)
      }

      setFilteredData(arr)
    }

    // console.log(filteredData)
  }, [filters])

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="yay" />
      </Head>
      <FilterSearch handleFilters={handleFilters} />
      {filteredData ? <CountryList countries={filteredData} /> : <CountryList countries={data} />}

    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://restcountries.com/v2/all')
  return { props: { data } }
}
