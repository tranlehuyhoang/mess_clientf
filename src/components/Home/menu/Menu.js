import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import io from "socket.io-client";

const socket = io.connect("hhttps://messenger-mhlu.onrender.com/");

const Menu = () => {
    const [img, setimg] = useState();

    useEffect(() => {
        setimg(localStorage.getItem('avatar'))

    }, []);
    const handleDisconnect = () => {
        console.log('logout')
        socket.disconnect()
    }
    return (

        <div className="top-0  flex flex-col justify-between     bg-gray-700    text-white border border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white  ">
            <div className='flex-col flex'>
                <button type="button" className="relative inline-flex items-center  px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0" fill="currentColor" height="28" width="28"><path clip-rule="evenodd" d="M29 17.504c0 6.103-4.606 10.57-11 10.57-1.065 0-2.08-.095-3.032-.327a4.26 4.26 0 00-2.39.09L8.91 28.962c-.59.202-1.164-.372-.964-.985l.729-2.411a3.007 3.007 0 00-.291-2.5C7.414 21.484 7 19.596 7 17.504v-.002c0-6.103 4.607-10.498 11-10.498s11 4.395 11 10.498v.002z" fill-rule="evenodd"></path></svg>
                </button>
                <button type="button" className="relative inline-flex items-center  px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy" fill="currentColor" height="28" width="28"><path d="M7.25 12.305C7.25 16.207 9.446 18 12 18s4.75-1.793 4.75-5.695C16.75 9.123 14.75 7 12 7s-4.75 2.123-4.75 5.305zM15.082 21.607c.39-.423.262-1.13-.296-1.269A11.576 11.576 0 0012 20c-4.835 0-9 2.985-9 6.665C3 27.405 3.37 28 4.06 28h7.81c.66 0 1.13-.675 1.13-1.335 0-1.97.83-3.697 2.082-5.058zM19.25 12.305C19.25 16.207 21.446 18 24 18s4.75-1.793 4.75-5.695C28.75 9.123 26.75 7 24 7s-4.75 2.123-4.75 5.305zM33 26.665c0 .74-.37 1.335-1.06 1.335H16.06c-.69 0-1.06-.595-1.06-1.335C15 22.985 19.165 20 24 20s9 2.985 9 6.665z"></path></svg>
                </button>
                <button type="button" className="relative inline-flex items-center  px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy" fill="currentColor" height="28" width="28"><path d="M12.164 14.88A3 3 0 016.5 13.5c0-1.03.967-3.294 1.699-4.858C8.674 7.625 9.705 7 10.828 7h14.345c1.122 0 2.153.625 2.628 1.642.732 1.564 1.699 3.827 1.699 4.858a3 3 0 01-5.664 1.38c-.066-.126-.276-.126-.342 0a3 3 0 01-5.324.008c-.066-.126-.274-.126-.34 0a3 3 0 01-5.324-.008c-.066-.126-.276-.126-.342 0zM12.479 17.714a.267.267 0 00-.288 0 4.976 4.976 0 01-3.086.77c-.315-.024-.605.211-.605.528v7.984a2 2 0 002 2h4a1 1 0 001-1v-5a1 1 0 011-1h3a1 1 0 011 1v5a1 1 0 001 1h4a2 2 0 002-2v-7.984c0-.317-.29-.552-.605-.527a4.976 4.976 0 01-3.086-.77.267.267 0 00-.288 0c-.776.496-1.7.785-2.691.785-.99 0-1.911-.288-2.687-.783a.267.267 0 00-.286 0 4.975 4.975 0 01-2.687.783 4.976 4.976 0 01-2.691-.786z"></path></svg>
                </button>
                <button type="button" className="relative inline-flex items-center  px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy" fill="currentColor" height="28" width="28"><path clip-rule="evenodd" d="M18 28.074c6.394 0 11-4.467 11-10.57v-.002c0-6.103-4.606-10.498-11-10.498-6.392 0-10.998 4.395-11 10.498v.002c.001 2.091.415 3.98 1.384 5.562.458.747.563 1.664.29 2.5l-.728 2.41c-.2.614.373 1.188.964.986l3.668-1.125a4.26 4.26 0 012.39-.09c.953.232 1.967.327 3.032.327zM13 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill-rule="evenodd"></path></svg>
                </button>
                <button type="button" className="relative inline-flex items-center  px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy" fill="currentColor" height="28" width="28"><path d="M8 7.5a1 1 0 00-1 1V10a1 1 0 001 1h20a1 1 0 001-1V8.5a1 1 0 00-1-1H8z"></path><path clip-rule="evenodd" d="M9 13.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v12a3 3 0 01-3 3H12a3 3 0 01-3-3v-12zm4.5 3.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 110 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25z" fill-rule="evenodd"></path></svg>           </button>
            </div>
            <div className='flex flex-col items-center'>
                <div className="avatar  ">
                    <div className="w-12 rounded-full">
                        <img src={img} />
                    </div>
                </div>
                <button type="button" className="relative inline-flex items-center    text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <div className=" rounded-full">
                        <div className="dropdown dropdown-right dropdown-end">
                            <label tabIndex={0} className="btn rounded-full ">
                                <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0" fill="currentColor" height="24" width="24"><path d="M21.498 14.75a1 1 0 001-1V12a4 4 0 00-4-4h-6.5a4 4 0 00-4 4v12a4 4 0 004 4h6.5a4 4 0 004-4v-1.75a1 1 0 00-1-1h-.5a1 1 0 00-1 1V24a1.5 1.5 0 01-1.5 1.5h-6.5a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6.5a1.5 1.5 0 011.5 1.5v1.75a1 1 0 001 1h.5z"></path><path d="M14.498 16.75h9.752a.25.25 0 00.25-.25v-1.858a1 1 0 011.642-.766l4.002 3.356a1 1 0 010 1.532l-4.002 3.357a1 1 0 01-1.642-.767V19.5a.25.25 0 00-.25-.25h-9.752a1 1 0 01-1-1v-.5a1 1 0 011-1z"></path></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={'/login'}><a>Log in</a></Link>
                                </li>
                                <li>
                                    <Link onClick={handleDisconnect} to={'/signup'}><a>Log out</a></Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </button>
            </div>
        </div>

    )
}

export default Menu