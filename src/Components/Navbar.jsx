import React from "react";
import Styles from '../Components/Navbar.module.css'

export default function Navbar() {
     return (
          <div className={Styles.card}>
               <div className={Styles.card_top_part}>
                    <div className={Styles.left_part}>
                         <div className={Styles.user_name}>
                              <p className={Styles.name}>Jane Doe</p>
                         </div>
                         <button className={Styles.signout}>Logout</button>

                    </div>
                    <div className={Styles.right_part}>
                         <div className={Styles.user_photo}>
                              <img src="https://randomuser.me/api/portraits/women/79.jpg" className="photo" alt=""/>
                         </div>
                    </div>
               </div>
          </div>
     );
}
