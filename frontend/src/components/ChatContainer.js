import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import socketIOClient from "socket.io-client"
import ChatBoxReceiver, { ChatBoxSender } from './ChatBox'
import InputText from './InputText'

export default function ChatContainer() {
    const user = useSelector(store=> store.app.user)

    let socketio = socketIOClient("http://localhost:5000")
    const [chats, setChats] = useState([])
    
    useEffect(()=>{
        socketio.on('chat',senderChats =>{
            setChats(senderChats)
        })
    })
    function senderChatToSocket(chat){
        socketio.emit("chat", chat)
    }

    function addMessage(chat){
        const newChat = {...chat, user}
        setChats([...chats,newChat])
        senderChatToSocket([...chats, newChat])
    }

    function ChatList(){
        return chats.map((chat,index)=>{
            console.log("chat.user",chat.user.name)
            console.log("chatuser",user.name)
            if(chat.user.name === user.name)
                return <ChatBoxSender key={index} message={chat.message} user={chat.user.name}/>
            return <ChatBoxReceiver key={index} message={chat.message} user={chat.user.name}/>
        })
    }    
  return (
    <div>
       <div>
            <ChatList/>
            <InputText addMessage={addMessage}/>
        </div>
    </div>
  )
}

