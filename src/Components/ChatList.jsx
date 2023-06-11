import React from 'react'
import Styles from '../Components/ChatList.module.css'

export default function ChatList() {
  return (
    <div className={Styles.inbox}>
      <div className={Styles.inboxHead}>
        <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80" alt="" />
        <p>Shivam Gupta</p>
      </div>
    </div>
  )
}
