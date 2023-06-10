import React from "react";
import Styles from "../Pages/Register.module.css";

export default function Register() {
     return (
          <div className={Styles.formContainer}>
               <h1 style={{color: "white"}}>ChatSphere</h1>
               <form className={Styles.form}>
                    <p className={Styles.form_title}>Sign up to ChatSphere</p>
                    <div className={Styles.input_container}>
                         <input type="text" placeholder="Enter Name" />
                         <span></span>
                    </div>
                    <div className={Styles.input_container}>
                         <input type="email" placeholder="Enter email" />
                         <span></span>
                    </div>
                    <div className={Styles.input_container}>
                         <input type="password" placeholder="Enter password" />
                    </div>
                    <div className={Styles.input_container}>
                         <i class="fa-solid fa-user" color="#4F46E5"></i>
                         <label style={{color: "#4F46E5"}} htmlFor="file">Upload Avatar</label>
                         <input type="file" style={{display: "none"}} id="file" placeholder="Enter password" />
                    </div>
                    <button type="submit" className={Styles.submit}>
                         Sign Up
                    </button>
                    <p className="signup-link">
                         No account?
                         {/* <a href="">Sign up</a> */}
                    </p>
               </form>
          </div>
     );
}
