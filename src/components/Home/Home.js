import Users from './users/Userss'
import React from 'react'
import Menu from './menu/Menu'
import Chat from './chatbox/Chat'
import Info from './infomation/Info'

const Home = () => {
    return (
        <div className='flex h-[100vh] w-[100%] '>
            <Menu />
            <Users />
            <Chat />
            <Info />
        </div>
    )
}

export default Home