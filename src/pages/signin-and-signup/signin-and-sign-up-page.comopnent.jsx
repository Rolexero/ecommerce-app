import React from "react";
import Signin from "../../Components/sign-in/signin.component";
import Signup from "../../Components/signup/Signup.component";
import "./sigin-signup.styles.scss"

const SigninAndSignupPage = () => {

    return (
        <div className="sign-up-page">
            <Signin />
            <Signup />
        </div>
    )
}

export default SigninAndSignupPage