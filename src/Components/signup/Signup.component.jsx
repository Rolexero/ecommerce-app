import {React, useState} from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import "./signup.styles.scss"

const Signup = () => {
    const [formData, setFormData] = useState({
        displayName: "", 
        email: "",
        password: "",
        confirmPassword: ""
    }) 

    
     const handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = formData;

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

           await createUserProfileDocument(user, {displayName})
            setFormData ({
               displayName: '',
               email: '',
               password: '',
               confirmPassword: ''
            })



        } catch (error) {
            console.log(error)
        }
    }


    function handleChange (event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
               [name]:value           
            }
        })
    } 

    const { displayName,  email, password, confirmPassword } = formData;

    return (
        
        <div className="sign-up">
            <h1 className="heading">Create New Account</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="displayName" placeholder="Display Name" onChange={handleChange} value={displayName} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange}  value={email} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={password} required /> 
                <input type="Password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}  value={confirmPassword} required />
                <button type="submit" className="submit-btn">Sign up</button>
            </form>
        </div>
    )
    
}

export default Signup