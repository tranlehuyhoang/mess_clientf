import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SpeechRecognition from '../SpeechRecognition';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.get('https://messenger-mhlu.onrender.com/api/user');
            const users = response.data.message;
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('user', username);
                localStorage.setItem('avatar', user.avatar);
                navigate('/');
                window.location.reload();
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Error logging in. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <div className='w-[100vw] h-[100vh] flex-col  flex items-center justify-center'>
            {loading && (
                <div className='flex-col  flex items-center justify-center'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg' alt='' />
                    <div>Loading...</div>
                </div>
            )}

            {!loading && (
                <div className='flex-col  flex items-center justify-center'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg' alt='' />
                    <h1 className='text-3xl font-bold'>Kết nối với những người bạn yêu quý.</h1>
                    <form onSubmit={handleSubmit} className='flex-col flex items-center justify-center'>
                        <input type='text' value={username} onChange={handleUsernameChange} placeholder='Username' className='m-5 input w-full max-w-xs bg-[#465a7e66]' />
                        <input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' className='input w-full max-w-xs m-5 bg-[#465a7e66]' />
                        <button type='submit' className='m-5 btn btn-outline btn-secondary'>Log in </button>
                    </form>

                    <Link to={'/signup'}>
                        <a className='link link-primary'>Sign up</a>
                    </Link>
                    <SpeechRecognition />
                </div>
            )}
        </div>
    );
};

export default Login;