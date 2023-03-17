import { Link } from "react-router-dom";
import { removeFavorites, addFavorites  } from "../../redux/actions/actions";
import styles from "../Card/Card.module.css"
import { connect } from "react-redux";
import { useState, useEffect  } from "react";

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((id) => {
         if (id === props.detailId) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite(e) {
      if (isFav) {
         setIsFav(false);
         props.removeFavorites(e);
      } else {
         setIsFav(true);
         props.addFavorites(e)
      }
      // console.log(isFav);
      
   }
   
   return (
      <div className={styles.divCard}>
         
            <div >
               <div className={styles.divbuttons}>
                  {
                     (isFav) ? (
                        <button 
                           onClick={() => handleFavorite(props.detailId)}
                           className={styles.buttonFav}
                        >❤️</button>
                     ) : (
                        <button 
                           onClick={() => handleFavorite(props)}
                           className={styles.buttonFav}
                        >🤍</button>
                     )
                  }
                  <button onClick={() => props.onClose(props.id)} className={styles.button}>X</button>
               <Link to = {`/detail/${props.detailId}`}  >
                  <h2 className={styles.h2name}>{props.name}</h2>
               </Link>
               </div>
            </div>
            <div >
               <img  src={props.image} alt={props.name} className={styles.img}/>
            </div>
            <div className={styles.divH2}>
               <h2 className={styles.h2species}>{props.species}</h2>
               <h2 className={styles.h2gender}>{props.gender}</h2>
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
      addFavorites : function (id) {
         dispatch(addFavorites(id))
      },
      removeFavorites : function (id) {
         dispatch(removeFavorites(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);