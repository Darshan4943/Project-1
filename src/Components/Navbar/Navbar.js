import React from 'react'
import { Link } from 'react-router-dom'
import  styles  from './Navbar.module.css'

export const Navbar = () => {
  return (

    <div className={styles.container}>
      <header>
        <h1><Link to='/'>Gold Gym</Link></h1>
        <nav>
          <ul>

            <li><Link to='/aboutUs'>AboutUs</Link></li>
            <li><Link to='/classes'>Classes</Link></li>
            <li><Link to='/trainer'>Trainer</Link></li> 
            <li><Link to='/pricing'>Pricing</Link></li>
            <li ><Link to='/joinUs' style={{color:"red",fontSize:"20px"}}>Join Us</Link></li>

          </ul>
        </nav>
      </header>
    </div>


  )
}
export default Navbar