import React, { useEffect, useRef, useState } from 'react'
import io from "socket.io-client";
import axios from 'axios'
const socket = io.connect("https://server-mess.onrender.com");
const Box = () => {
    const chatWindowRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const name = localStorage.getItem('user')
    const [users, setUsers] = useState([]);
    const filteredUsers = (selectedAuthor) => {
        const matchingUsers = users.filter(user => user.username === selectedAuthor);
        if (matchingUsers.length > 0) {
            return matchingUsers[0].avatar;
        } else {
            return 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';
        }
    };

    const [state, setstate] = useState([]);
    const joinRoom = () => {
        socket.emit("join_room", 1);
    };
    const getDataWithAxios = async () => {
        console.log('object')
        try {
            const response = await axios.get(`https://server-mess.onrender.com/api/chat`);
            const chatroom = response.data;
            const messages = chatroom.message[0].messages.slice(-20);

            console.log(chatroom.message[0].messages)
            setMessageList(messages.map(message => ({
                room: message.room,
                author: message.author,
                message: message.message,
                time: message.time
            })));
            try {
                const response = await axios.get('https://server-mess.onrender.com/api/user');
                setUsers(response.data.message);
                console.log(response.data.message)
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log('lỗi')
            throw new Error('Failed to get data');
        }
    };
    useEffect(() => {
        joinRoom()

        getDataWithAxios()
        // Add event listener for "receive_message" event
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
            console.log("receive_message")
        });
        // Remove event listener when component unmounts
        return () => {
            socket.off("receive_message");
        };
    }, []);
    useEffect(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
      }, [messageList]);
    return (
        <div className='px-5 min-h-screen'  ref={chatWindowRef}>
            {messageList && messageList.map((e, i) => (
                <div key={i} className={`chat ${e.author === name ? 'chat-end' : 'chat-start'}`}>
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            {users &&
                                <img src={filteredUsers(e.author)} />
                            }
                        </div>
                    </div>
                    <div className="chat-header">
                        {e.author}
                        <time className="text-xs opacity-50">{e.time}</time>
                    </div>
                    <div className="chat-bubble">{e.message}</div>
                    
                </div>
            ))}

        </div>
    )
}

export default Box

