import React from 'react'
import Styles from '../Components/ChatInput.module.css'

export default function ChatInput() {
  return (
    <form>
      <input className={Styles.input} type="text" />
      <button className={Styles.btn}>Send</button>
    </form>
  )
}
