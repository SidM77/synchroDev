import axios from 'axios'
import Chat from './Chat'
import ChatInput from './ChatInput'
import { useEffect, useState } from 'react'

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?.user_id
  const clickedUserId = clickedUser?.user_id
  const [userMessages, setUserMessages] = useState(null)

  const getUserMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/messages', {
        params: { userId: userId, correspondingUserId: clickedUserId },
      })

      setUserMessages(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getUserMessages()
  }, [userMessages])
  return (
    <>
      <Chat />
      <ChatInput />
    </>
  )
}

export default ChatDisplay
