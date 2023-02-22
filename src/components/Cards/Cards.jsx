import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Cards({characters, onClose}) {
   return (
      <div className={styles.divCards}>{
      characters && 
      characters.map((team) =>
         <Card 
            key={team.id}
            name={team.name}
            species={team.species}
            gender={team.gender}
            image={team.image}
            detailId={team.id}
            onClose = {() => onClose(team.id)}
         />
      )
      }
      
   </div>
   ) 
   
}
