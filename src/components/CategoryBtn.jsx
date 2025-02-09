import React, { act } from 'react'
import useCategoriesStore from '../store/useCategoriesStore'

const CategoryBtn = ({category:{
  id,name,isActive
}}) => {
  const {activeCategory} = useCategoriesStore()
  const handleActive = () => {
    activeCategory(id)
    
  }
  return (
    <button onClick={handleActive} className={`${isActive &&  'bg-black text-white'} text-nowrap border border-black px-4 py-2 me-2`}> 
    {name}
              </button>
  )
}

export default CategoryBtn