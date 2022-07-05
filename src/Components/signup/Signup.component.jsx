import React from "react";
import "./signup.styles.scss"

const Signup = () => {
    return (
        <div className="sign-up">
            <h1 className="heading">Create New Account</h1>
            <form className="form">
                <input type="text" name="firstname" placeholder="FirstName" required />
                <input type="text" name="lastname" placeholder="LastName" required />
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required /> 
                <input type="Password" name="confirmPassword" placeholder="Confirm Password" required />
                    <button type="submit" className="submit-btn">Sign up</button>
            </form>
        </div>
    )
}

export default Signup