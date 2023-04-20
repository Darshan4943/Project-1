import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import styles from './trainercard.module.css'


export function Card(props){
    return(
      <div className={styles.abc}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.imgtrainer} src={props.img}/>
          <h3 className={styles.cardTitle}>{props.title}</h3>

        </div>
        <Link to='/joinUs' className={styles.h1} style={{ backgroundColor:"#FF6263"}} variant="contained"><h3 >  Join</h3></Link>
  
      </div>
      </div>
    )
  }