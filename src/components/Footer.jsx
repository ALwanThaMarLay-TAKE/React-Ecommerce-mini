import React from 'react'
import Container from './Container'

const Footer = () => {
  const date = new Date();
  

  return (
   

      <footer className= ' mt-auto'>
        <Container>
        <div className='bg-black text-white text-center py-2'>
          &copy;{date.getFullYear()} <a className='underline text-gray-300' href="#">MMS IT</a> All rights reserved.
          </div>
          </Container></footer>

  )
}

export default Footer