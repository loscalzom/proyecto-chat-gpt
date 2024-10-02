import React from 'react'
import dataHistoryChat from '../dataHistory'
import { PiNotePencilBold } from "../icons";
import {BiSidebar} from "../icons"






const ChatHistory = () => {
    const chatHistory = dataHistoryChat.map((chat) => {
        return (
            <div className='containerByDay'  key={chat.id} >
                <div ><h3>{chat.timestamp}</h3>
               {chat.conversations.map ((conversation)=>{return (<div className='conversationsHistoryChat' key={conversation.id }>{conversation.titulo}</div>)})}
          </div>
          </div>
        );
    });

    return (
        <aside className='leftPage' >
    
    <div className='containerHistoryChat'> <div className='buttonsContainer'> < BiSidebar className='button'/> <PiNotePencilBold className='button'/></div>
        <div className='chatHistory'>
            {chatHistory}
        </div></div>
        </aside>
    );
}

export default ChatHistory 