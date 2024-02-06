import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

function App(){
  const [input,setInput] = useState('');
  const [messages,setMessages]=useState([{username:'Husnain',text:"whats up Guys"},{username:'Umar',text:"hi"}]);
  const [userName,setUserName]=useState('');
  useEffect(()=>{
    setUserName(prompt("Please enter your name:"))
  },[])
  console.log(messages)
  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages,{username:userName,text:input}])
    setInput('')
  }
    return (
      <>
      <h1>Hey guys we are going to create a Messenger app Now</h1>
      <h2>Welcome {userName}</h2>
        <form>
        <input value={input}  onChange={e=>setInput(e.target.value)}/>
        <button type='submit' disabled={!input} onClick={sendMessage}>Send</button> 
        </form>
        {
          messages.map(message=>(
            <Message message={message} user={userName}/>
          ))
        }
        {/* Input Field */}
        {/* send Button */}
        {/* Messages Theme */}
      </>
    );
  
}

export default App;
