import React, { useState } from 'react';
import io from "socket.io-client";
import storage from '../../Firebase/Config';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { v4 } from "uuid";


const socket = io.connect("https://messenger-mhlu.onrender.com");
const Input = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [fileContent, setFileContent] = useState(null);
    const [currentMessage, setCurrentMessage] = useState("");
    const handleOnChangeValueInput = (event) => {
        setCurrentMessage(event.target.value);
    };

    const sendMessage = async () => {
        const messageData = {
            room: 1,
            author: localStorage.getItem('user'),
            message: fileContent ? fileContent : currentMessage,
            time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
        };
        console.log(messageData)
        setFileContent(null)
        await socket.emit("send_message", messageData);
        setCurrentMessage("")
    };
    const handleFileChangess = (event) => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`images/${file.name}`);
        fileRef.put(file).then(() => {

            // Lấy link ảnh
            fileRef.getDownloadURL().then((url) => {

                url && setFileContent(url)
            });
        }).catch((error) => {
            console.error(error);
        });
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        handleFileChangess(event)
        const reader = new FileReader();
        reader.onload = (event) => {

            console.log(event.target.result)
        };
        reader.readAsDataURL(file);
    };
    return (
        <div className="sticky w-[100%]  bottom-0 flex right-0">
            {fileContent &&
                <img src={fileContent} alt="" srcset="" className='h-[300px]' />
            }

            <span className="absolute inset-y-0 flex items-center">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                    </svg>
                </button>
            </span>
            <textarea
                value={currentMessage}
                onChange={handleOnChangeValueInput}
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-200 placeholder-gray-600 pl-12 bg-gray-700 rounded-md py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 flex sm:flex">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                    </svg>
                </button>

                <label htmlFor="username">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                    </svg>
                </label>
                <input onChange={handleFileChange} className='w-[0px]' type="file" id="username" name="username" />
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
                <button
                    onClick={sendMessage}
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                    <span className="font-bold">Send</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-6 ml-2 transform rotate-90"
                    >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Input;