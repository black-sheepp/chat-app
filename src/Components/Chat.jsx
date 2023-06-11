import React from "react";
import Styles from "../Components/Chat.module.css";
import ChatInput from "../Components/ChatInput";
import ChatMessages from "./ChatMessages";

export default function Chat() {
     return (
          <div className={Styles.chat}>
               <div className={Styles.chatnav}>
                    <img
                         src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80"
                         alt=""
                         className={Styles.profileIcon}
                    />
                    <h4>Shivam</h4>
               </div>
               <ChatMessages />
               <div className={Styles.chatinp}>
                    <ChatInput />
               </div>
          </div>
     );
}
