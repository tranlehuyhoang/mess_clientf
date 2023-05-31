import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import axios from 'axios'
const socket = io.connect("https://messenger-mhlu.onrender.com");
const Chatmember = () => {
    const [status, setstatus] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('https://messenger-mhlu.onrender.com/api/user');
                setUsers(response.data.message);
                console.log(response.data.message)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, [socket]);
    useEffect(() => {
        socket.on('user_online', (data) => {
            getOnlineUsers()
            console.log('user_online')
        })
    }, []);
    useEffect(() => {
        socket.on("status_user", (data) => {
            console.log("status_user")
            getOnlineUsers()
        })
    }, []);
    const getOnlineUsers = async () => {
        try {
            const response = await axios.get('https://messenger-mhlu.onrender.com/api/status');
            const onlineUsers = response.data;
            setstatus(onlineUsers)
        } catch (error) {
            console.error(error);
        }
    };
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
        <ul className="menu bg-base-100  w-100% ">

            {users.map((e, i) => {
                return (
                    <li><a>
                        <div className={`avatar ${filterStatus(e.username)}`}>
                            <div className="w-12 rounded-full">
                                <img src={e.avatar} />
                            </div>
                        </div>
                        <h1 className=" sm:hidden lg:block  hidden font-bold">{e.name}</h1>
                    </a>
                    </li>
                )
            })}
        </ul>

    )
}

export default Chatmember