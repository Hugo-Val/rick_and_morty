import SearchBar from "../SearchBar/SearchBar";
import imgLetter from "../../images/letter.png";
import styles from "../Nav/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props){
    const navigate = useNavigate();
    const {onSearch} = props;
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className={styles.divNav}>
            {/* <div onClick={handleClick}>
                <img src={imgLetter} alt="Rick and Morty" />    
            </div> */}
            <div className={styles.divSearch}>
                <Link to='/' className={styles.linkHome}>Home</Link> 
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/favorites">Favorites</Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
        );
    
}
