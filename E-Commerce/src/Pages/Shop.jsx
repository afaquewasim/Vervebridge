import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/newCollection/NewCollections'
import NewsLetter from '../Components/newsletter/NewsLetter'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />

        </div>
    )
}

export default Shop