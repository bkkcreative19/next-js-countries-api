import axios from 'axios'
import React from 'react'
import { CountryDetails } from '../../../components/CountryDetails'

const country = ({ data }) => {


    return (
        <><CountryDetails country={data[0]} /></>
    )
}

export const getServerSideProps = async (context) => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${context.params.name}`)
    return { props: { data } }
}

export default country