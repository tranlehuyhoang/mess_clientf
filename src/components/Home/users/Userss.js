import React from 'react'
import Chatmember from './Chatmember'

const Users = () => {
    return (
        <div className='h-[100vh] overflow-y-scroll'>
            <div className=' sticky flex flex-col lg:p-5 bg-gray-700 items-center top-0 z-50'>
                <div className='flex justify-center p-4'>
                    <div className='m-2'> Chat</div>
                    <button className="btn btn-sm m-2 sm:hidden hidden md:hidden lg:block ">
                        <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1p6odiv" fill="currentColor" height="28" width="28"><path clip-rule="evenodd" d="M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm8 0a1 1 0 112 0v3.25c0 .138.112.25.25.25h3.25a1 1 0 110 2h-3.25a.25.25 0 00-.25.25v3.25a1 1 0 11-2 0v-3.25a.25.25 0 00-.25-.25H9.5a1 1 0 110-2h3.25a.25.25 0 00.25-.25V13.5z" fill-rule="evenodd"></path><path d="M29.552 23.393l-3.723-1.861A1.5 1.5 0 0125 20.19v-4.38a1.5 1.5 0 01.829-1.342l3.723-1.861A1 1 0 0131 13.5v9a1 1 0 01-1.448.894z"></path></svg>
                    </button>
                    <button className="btn btn-sm m-2 sm:hidden hidden md:hidden lg:block ">

                        <svg viewBox="0 0 36 36" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0" fill="currentColor" height="28" width="28"><path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path><path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path></svg>         </button>
                </div>
                <form>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative sm:hidden md:hidden lg:block hidden ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="  h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block   p-4 pl-10 text-sm text-gray-900 border  rounded-lg   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
                </form>
            </div>
            <Chatmember />
        </div>
    )
}

export default Users