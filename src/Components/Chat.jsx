import React from "react";
import Styles from "../Components/Chat.module.css";
import ChatInput from "../Components/ChatInput";
import ChatMessages from "./ChatMessages";

export default function Chat() {
     return (
          <div className={Styles.chat}>
               <div className={Styles.chatnav}>
                    <div className={Styles.userInfo}>
                         <strong>Shivam</strong>
                         {/* <small>Active</small> */}
                    </div>
                    <div className={Styles.callMenu}>
                    <i className="fa-solid fa-video fa-lg"></i>
                    <i className="fa-solid fa-user-plus"></i>
                    <i className="fa-solid fa-ellipsis fa-xl" ></i>
                    </div>
               </div>
               <ChatMessages />
               <div className={Styles.chatinp}>
                    <ChatInput />
               </div>
          </div>
     );
}
