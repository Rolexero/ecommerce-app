import React from "react"
import "./signin.styles.scss"
import {auth, signInWithGoogle } from "../../firebase/firebase.utils"

const Signin = () => {

    const [signinData, setSigninData] = React.useState({
        email: "", password: ""
    })

    const handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = signinData;
        try {
            
           await auth.signInWithEmailAndPassword(email, password)
            setSigninData({
                email: "",
                password: ""
            })

        } catch (error) {
            console.log(error)
        }
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
            <form className="form" onSubmit={handleSubmit}>
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