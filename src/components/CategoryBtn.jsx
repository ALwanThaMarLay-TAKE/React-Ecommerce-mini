import React from 'react'

const CategoryBtn = ({category ,current}) => {
  return (
    <button className={`${current &&  'bg-black text-white'} text-nowrap border border-black px-4 py-2 me-2`}> 
    {category}
              </button>
  )
}

export default CategoryBtn