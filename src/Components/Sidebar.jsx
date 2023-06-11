import React from 'react'
import Styles from '../Components/Sidebar.module.css'
import Navbar from '../Components/Navbar'
import Search from './Search'
import ChatList from './ChatList'

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Navbar/>
      <Search/>
      <ChatList/>
    </div>
  )
}
