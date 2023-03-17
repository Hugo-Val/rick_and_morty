import React from "react";
import { validation } from "./validation";
import styles from "./Form.module.css";

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username : '',
        password : '' 
    })

    const [errors, setErrors] = React.useState({
        username : '',
        password : ''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.divUsername} >
                <div >
                    <label >Username : </label>
                    <input 
                    className={styles.input}
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                     />
                     <p>{errors.username}</p>
                </div>
                <div>
                    <label>Password : </label>
                    <input 
                    className={styles.input}
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleInputChange}
                     />
                     <p>{errors.password}</p>
                </div>
                <br />
                <button className={styles.button}>Login</button>
            </form>
        </>
    )
}