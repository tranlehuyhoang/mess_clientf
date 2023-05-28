import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signups = () => {
    const [namename, setNamename] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [password, setspassword] = useState();
    const [rewirepassword, setrewirespassword] = useState();
    const navigate = useNavigate();
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    }
    const handlerewirepasswordChange = (event) => {
        setrewirespassword(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setspassword(event.target.value);
    }
    const handleName = (event) => {
        setNamename(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000api/user', { username: name, password: password, avatar: image, name: namename });
            console.log(response.data)
            alert('Thành công')
            navigate('/login')
        } catch (error) {
            alert('Username đã tồn tại')
        }
    }
    return (
        <div className='w-[100vw] h-[100vh] flex-col  flex items-center justify-center'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="" />
            <h1 className=" text-3xl font-bold ">Kết nối với những người bạn yêu quý.</h1>
            <input type="text" placeholder="Username" onChange={handleName} value={namename} className="mt-5 input w-full max-w-xs bg-[#465a7e66]" />
            <input type="text" placeholder="Username" onChange={handleNameChange} value={name} className="m-5 input w-full max-w-xs bg-[#465a7e66]" />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="input w-full max-w-xs bg-[#465a7e66]" />
            <input type="password" value={rewirepassword} onChange={handlerewirepasswordChange} placeholder="Password" className="m-5 input w-full max-w-xs bg-[#465a7e66]" />
            <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" placeholder="Avatar" onChange={handleFileSelect} />
            {image && <img src={image} width={'100px'} alt="Preview" />}
            <Link >
                <button className=" m-5  btn btn-outline btn-secondary" onClick={handleSubmit}>Sign up</button>
            </Link>
            <Link to={'/login'}>
                <button type='submit' className="link link-primary"  >Log in</button>
            </Link>
        </div>
    )
}

export default Signups