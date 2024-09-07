import RecipeDetailsItem from '@/components/recipe-details'

import React from 'react'

const fetchDetails = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

async function  Details({ params}) {
    const getDetails = await fetchDetails(params.details)
  return (
    <div>
        <RecipeDetailsItem getDetails={getDetails}/>
    </div>
  )
}

export default Details