import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>

      <h4 className='text-center'>NotFound</h4>
      <Link className='text-xl inline-block rounded-lg w-300 mx-auto text-center px-4 py-1 mt-3 text-white bg-indigo-400' to='/'>Home</Link>

    </div>
  )
}

export default NotFound