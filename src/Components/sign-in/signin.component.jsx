import React from "react"
import "./signin.styles.scss"
import {auth, signInWithGoogle } from "../../firebase/firebase.utils"

const Signin = () => {

    const [signinData, setSigninData] = React.useState({
        email: "", password: ""
    })

    function handleSubmit (event) {
        event.preventDefault()
    }

    function handleChange(event) { 
        setSigninData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    

    return (
        <div className="signin">
            <h1 className="heading">Sign In</h1>
            <form className="form" onChange={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} placeholder="Email" value={signinData.email} required/>
                <input type="password" onChange={handleChange} name="password" placeholder="Password" value={signinData.password} required />
                <div className="btn-container">
                <button type="submit" className="submit-btn">Sign In</button>
                <button className="google-btn" onClick={signInWithGoogle}>Sign in with Google</button> 
                </div>
               
            </form>
        </div>
        
    )
}

export default Signin