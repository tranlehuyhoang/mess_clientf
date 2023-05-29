import React, { useEffect, useRef, useState } from 'react'
import io from "socket.io-client";

import axios from 'axios'
import screenshotImage from './wp5529802-hd-4k-anime-your-name-wallpapers.jpg'
import faefaefaef from './Screenshot 2023-05-28 134554 copy.png'
const socket = io.connect("https://messenger-mhlu.onrender.com");
// const socket = io.connect("http://localhost:5000");
const Box = () => {
    const messagesEndRef = useRef(null);
    const chatRef = useRef(null);
    const chatWindowRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState(true);
    const [messageList, setMessageList] = useState([]);
    const [Iduser, setIduser] = useState();
    const [status, setstatus] = useState([]);
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
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    });
    const filteredName = (selectedAuthor) => {
        const matchingUsers = users.filter(user => user.username === selectedAuthor);
        if (matchingUsers.length > 0) {
            return matchingUsers[0].name;
        } else {
            return 'user';
        }
    };
    const [isJoined, setIsJoined] = useState(false);

    const getOnlineUsers = async () => {
        try {
            const response = await axios.get('https://messenger-mhlu.onrender.com/api/status');
            const onlineUsers = response.data;
            setstatus(onlineUsers)
            console.log(status);
        } catch (error) {
            console.error(error);
        }
    };
    const joinRoom = () => {
        socket.emit("join_room", 1);
        setIsJoined(true);
    };

    useEffect(() => {

        if (!isJoined) {
            joinRoom();
            console.log('join_room')
        }
        // Remainder of useEffect...
    }, [isJoined]);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    const getDataWithAxios = async () => {
        console.log('object')
        try {
            const response = await axios.get(`https://messenger-mhlu.onrender.com/api/chat`);
            const chatroom = response.data;
            const messages = chatroom.message[0].messages.slice(-20);

            console.log(chatroom.message[0].messages)
            setMessageList(messages.map(message => ({
                room: message.room,
                author: message.author,
                message: message.message,
                time: message.time
            })));
            scrollToBottom()
            try {
                const response = await axios.get('https://messenger-mhlu.onrender.com/api/user');
                setUsers(response.data.message);
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log('lỗi')
            throw new Error('Failed to get data');
        }
    };
    const [userData, setUserData] = useState(null);

    const fetchData = async () => {
        if (Iduser) {
            try {
                const response = await axios.post('https://messenger-mhlu.onrender.com/api/status', {
                    name: name,
                    ids: Iduser,

                });

                setUserData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

    };
    useEffect(() => {
        fetchData();
    }, [Iduser]);

    useEffect(() => {
        if (userData) {
            setCurrentMessage(false);
            console.log(userData);
        }
    }, [userData]);
    useEffect(() => {
        socket.on('send_user', (data) => {
            console.log(data)
            console.log('join_room', data)
            setIduser(data)
        })
    }, []);
    useEffect(() => {
        socket.on('user_online', (data) => {
            getOnlineUsers()
            console.log('user_online')
        })
    }, [socket]);
    useEffect(() => {
        getDataWithAxios()



        // Add event listener for "receive_message" event
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
            console.log("receive_message")
            scrollToBottom()
        });
        // Remove event listener when component unmounts
        return () => {
            socket.off("receive_message");
            socket.off("send_user");
        };
    }, [socket]);
    useEffect(() => {
        scrollToBottom()
    }, [messageList]);
    useEffect(() => {
        socket.on("status_user", (data) => {
            console.log("status_user")
            getOnlineUsers()
        })
    }, []);
    const filterStatus = (name) => {
        for (let i = 0; i < status.length; i++) {
            if (name == status[i].name && status[i].ids != "") {
                console.log(name, 'online')
                return 'online'
            }
        }
        console.log(name, 'offline')
        return 'offline'
    };

    return (
        <div className={`px-5 min-h-screen bg-[${screenshotImage}]  `} ref={chatWindowRef}>

            {messageList && messageList.map((e, i) => (
                <div key={i} className={`chat ${e.author === name ? 'chat-end' : 'chat-start'}`} ref={chatRef}>

                    <div className={`avatar chat-image ${filterStatus(e.author)}`}>
                        <div className="w-12 rounded-full">
                            {users &&
                                <img src={filteredUsers(e.author)} />
                            }

                        </div>
                    </div>
                    <div className="chat-header pb-3">
                        {filteredName(e.author)}
                    </div>
                    {e.message.includes('https://firebasestorage') &&
                        <img src={e.message} className='h-[500px]' />

                    }
                    {
                        e.message.includes('http') && !e.message.includes('https://firebasestorage') &&
                        <a className="chat-bubble" href={e.message}>{e.message}</a>

                    }
                    {
                        !e.message.includes('data:') && !e.message.includes('http') &&
                        <div className="chat-bubble">{e.message}</div>
                    }

                    <time className="text-xs pt-3  opacity-50">{e.time}</time>

                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Box

