import React from 'react';
import Header from '../../Shared/Header/Header'
import loginImage from '../../../images/login.webp'
import google from '../../../images/google.png'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleOnSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={handleOnSubmit}>
                            <h3 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <button type="submit" class="w-full flex justify-center items-center  hover:ring-4 font-medium border-2 rounded-full md:rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800">
                                <img className=' h-8 inline m-0' src={google} alt="" />
                                <span className='text-xl'> Continue with Google</span></button>
                            <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                                Not registered? <Link to='/registration'><a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a></Link>
                            </div>
                        </form>
                    </div>
                    <div className="logo-image">
                        <img src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;