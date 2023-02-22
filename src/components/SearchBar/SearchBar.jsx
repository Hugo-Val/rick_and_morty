import { useState } from "react";
import styles from "./Search.moule.css";
   

export default function SearchBar({onSearch}) {
   const [character, setCaracter] = useState('')
   const handleChange = (e) => {
      setCaracter(e.target.value)
   }

   return (
      <>
         <div>
            <input 
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