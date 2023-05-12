import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Chatmember = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:5000/api/user');
                setUsers(response.data.message);
                console.log(response.data.message)
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsers();
    }, []);
    return (
        <ul className="menu bg-base-100  w-100%">
            <li><a>
                <div className="avatar offline">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <h1 className=" sm:hidden lg:block  hidden font-bold">Box Office News!</h1>
            </a></li>
            {users.map((e, i) => {
                return (
                    <li><a>
                        <div className="avatar offline">
                            <div className="w-12 rounded-full">
                                <img src={e.avatar} />
                            </div>
                        </div>
                        <h1 className=" sm:hidden lg:block  hidden font-bold">{e.username}</h1>
                    </a>
                    </li>
                )
            })}
        </ul>

    )
}

export default Chatmember