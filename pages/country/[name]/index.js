import axios from 'axios'
import React from 'react'

const country = ({ data }) => {
    console.log(data)

    return (
        <div>index</div>
    )
}

export const getServerSideProps = async (context) => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${context.params.name}`)
    return { props: { data } }
}

export default country