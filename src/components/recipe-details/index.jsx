import Link from 'next/link'
import React from 'react'

function RecipeDetailsItem({getDetails}) {
  return (
    <div>
        <Link href={'/recipe-list'}>Back to Recipe-List</Link>
        <div className='max-w-2xl p-6 mx-auto lg:max-w-6xl'>
            <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='w-full lg:sticky top-0 sm:flex gap-2'>
                    <img src={getDetails.image} alt={getDetails.name} className='w-full object-cover rounded'/>

                </div>
                <div>
                    <h2 className='text-3xl font-bold text-gray-950'>{getDetails.name}</h2>
                    <div className="flex flex-wrap gap-4 mt-5">
                        <p>{getDetails?.mealType[0]}</p>
                    </div>
                    <div className='mt-5'>
                        <p>{getDetails.cuisine}</p>
                    </div>
                    <div>
                        <p className='text-lg font-bold text-gray-700'>Ingredients</p>
                        <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                            { getDetails.ingredients.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetailsItem