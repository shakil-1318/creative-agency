import React, { useEffect, useRef, useState } from 'react';
import Header from '../../Shared/Header/Header'
import login from '../../../images/login.webp'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Oval } from 'react-loader-spinner'



const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user, authError } = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        console.log(field, value)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('password didnot matched');
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <section>
                <div className="container mx-auto px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <h1 class='text-4xl font-semibold text-center py-6 text-green-600'>Register</h1>
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
                                    <input
                                        class='w-full border-2 border-slate-500 focus:border-green-600 mb-3 p-3 rounded outline-0'
                                        type="password"
                                        name="password2"
                                        onChange={handleOnChange}
                                        placeholder='Re-type password' />

                                    <button type='submit' class=' hover:bg-green-700 bg-purple-700 rounded-md text-white w-full px-3 py-2'>submit</button>

                                </form>
                            }
                            {
                                isLoading && <div class='flex justify-center align-middle'>
                                    <Oval

                                        color='grey'
                                        ariaLabel='loading'
                                    />
                                </div>
                            }



                            <p class='text-center mt-3 text-green-900 font-semibold'>Already account?
                                <NavLink to='/login'>
                                    <span class='underline underline-offset-1'> please login</span>
                                </NavLink>
                            </p>
                            {
                                user.email && <div class='text-center'>

                                    <p class='text-green-700 text-xl font-semibold bg-green-300 mt-1 px-1'>user created successfully</p>
                                </div>
                            }

                            {
                                authError && <div class='text-center'>
                                    <p class='text-red-700 font-semibold bg-red-300 mt-1 px-1'>user already successfully</p>
                                </div>
                            }
                        </div>
                        <div>
                            <img class='w-full' src={login} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Register;