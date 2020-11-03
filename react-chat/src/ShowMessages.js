import React,{useState, useEffect} from "react"
import MessageBox from './MessageBox';

const ShowMessages = ()=>{
const [messages, setMessages] = useState([])

useEffect( ()=>{
    fetch("https://roxana-chat-server.herokuapp.com/messages")
    
    .then((res) => res.json())
    .then((data) => setMessages(data))
}, []
)

return (
    <div className="messages">
       {messages.map(message => <MessageBox message={message} /> )} 
        
    </div>
)
}

export default ShowMessages