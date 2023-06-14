import React from "react";
import Styles from "../Components/ChatMessage.module.css";

export default function ChatMessages() {
     return (
          <div>
               <div className={Styles.leftside}>
                    <img
                         src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                         alt=""
                         className={Styles.profileIcon}
                    />
                    <p className={Styles.incomingmsg}>Hey There!</p>
                    <small className={Styles.TimeInfo}>3:40 AM</small>
               </div>
               <div className={Styles.rightside}>
                    <small className={Styles.TimeInfo}>3:41 AM</small>
                    <p className={Styles.outgoingmsg}>Lorem ipsum dolor sit amet consectetur.</p>
                    <img
                         src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80"
                         alt=""
                         className={Styles.profileIcon}
                    />
                    
               </div>
          </div>
     );
}
