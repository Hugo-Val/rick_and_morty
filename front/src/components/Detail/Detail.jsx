import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
    const {detailId} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://localhost:3001/rick_and_morty/detail/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID")
            }
        })
        .catch((e) => {
            window.alert("No hay personajes con ese ID")
        })
        return setCharacter({});
    },[detailId])

    

    return (
        <>
            
            {
                character ? (
                    <div>
                        <div className={styles.div}>
                            <h1 className={styles.h1}>Nombre : {character.name}</h1>
                        <div>
                            <img 
                                src={character.image}
                                alt={character.name}
                                className={styles.img}
                            />
                        </div>
                            
                            <h3 className={styles.h3}>Origin : {character.origin?.name}</h3>
                            
                            <h3 className={styles.h3}>Gender : {character.gender}</h3>
                            
                            <h3 className={styles.h3}>Species : {character.species}</h3>
                            
                            <h3 className={styles.h3}>Status : {character.status}</h3>
                            

                        </div>
                    </div>
                ) : ("")
            }
        </>
    )
    
}