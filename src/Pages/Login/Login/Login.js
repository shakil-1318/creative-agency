import React, { useState } from 'react';
import Header from '../../Shared/Header/Header'
import login from '../../../images/login.webp'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Oval } from 'react-loader-spinner';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { loginUser, isLoading, user, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
    }

    return (
        <div>
            <Header></Header>
            <section>
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <h1 class='text-4xl font-semibold text-center py-6 text-green-600'>Login</h1>
                            {!isLoading &&
                                <form onSubmit={handleOnSubmit}>
                                    <input
                                        class='w-full border-2 border-slate-500 focus:border-green-600 mb-3 p-3 rounded outline-0'
                                        type="email"
                                        name='email'
                                        onChange={handleOnChange}
                                        placeholder='Your Email'
                                    />
                                    <input
                                        class='w-full border-2 border-slate-500 focus:border-green-600 mb-3 p-3 rounded outline-0'
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        placeholder='password' />

                                    <button type='submit' class=' hover:bg-green-700 bg-purple-700 rounded-md text-white w-full px-3 py-2'>submit</button>

                                </form>}
                            {
                                isLoading && <div class='flex justify-center align-middle'>
                                    <Oval
                                        color='grey'
                                        ariaLabel='loading'
                                    />
                                </div>
                            }
                            {
                                user.email && <div class='text-center'>

                                    <p class='text-green-700 text-xl font-semibold bg-green-300 mt-1 px-1'>successfully login</p>
                                </div>
                            }

                            {
                                authError && <div class='text-center'>
                                    <p class='text-red-700 font-semibold bg-green-300 mt-1 px-1'>sorry you have no account! please registration</p>
                                </div>
                            }
                            <p class='text-center mt-3 text-green-900 font-semibold'>New use?
                                <NavLink to='/register'>
                                    <span class='underline underline-offset-1'> please Registration</span>
                                </NavLink>

                            </p>
                        </div>
                        <div>
                            <img class='w-full' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Login;