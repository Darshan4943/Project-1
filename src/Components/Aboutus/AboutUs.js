import React from 'react'
import styles from './AboutUs.module.css'

import "./yt.css"
import YoutubeEmbed from "./YoutubeEmbed";

export const AboutUs = () => {

  return   (<div >
    
    <div className={styles.k} >
      <div className={styles.main}>
          <div className={styles.video1} >
              <YoutubeEmbed embedId="BvuaBsHMiOQ"  />
          </div >
          <div className={styles.box1}>
            <h1 className={styles.h1}>About us</h1>
            <p className={styles.text1}>
                 Gold Gym provides a 24/7 Fitness facility to residents of Martinsville and Henry County, as well as surrounding areas to help people reach and maintain their goals. We combine different types of fitness equipment to meet different fitness needs and levels. At Gold Gym you’ll find all the latest strength and cardio equipment along with an energetic group exercise program that includes POUND, Zumba, Kickboxing, Bootcamp, Muscle Building and many other cardio CLASSES. You’ll find a supportive environment with all kinds of people who are working just as hard as you to meet their goals.
                 Our Staff, Trainers & Group Exercise Instructors are committed to offering our members a great fitness experience. Whether you’re a mom looking to get back into shape, a marathon runner trying to shave a few minutes off your personal best or just trying to stay healthy we would love to help you realize your potential and meet your goals!
            </p>
            </div>   
          </div>
    
      <div className={styles.main}>
            <div className={styles.video2} >
                <YoutubeEmbed embedId="Im5wJLdudDg"  />
            </div>
              <h1 className={styles.t1}>Why Choose Us</h1>
            <ul className={styles.box2}>
               <li><h2 className={styles.h2}>Consultation With Expert</h2></li>
                <p className={styles.text1}>
                During the consultation, we'll provide you with expert advice on nutrition and supplementation, as well as tips for staying motivated and overcoming plateaus. We'll also answer any questions you may have about fitness and exercise.
                 At the end of the consultation, we'll provide you with a personalized workout plan that takes into account your goals, fitness level, and schedule. We'll also be available for follow-up consultations and support as you progress towards your goals.
               </p>
               <li><h2 className={styles.h2}>Best Workout Facilities</h2></li>
                 <p className={styles.text1}>
                 Our gym features state-of-the-art cardio and strength training equipment, including treadmills, ellipticals, bikes, rowing machines, free weights, weight machines, and more. We also have designated areas for functional training, such as TRX suspension training and plyometric exercises.
                 In addition to our equipment, we offer a variety of amenities to enhance your workout experience. Our gym is fully air-conditioned, with excellent ventilation and lighting for a comfortable and safe workout environment. We also provide locker rooms, showers, and towel service for your convenience.
           
                </p>
            </ul>
      
      </div>
    </div> 
    </div>
   
    
      )
}
export default AboutUs