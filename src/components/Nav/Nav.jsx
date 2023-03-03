import SearchBar from "../SearchBar/SearchBar";

import styles from "../Nav/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props){
    const navigate = useNavigate();
    const {onSearch} = props;
    // const handleClick = () => {
    //     navigate('/');
    // }
    return (
        <div className={styles.divNav}>
            {/* <div onClick={handleClick}>
                <img src={imgLetter} alt="Rick and Morty" />    
            </div> */}
            <div className={styles.divSearch}>
                <Link 
                    to='/Home'
                    className={styles.linkHome}
                >Home</Link> 
                <br />
                <Link 
                    to="/favorites"
                    className={styles.linkFavorites}
                >Favorites</Link>
                <br />
                <Link 
                    to="/about"
                    className={styles.linkAbout}
                >About</Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
        );
    
}
