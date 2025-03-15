import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import '../../../App.css'
import { AuthContext } from '../../../Providers/AuthProvider';
import '../../../App.css'
import teacher_logo from "../../../assets/maths.png"






const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false)








  // Handle Theme Toggle
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply stored theme on page load
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);




  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const links = <>

    <li className='font-bold text-lg text-black md:text-white'><NavLink to="/">Home</NavLink></li>
    <li className='font-bold text-lg text-black md:text-white'><NavLink to="/find-tutors">Find Tutors</NavLink></li>
    <li className='font-bold text-lg text-black md:text-white'><NavLink to="/addTutorials">Add Tutorials</NavLink></li>
    <li className='font-bold text-lg text-black md:text-white'><NavLink to="/MyTutorials">My Tutorials</NavLink></li>
    <li className='font-bold text-lg text-black md:text-white'><NavLink to="/MyBookedTutors">My Booked Tutors</NavLink></li>

  </>


  return (
    <div className="navbar sticky top-0 left-0 w-ful z-10 bg-[#bcbebc] bg-opacity-50 backdrop-blur-lg shadow-lg px-5 py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex items-center'>
          <a className="  text-sm px-1 md:px-5 md:text-2xl text-white font-bold">Tutor<span className='text-red-500'>Hive</span> </a>
          <img className='w-10 hidden md:block' src={teacher_logo} alt="" />
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">

        {/* Theme Toggle Button */}


        <label className="swap swap-rotate">
          {/* Hidden checkbox to track state */}
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-off h-5 w-5 md:h-6 md:w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-5 w-5 md:h-6 md:w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* ---------------------- */}

        <div className="login flex gap-2 items-center">
         


          <div className="relative flex justify-center items-center gap-3 ">
            {user && user?.email ? (
              <>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                  <div >
                    {user?.photoURL ? (
                      <div className="tooltip tooltip-up" data-tip={user?.displayName}>

                        <img
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
                          src={user.photoURL}
                          alt="User Profile"
                          referrerPolicy="no-referrer"
                        />

                        </div>
                        ) : (

                        <span className="text-2xl md:text-4xl">
                          <RxAvatar />
                        </span>

                  )}
                      </div>

                {/* Modal Dropdown */}
                    {isOpen && (
                      <div
                        className="absolute rounded-lg shadow-lg w-[40vw] md:w-[12vw] bg-white right-4 top-14 text-sm p-3 border border-gray-200 z-50"
                      >
                        <p className="cursor-not-allowed text-gray-700 font-bold text-center border-b pb-2">{user.displayName}</p>

                      </div>

                    )}




                  </div>




                  <div className="">
                    <Link to="/">
                      <p
                        onClick={handleLogOut}
                      className="btn text-[8px] p-1 py-0  md:btn-md  text-[#EF4444] bg-transparent font-bold cursor-pointer md:text-base"
                      >
                        Log Out
                      </p>
                    </Link>
                  </div>

                </>


                ) : (

                <span className="text-2xl md:text-4xl">
                  <RxAvatar />
                </span>


            )}
              </div>


            {user && user?.email ?

              (

                <></>
              ) :

              (
                <Link to="/login" className="btn btn-neutral rounded-none text-white">
                  Login
                </Link>
              )}








          </div>

        </div>
      </div>
      );
};


      export default Navbar;