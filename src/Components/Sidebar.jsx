import React from 'react'
import Styles from '../Components/Sidebar.module.css'
import Navbar from '../Components/Navbar'

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Navbar/>
    </div>
  )
}
