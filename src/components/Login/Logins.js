import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import SpeechRecognition from '../SpeechRecognition';
const Logins = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setsLoading] = useState(false);
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {

        console.log(`Username: ${username}, Password: ${password}`);
        try {
            const response = await axios.get('https://messenger-mhlu.onrender.com/api/user');
            const users = response.data.message
            console.log(users)
            await users.map((e) => {
                console.log(e)
                if (e.username == username && e.password == password) {
                    console.log('thành công')
                    localStorage.setItem('user', username);
                    localStorage.setItem('avatar', e.avatar);
                    navigate('/')
                    window.location.reload();
                    return
                }
                alert('sai thông tin')
            })
        } catch (error) {
            alert('sai thông tin')
            console.error(error);
        }
    }
    return (
        <div className='w-[100vw] h-[100vh] flex-col  flex items-center justify-center'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="" />
            <h1 className=" text-3xl font-bold ">Kết nối với những người bạn yêu quý.</h1>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" className="m-5 input w-full max-w-xs bg-[#465a7e66]" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="input w-full max-w-xs bg-[#465a7e66]" />

            <button type='submit' onClick={handleSubmit} className=" m-5  btn btn-outline btn-secondary">Log in </button>

            <Link to={'/signup'}>
                <a className="link link-primary">Sign up</a>
            </Link>
            <SpeechRecognition />
        </div>
    )
}

export default Logins