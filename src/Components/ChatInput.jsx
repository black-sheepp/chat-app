import React from "react";
import Styles from "../Components/ChatInput.module.css";

export default function ChatInput() {
     return (
          <form>
               <div className={Styles.upload}>
                    <label htmlFor="attachment">
                         <i className="fa-solid fa-paperclip"></i>
                    </label>
                    <input className={Styles.inputFile} type="file" id="attachment" hidden />
                    <label htmlFor="imageUpload">
                         <i className="fa-solid fa-image"></i>
                    </label>
                    <input className={Styles.inputAttach} type="file" id="imageUpload" hidden />
               </div>
               <input className={Styles.inputText} type="text" />
               <button className={Styles.btn}>Send</button>
          </form>
     );
}
