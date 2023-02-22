import { Link } from "react-router-dom";
import { removeFavorites, addFavorites  } from "../../redux/actions/actions";
import styles from "../Card/Card.module.css"
import { connect } from "react-redux";
import { useState, useEffect  } from "react";

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.removeFavorites(props.id);
      } else {
         setIsFav(true);
         props.addFavorites(props)
      }
   }

   return (
      <div className={styles.divCard}>
         <div>
            <div>
               <img  src={props.image} alt={props.name} className={styles.img}/>
            </div>
            <div>
               <h2 className={styles.h2name}>{props.name}</h2>
               <h2 className={styles.h2species}>{props.species}</h2>
               <h2 className={styles.h2gender}>{props.gender}</h2>
            </div>
            <div>
               <div>
                  <button onClick={() => props.onClose(props.id)} className={styles.button}>Delete</button>
               </div>
               <Link to = {`/detail/${props.detailId}`} >
                  <button>View more</button>
               </Link>
            </div>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
         </div>  
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites : state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites : function (character) {
         dispatch(addFavorites(character))
      },
      removeFavorites : function (id) {
         dispatch(removeFavorites(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);