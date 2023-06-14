import React from 'react'
import Styles from "../Pages/Register.module.css";

export default function Signin() {
  return (
    <div className={Styles.formContainer}>
               <h1 style={{color: "white"}}>ChatSphere</h1>
               <form className={Styles.form}>
                    <p className={Styles.form_title}>Sign In to ChatSphere</p>
                    <div className={Styles.input_container}>
                         <input type="email" placeholder="Enter email" />
                         <span></span>
                    </div>
                    <div className={Styles.input_container}>
                         <input type="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className={Styles.submit}>
                         Sign In
                    </button>
                    <p className="signup-link">
                         No account?
                         {/* <link href="">Sign up</link> */}
                    </p>
               </form>
          </div>
  )
}
