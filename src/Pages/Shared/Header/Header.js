import { useEffect, useState } from "react";
import './Header.css'
import useScrollListener from "../../../hooks/useScrollListener";
import logo from '../../../images/logos/logo.png'
import { Link, useRoutes } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


export default function App() {
    const { user, logOut } = useAuth();

    let [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--hidden");

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <>

            <nav className={navClassList.join(" ")}>
                <div className='shadow w-full fixed top-0 left-0'>
                    <div className='md:flex items-center justify-between bg-yellow-300 md:bg-yellow-300 py-4 md:px-10 px-7'>
                        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800'>
                            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                                <img
                                    className="h-12 hover:cursor-pointer"
                                    src={logo}
                                    alt="creative"
                                />
                            </span>

                        </div>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                        </div>

                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-300 md:bg-yellow-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                            <li className='md:ml-8 md:mr-7 text-xl md:my-0 my-7'>

                                <Link to='/home' className='text-gray-800 block text-2xl hover:text-gray-400 duration-500'>
                                    Home
                                </Link>
                            </li>
                            <li className='md:ml-8 md:mr-7 text-xl md:my-0 my-7'>
                                <Link to='/course' className='text-gray-800 block text-2xl hover:text-gray-400 duration-500'>
                                    Course
                                </Link>
                            </li>
                            {
                                user?.email ?
                                    <li onClick={logOut} className='md:ml-8 md:mr-7 text-xl md:my-0 my-7'>
                                        <button className='text-gray-800 rounded px-1 md:bg-red-500 block text-2xl hover:text-gray-400 duration-500'>
                                            Logout
                                        </button>
                                    </li>
                                    :

                                    <li className='md:ml-8 md:mr-7 text-xl md:my-0 my-7'>
                                        <Link to='/login' className='text-white px-1 rounded md:bg-purple-900 block text-2xl hover:text-gray-400 duration-500'>
                                            Login
                                        </Link>
                                    </li>
                            }
                            {
                                user.email && <div>
                                    <img className="h-10 rounded-full" src={user.photoURL} alt="" />
                                </div>
                            }
                        </ul>
                    </div>
                </div>

            </nav>


            {/* <nav className={navClassList.join(" ")}>
                <div className="bg-yellow-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-12 hover:cursor-pointer"
                                        src={logo}
                                        alt="creative"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">

                                        <Link to='/home'>
                                            <p


                                                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Home
                                            </p>
                                        </Link>


                                        <a
                                            href="#services"
                                            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            services
                                        </a>


                                        <Link to='/course' className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Courses
                                        </Link>



                                        {
                                            user?.email ?
                                                <p onClick={logOut}

                                                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    Logout
                                                </p>
                                                :
                                                <Link to='/login'>
                                                    <p

                                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        Login
                                                    </p>

                                                </Link>
                                        }


                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref || ''} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link to='/home'>
                                        <p


                                            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </p>
                                    </Link>


                                    <p
                                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        services
                                    </p>

                                    <Link to='/course' className="text-black block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Courses
                                    </Link>



                                    {
                                        user?.email ?
                                            <p onClick={logOut}

                                                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Logout
                                            </p>
                                            :
                                            <Link to='/login' className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Login
                                            </Link>


                                    }
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </nav> */}



        </>
    );
}
