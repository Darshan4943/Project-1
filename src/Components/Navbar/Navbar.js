import React from 'react'
import { Link } from 'react-router-dom'
import  styles  from './Navbar.module.css'

export const Navbar = () => {
  return (

    <div className ={styles.main}>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        <li><Link to='/Blogs'>Blogs</Link></li>
        <li><Link to='/Classes'>Classes</Link></li>
        <li><Link to='/AboutUs'>AboutUs</Link></li> 
       
        </ul>
    </div>


  )
}
