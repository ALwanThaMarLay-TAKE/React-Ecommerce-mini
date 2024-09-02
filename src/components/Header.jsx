import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container >

    <header className=''>
       
            <div className=' flex justify-between items-center'>
             <Link to={'/'}>
             <h1  className=' text-3xl font-bold'>Online Shop</h1>
             
             </Link>
              <Link to={"/my-cart"} className='border relative border-black px-4 py-2'>
                My Cart
                <span className=' text-xs bg-red-500 text-white px-3 py-1 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 '>1</span>
              </Link>
                
            </div>
        

    </header>
    </Container>
  )
}

export default Header