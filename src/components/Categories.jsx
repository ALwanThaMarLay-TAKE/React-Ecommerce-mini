import React from 'react'
import Container from './Container'
import CategoryBtn from './CategoryBtn'
import useCategoriesStore from '../store/useCategoriesStore'


const Categories = () => {
  const {categories} = useCategoriesStore()
 
  return (
    <Container>
    <section >
    <p className='text-xs text-gray-500 mb-3'>
    Product Categories

      </p>
      <div className='flex overflow-x-scroll categoryBtn-group'>
   
        {categories.map((cat)=> (
         <CategoryBtn key={cat.id} category={cat} />
        ))}
      </div>

      
    </section>
    </Container>
  )
}

export default Categories