import { useState } from "react";
import styles from "./Search.module.css";
   

export default function SearchBar({onSearch}) {
   const [character, setCaracter] = useState('')
   const handleChange = (e) => {
      setCaracter(e.target.value)
   }

   return (
      <>
         <div className={styles.divSearch}>
            <input 
               className={styles.inputsearch}
               type='search'
               placeholder="  Search character"
               onChange={handleChange}
               value={character}
            />
            <button
             onClick={() => onSearch(character)}
             className={styles.buttonsearch}
             >Agregar</button>
         </div>
      </>
      
   );
}