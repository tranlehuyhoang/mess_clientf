import React, { useState } from 'react'
import Box from './Box'
import Input from './Input'
import screenshotImagfafee from './wp5529802-hd-4k-anime-your-name-wallpapers.jpg'
import './Box.css'
import screenshotImage from './Screenshot 2023-05-28 134554.png'
import { useDispatch, useSelector } from 'react-redux';
import { setHide, setShow } from '../../../redux/actions';
const Chat = () => {
    const dispatch = useDispatch();
    const shows = useSelector(state => state.show);
    const handleOnshowprofile = () => {
        !shows ?
            dispatch(setShow())
            :
            dispatch(setHide())
    }
    return (
        <div className='relative flex-col flex-1 h-[100vh] overflow-y-scroll'>
            <div className="navbar bg-base-100 bg-gray-700 w-[100%] justify-between sticky top-0 z-50">
                <div className="flex-1 flex-row">
                    <div className="avatar h-12">
                        <img src={screenshotImage} className="rounded-full w-full h-full object-cover" style={{ borderRadius: '50%' }} />
                    </div>
                    <label tabIndex={0} className="flex-1 p-2">
                        <h1 className="font-bold">We18304_☬ᴘʀιvᴀтᴇ☬_Lập trình</h1>
                    </label>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    </div>
                    <div className="dropdown dropdown-end flex items-center ">
                        <button className="btn rounded-full m-2">
                            <svg fill="#a797ff" role="presentation" viewBox="0 0 36 36" width="30px"><path d="M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 00.037-2.151 4.998 4.998 0 00-.723-.963 11.594 11.594 0 00-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 01-.437.055 11.557 11.557 0 01-4.045-2.63 11.554 11.554 0 01-2.63-4.044.472.472 0 01.056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0013.14 8.51a4.995 4.995 0 00-.963-.723 2.05 2.05 0 00-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z"></path></svg>
                        </button>
                        <button className="btn rounded-full m-2">
                            <svg fill="#a797ff" role="presentation" viewBox="0 0 36 36" width="34px"><path d="M9 9.5a4 4 0 00-4 4v9a4 4 0 004 4h10a4 4 0 004-4v-9a4 4 0 00-4-4H9zm16.829 12.032l3.723 1.861A1 1 0 0031 22.5v-9a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"></path></svg>
                        </button>
                        <button className="btn  rounded-full m-2" onClick={handleOnshowprofile}>
                            <svg fill="#a797ff" role="presentation" viewBox="0 0 36 36" width="28px"><path d="M12.5 18C12.5 19.2426 11.4926 20.25 10.25 20.25C9.00736 20.25 8 19.2426 8 18C8 16.7574 9.00736 15.75 10.25 15.75C11.4926 15.75 12.5 16.7574 12.5 18Z" fill="#a797ff"></path><path d="M20.25 18C20.25 19.2426 19.2426 20.25 18 20.25C16.7574 20.25 15.75 19.2426 15.75 18C15.75 16.7574 16.7574 15.75 18 15.75C19.2426 15.75 20.25 16.7574 20.25 18Z" fill="#a797ff"></path><path d="M25.75 20.25C26.9926 20.25 28 19.2426 28 18C28 16.7574 26.9926 15.75 25.75 15.75C24.5074 15.75 23.5 16.7574 23.5 18C23.5 19.2426 24.5074 20.25 25.75 20.25Z" fill="#a797ff"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative  '>
                <img src={screenshotImagfafee} alt="" className='fixed top-0 w-full h-full -z-10 boxxxx' />
                <Box />
                <Input />
            </div>

        </div>
    )
}

export default Chat