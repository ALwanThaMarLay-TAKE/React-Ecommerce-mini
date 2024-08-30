import React from 'react'
import Container from './Container'
import CategoryBtn from './CategoryBtn'


const Categories = () => {
  const categories = [
 
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]
  return (
    <Container>
    <section >
    <p className='text-xs text-gray-500 mb-3'>
    Product Categories

      </p>
      <div className='flex overflow-x-scroll categoryBtn-group'>
    <CategoryBtn category={"All"} current={true}/>
        {categories.map((cat)=> (
         <CategoryBtn key={cat} category={cat} current={false}/>
        ))}
      </div>

      
    </section>
    </Container>
  )
}

export default Categories