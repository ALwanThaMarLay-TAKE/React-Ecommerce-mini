import React from 'react'
import { Link } from 'react-router-dom'

const EmptyPage = () => {
  return (
    <div className='w-full flex flex-col items-center h-screen text-center'>
     <img className='w-1/3' src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7869.jpg?size=626&ext=jpg&ga=GA1.1.60732550.1709942337&semt=ais_hybrid" alt='There is nothing' />
     <h1 className=' text-2xl font-bold ' >Error Page. There is Nothing!</h1>
     <p className=' w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, perspiciatis natus. Aperiam cum quod placeat explicabo? Nobis libero mollitia ipsam, obcaecati architecto fugit distinctio minima odio suscipit perspiciatis cupiditate accusantium.</p>
     <Link to="/" className=' bg-green-400 px-4 py-2 rounded-lg'> Go to Home Page</Link>


    </div>
  )
}

export default EmptyPage