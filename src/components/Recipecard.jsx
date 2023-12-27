import React from 'react'
import { Link } from 'react-router-dom'

const Recipecard = ({recipe}) => {
  const {image, cuisineType, dietLabel, label, mealType, uri} = recipe?.recipe

  const id = uri?.split("#")[1]
  
  return (
    <div>
      <Link to={`/recipes/${id}`} className='w-full'>
        <div className='bg-gradient shadow w-full rounded-lg'>
          <img src={image} alt={label} />
        </div>
      </Link>
    </div>
  )
}

export default Recipecard
