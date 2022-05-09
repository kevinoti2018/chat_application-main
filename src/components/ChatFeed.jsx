import React from 'react'

import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


const ChatFeed = (props) =>{
    const {chats,activeChat,userName, messages} = props;
    const chat = chats && chats[activeChat]

    // console.log(chat,userName,messages)

    const renderMessages = ()=>{
        const keys = Object.keys(messages)
        return keys.map((key,index) => {
            const message = messages[key];
            const lastMessageKey = index === 0? null :keys[index-1]
            const isMyMessage
        })
    }
    renderMessages()

    return(
<div>
    ChatFeeds
</div>
    );
}

export default ChatFeed