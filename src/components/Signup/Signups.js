import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import storage from '../Firebase/Config'
const Signups = () => {

    const [namename, setNamename] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [password, setspassword] = useState();
    const [loading, setLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const navigate = useNavigate();
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleFileChange = event => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (allowedTypes.includes(file.type)) {
            const storageRef = storage.ref();
            const fileRef = storageRef.child(`images/${file.name}`);

            fileRef.put(file)
                .then(() => {
                    // Get image URL
                    fileRef.getDownloadURL().then(url => {
                        url && setImage(url);
                        setLoading(false)
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            alert('Chọn image hoặc gif');
        }
    };
    function handleFileSelect(event) {
        setLoading(true)
        const file = event.target.files[0];
        handleFileChange(event)

        const reader = new FileReader();

        reader.onload = function (event) {

        };
        reader.readAsDataURL(file);
    }

    const handlePasswordChange = (event) => {
        setspassword(event.target.value);
    }
    const handleName = (event) => {
        setNamename(event.target.value);
    }
    const handleSubmit = async (event) => {
        setLoadings(true)

        event.preventDefault();
        if (namename && image && password) {
            await console.log(name, password, image, namename)
            try {
                const response = await axios.post('https://messenger-mhlu.onrender.com/api/user', { username: name, password: password, avatar: image, name: namename });
                setLoadings(false)
                navigate('/login')
            } catch (error) {
                alert(error)
            }
        } else {
            alert('Nhập thông tin')
        }
    }
    return (
        <div className='w-[100vw] h-[100vh] flex-col  flex items-center justify-center'>
            {
                loadings ?
                    <div>Loading...</div>
                    :
                    <>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="" />
                        <h1 className=" text-3xl font-bold ">Kết nối với những người bạn yêu quý.</h1>
                        <input type="text" placeholder="Họ và Tên" onChange={handleName} value={namename} className="mt-5 input w-full max-w-xs bg-[#465a7e66]" />
                        <input type="text" placeholder="Username" onChange={handleNameChange} value={name} className="m-5 input w-full max-w-xs bg-[#465a7e66]" />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="input w-full max-w-xs bg-[#465a7e66]" />
                        {!loading ?
                            <input type="file" className="file-input file-input-bordered m-5 file-input-secondary w-full max-w-xs" placeholder="Avatar" onChange={handleFileSelect} />
                            :
                            <div>Loading...</div>}
                        {image && <img src={image} width={'100px'} alt="Preview" />}
                        <Link >
                            <button className=" m-5  btn btn-outline btn-secondary" onClick={handleSubmit}>Sign up</button>
                        </Link>
                        <Link to={'/login'}>
                            <button type='submit' className="link link-primary"  >Log in</button>
                        </Link>
                    </>

            }

        </div>
    )
}

export default Signups