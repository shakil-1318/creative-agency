import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header/Header'
import google from '../../../images/google.png'
import loginImage from '../../../images/login.webp'
import useAuth from '../../../hooks/useAuth';
import { Oval } from 'react-loader-spinner';



const Registration = () => {

    const { user, registerUser, isLoading, authError } = useAuth();

    const [loginData, setLoginData] = useState({});
    const naviagte = useNavigate();


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('password not equal');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, naviagte)
    }



    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-8 mt-16 md:mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                    <div>
                        {!isLoading && <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={handleOnSubmit}>
                            <h3 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Registration to our platform</h3>
                            {
                                user.email &&
                                <div className=' bg-green-300 '>
                                    <p className='text-green-600 py-2 text-center text-xl font-semibold'>user created successfully!</p>
                                </div>
                            }
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                                <input onBlur={handleOnBlur} type="name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input onBlur={handleOnBlur} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input onBlur={handleOnBlur} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                                <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Retype password</label>
                                <input onBlur={handleOnBlur} type="password" name="password2" id="password2" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>

                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registration your account</button>

                            <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                Already have an account? <Link to='/login'><a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Please Login</a></Link>
                            </div>
                        </form>}

                        {
                            isLoading &&
                            <div className='flex justify-center align-middle'>
                                <Oval
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            </div>
                        }
                        {
                            authError && <div>
                                {authError}
                            </div>
                        }

                        <button type="submit" class="w-full flex justify-center items-center  hover:ring-4 font-medium border-2 rounded-full md:rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800">
                            <img className=' h-8 inline m-0' src={google} alt="" />
                            <span className='text-xl'> Continue with Google</span></button>
                    </div>
                    <div className="logo-image">
                        <img src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;