import React from "react"
import "./signin.styles.scss"

const Signin = () => {

    return (
        <div className="signin">
            <h1 className="heading">Sign In</h1>
            <form className="form">
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required />
                <div className="btn-container">
                <button type="submit" className="submit-btn">Sign In</button>
                <button className="google-btn">Sign in with Google</button> 
                </div>
               
            </form>
        </div>
        
    )
}

export default Signin