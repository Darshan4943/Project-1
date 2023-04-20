import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import styles from './card.module.css'


export function Card(props){
    return(
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.img} src={props.img}/>
          <h3 className={styles.cardTitle}>{props.title}</h3>

        </div>
        <Link to='/pricing' className={styles.cardBtn} > <h3>View</h3></Link>

  
      </div>
    )
  }