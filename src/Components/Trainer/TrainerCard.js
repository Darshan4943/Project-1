import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import styles from './trainercard.module.css'


export function Card(props){
    return(
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.imgtrainer} src={props.img}/>
          <h2 className={styles.cardTitle}>{props.title}</h2>

        </div>
        <Link to='/joinUs'><Button  className={styles.cardBtn} style={{ backgroundColor:"#FF6263"}} variant="contained">Join</Button></Link>
  
      </div>
    )
  }