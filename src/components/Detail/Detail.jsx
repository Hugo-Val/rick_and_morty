import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
    const {detailId} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Back to Home</button>
            </div>
            {
                character ? (
                    <div>
                        <div>
                            <h1>{character.name}</h1>
                            <h3>Status : {character.status}</h3>
                            <h3>Species : {character.species}</h3>
                            <h3>Gender : {character.gender}</h3>
                            <h3>Origin : {character.origin?.name}</h3>
                        </div>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                    </div>
                ) : ("")
            }
        </>
    )
    
}