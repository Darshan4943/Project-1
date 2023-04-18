import React from 'react'
import { Link } from 'react-router-dom'
import  styles  from './Navbar.module.css'

export const Navbar = () => {
  return (

    <div >
      <header>
        <h1><Link to='/'>Gold Gym</Link></h1>
        <nav>
          <ul>
          
        
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/about-Us'>AboutUs</Link></li> 
        <li><Link to='/login'>Join Us</Link></li>
          </ul>
        </nav>
      </header>
    </div>


  )
}
