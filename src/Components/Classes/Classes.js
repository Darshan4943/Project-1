import React from 'react'
import styles from './classes.module.css'
import { Card } from './Card'
import bodybuilding from "./image/bodybulding.jpg"
import  cardio from  "./image/cardio.jpg"
import zumba from "./image/zumba.jpg"
import crossfit from "./image/crossfit.jpg"
import dance from "./image/dance.jpg"
import personaltrainer from "./image/personaltrainer.jpg"

import yoga from "./image/yoga.jpg"

export const Classes = () => {
  
  return (
    <div className={styles.wrapper}>
       <Card img={bodybuilding}
       title="BODYBUILDING"/>
       <Card img={yoga}
       title="YOGA"/>
       <Card img={crossfit}
       title="CROSSFIT"/>
       <Card img={zumba}
       title="ZUMBA"/>
       <Card img={yoga}
       title="YOGA"/>
       <Card img={cardio}
       title="CARDIO"/>
       <Card img={dance}
       title="DANCE"/>
       <Card img={personaltrainer}
       title="PERSONAL TRAINER"/>
       
      
    </div>
  )
}
export default Classes