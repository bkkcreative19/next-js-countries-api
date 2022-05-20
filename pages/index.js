import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { CountryList } from '../components/CountryList'

export default function Home({ data }) {

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="yay" />
      </Head>
      <CountryList countries={data} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://restcountries.com/v2/all')
  return { props: { data } }
}
