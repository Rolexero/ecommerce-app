import {React, useEffect, useState} from "react";
import "./signup.styles.scss"

const Signup = () => {
    const [formData, setFormData] = useState({
        firstname: "", 
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    }) 

    
    function handleSubmit (event) {
        event.preventDefault()
    } 


    function handleChange (event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
                
            }
        })
    } 


    return (
        <div className="sign-up">
            <h1 className="heading">Create New Account</h1>
            <form className="form" onChange={handleSubmit}>
                <input type="text" name="firstname" placeholder="FirstName" onChange={handleChange} value={formData.firstname} required />
                <input type="text" name="lastname" placeholder="LastName" onChange={handleChange}  value={formData.lastname} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange}  value={formData.email} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={formData.password} required /> 
                <input type="Password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}  value={formData.confirmPassword} required />
                <button type="submit" className="submit-btn">Sign up</button>
            </form>
        </div>
    )
    
}

export default Signup