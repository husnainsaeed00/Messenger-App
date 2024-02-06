import React from "react";

export default function Message({message,user}){
    const isUser=user===message.username;
                return(
                    <div className={`message ${isUser && 'message__user'}`}>
                        <div className="cardContent">
                        <div className="typoGraphy">{message.username}:{message.text}</div>
                        </div>
                    </div>
                )
}