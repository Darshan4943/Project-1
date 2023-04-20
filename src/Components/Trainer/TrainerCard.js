import React from 'react'
import Button from '@mui/material/Button'
import styles from './trainercard.module.css'


export function Card(props){
    return(
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.imgtrainer} src={props.img}/>
          <h2 className={styles.cardTitle}>{props.title}</h2>

        </div>
        <Button  className={styles.cardBtn} style={{ backgroundColor:"#FF6263"}} variant="contained"  >Join</Button>
  
      </div>
    )
  }