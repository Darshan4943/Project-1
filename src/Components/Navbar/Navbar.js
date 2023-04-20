import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBars} from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styles from'./Navbar.module.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
        <header className={styles.header}>

            <div className={styles.logo}  ><Link to ='/'>
                <FontAwesomeIcon icon={faDumbbell} size="2x" style={{color:"red"}} /> </Link>
            </div>
          
            <ul className={isMenuOpen ? styles.listresponsive : styles.lists}>

              <li><Link to='/aboutUs'>AboutUs</Link></li>
              <li><Link to='/classes'>Classes</Link></li>
              <li><Link to='/trainer'>Trainer</Link></li> 
              <li><Link to='/pricing'>Pricing</Link></li>
              <li ><Link to='/joinUs' style={{color:"red",fontSize:"24px"}}>Join Us</Link></li>

            </ul>
        
        <button className={styles.menutoggle} onClick={handleClick}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
        </button>
        </header>
       
    </div>
  )
}
export default Header