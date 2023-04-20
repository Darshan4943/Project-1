import styles from './Trainer.module.css'
import { Card } from "./TrainerCard";
import jhoncena from "./jhoncena.jpg"
import batista from"./batista.jpg"
import khali from "./khali.jpg"
import roman from "./roman.jpg"
import seth from "./seth.jpg"
import mark from "./mark.jpg"



const Trainer = () => {


  return (
    <div className={styles.main}>
     <Card img={jhoncena}
       title="Jhon cena"/>
     <Card img={batista}
       title="Batista"/>
       <Card img={khali}
       title="khali"/>
       <Card img={roman}
       title="Roman Reigns"/>
       <Card img={seth}
       title="Seth Rollins"/>
       <Card img={mark}
       title="mark "/>
  </div>
  );
};

export default Trainer;