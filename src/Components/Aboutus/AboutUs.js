import React from 'react'
import styles from './aboutus.module.css'
import Button from '@mui/material/Button'
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"



export const AboutUs = () => {
  return (<>
<div className={styles.k}>
  <div>
  <div >
    < img className={styles.image1} src={image1}/>
  </div>
  <h1 className={styles.h1}>About us</h1>
  <p className={styles.text1}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumnp
  </p>
  <Button style={{ backgroundColor:"#FF6263"}} variant="contained"  >Read more</Button>
  </div>

  <div>
  <div >
    < img className={styles.image2} src={image2}/>
  </div> 
  <h1 className={styles.t1}>Why Choose Us</h1>
  <ul>
    <li><h2 className={styles.h2}>Consultation With Expert</h2></li>
       <p className={styles.text1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumnp
      </p>
    <li><h2>Best Workout Facilities</h2></li>
       <p className={styles.text1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumnp
       </p>
  </ul>
  
  </div>
</div> 
</>

  )
}
