import React from "react";
import Styles from "../Components/Search.module.css"

export default function Search() {
     return (
          <div>
               <input type="text" name="text" className={Styles.input} placeholder="Search" />
          </div>
     );
}
