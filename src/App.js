import React from 'react';
// import ReactDOM from 'react-dom'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';

const App=()=> {
	return (
		<ChatEngine
			height='100vh'
			userName='martha'
			userSecret='abcd'
			projectID='b5b6355c-ba3f-451a-9a2d-3a6c7dc1a030'
			renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}  /> }
				/>
	);
}
export default App;