import { useEffect, useState } from "react";
import  styles from "./App.module.css"
import Cards from "./components/Cards/Cards"
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "hvb1507@hotmail.com";
  const password = "hugo1234";

  useEffect(() => {
    !access && navigate('/');
  },[access]);

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home")
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((prevChars) => [...prevChars, data])
        } else {
          window.alert("No hay personajes con ese ID")
        }
      })
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className={styles.App}>
      {
        location.pathname !== '/' && <Nav onSearch={onSearch}/>
      }
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
