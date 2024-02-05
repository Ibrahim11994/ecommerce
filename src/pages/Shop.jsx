import React from 'react'
import { Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <h1 className='py-6 text-4xl font-extrabold text-center'>products</h1>
      <Outlet/>
    </div>
  )
}

export default Shop

