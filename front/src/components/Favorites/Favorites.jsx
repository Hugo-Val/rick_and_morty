import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
export default function Favorites(props,onClose) {
    // const myFavorites = useSelector((s) => s.myFavorites)
    
    // const characters = props.characters.filter((e) => {
    //     return myFavorites.includes(e.id)
    // })
    // const dispatch = useDispatch();

    // const handlerOrder = (e) => {
    //     return dispatch(orderCards(e.target.value))      
    // }
    // const handlerFilter = (e) => {
    //     return dispatch(filterCards(e.target.value))
    // }

    // return(
    //     <>
    //         <div className={styles.divCards}>
                
    //             <div>
    //                 <select onChange={handlerOrder} >
    //                     <option value={"order"} disabled="disabled">Order by</option>
    //                     <option value={"Ascendente"}>Ascendente</option>
    //                     <option value={"Descendente"}>Descendente</option>
    //                 </select>
    //                 <select onChange={handlerFilter}>
    //                     <option value={"filter"} disabled="disabled">Filter by</option>
    //                     <option value={"Male"}>Male</option>
    //                     <option value={"Female"}>Female</option>
    //                     <option value={"Genderless"}>Genderless</option>
    //                     <option value={"unknown"}>unknown</option>
    //                 </select>
    //             </div>
    //             {
    //             characters.map((team) =>
    //                 <Card 
    //                     key={team.id}
    //                     name={team.name}
    //                     species={team.species}
    //                     gender={team.gender}
    //                     image={team.image}
    //                     detailId={team.id}
    //                     onClose = {() => onClose(team.id)}
    //                 />
    //             )
    //         }</div>
    //     </>
    // )
}