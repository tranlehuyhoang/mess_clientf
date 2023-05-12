import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setHide, setShow } from '../../../redux/actions';
const Info = () => {
 
    const shows = useSelector(state => state.show);
   
 
    return (
        <div>
            {
                shows &&
                <>
                   
                    <div className='w-[400px] flex flex-col items-center sm:hidden md:hidden lg:hidden xl:flex hidden'>
                        <div className='avatar py-7'>
                            <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                            </div>
                        </div>
                        <h1 className='py-3 font-bold'>Box Office News!</h1>
                        <p className='px-6'>Đang hoạt động</p>
                        <div className=''>
                            <button className='btn btn-circle btn-outline'>
                                <svg
                                    viewBox='0 0 36 36'
                                    className='x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0'
                                    fill='currentColor'
                                    height='28'
                                    width='28'
                                >
                                    <path
                                        clipRule='evenodd'
                                        d='M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm5.824-6.132c.408.316.431.91.059 1.268A8.472 8.472 0 0118 26.5c-2.283 0-4.355-.9-5.883-2.364a.834.834 0 01.059-1.268C13.654 21.719 15.746 21 18 21c2.255 0 4.346.719 5.824 1.868zM18 19c-1.882 0-3.5-1.304-3.5-4.142C14.5 12.544 15.974 11 18 11s3.5 1.544 3.5 3.858C21.5 17.696 19.882 19 18 19z'
                                        fillRule='evenodd'
                                    ></path>
                                </svg>
                            </button>
                            <button className='mx-4 my-3 btn btn-circle btn-outline'>
                                <svg
                                    viewBox='0 0 36 36'
                                    className='x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0'
                                    fill='currentColor'
                                    height='28'
                                    width='28'
                                >
                                    <path d='M18 7a6.569 6.569 0 016.467 5.414l1.367 7.658a3 3 0 00.832 1.594l.92.92a1.414 1.414 0 01-1 2.414H9.414a1.414 1.414 0 01-1-2.414l.92-.92a3 3 0 00.832-1.594l1.367-7.658A6.569 6.569 0 0118 7zm-2.5 20c-.276 0-.504.226-.459.498a3 3 0 005.918 0c.045-.273-.183-.498-.459-.498h-5z'></path>
                                </svg>
                            </button>
                            <button className='btn btn-circle btn-outline'>
                                <svg
                                    viewBox='0 0 36 36'
                                    className='x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0'
                                    fill='currentColor'
                                    height='28'
                                    width='28'
                                >
                                    <path
                                        clipRule='evenodd'
                                        d='M23.522 21.662c-.389-.344-.443-.925-.181-1.373a8.5 8.5 0 10-3.051 3.051c.447-.261 1.028-.207 1.372.182l3.608 4.073a1.647 1.647 0 102.325-2.326l-4.073-3.607zm-3.28-9.905a6 6 0 11-8.484 8.486 6 6 0 018.485-8.486z'
                                        fillRule='evenodd'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}

export default Info