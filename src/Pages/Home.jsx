import React from 'react'
import Sidebar from '../Components/Sidebar'
import Styles from '../Pages/Home.module.css'
import Chat from '../Components/Chat'

export default function Home() {
  return (
    <div className={Styles.home}>
      <div className={Styles.container}>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
