"use client";
import "./Navbar.css";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import SearchBox from "./SearchBox";
import SearchMobile from "./SearchMobile";
import { globalConfig } from "@/app/_customGlobals";


export default function Navbar(){
    const [language, setLanguage] = useState('en');

    const changelang = (value)=>{
        localStorage.setItem("language",value);
        setLanguage(value);
        globalConfig.lang = value
    }
    
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const menuItem = (
        <>
          <li>
            <Link
              href="/"
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
              className={
                pathname === '/'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              Home
            </Link>
          </li>
    
          <li>
            <Link
              href="/about"
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
            className={
                pathname === '/about'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              Our Experts
            </Link>
          </li>
    
          <li>
            <Link
              href="/blogs"
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
            className={
                pathname === '/blogs'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              Blog
            </Link>
          </li>
    
          
    
          {/* <li>
            <NavLink
              to="/roadmap"
              onClick={() => setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isActive
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : isPending
                  ? "pending"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              AI Roadmap
            </NavLink>
          </li> */}
    
    
          
          <li>
            <Link
              href="/courses"
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
            className={
                pathname === '/courses'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              Course
            </Link>
          </li>

          <li>
            <Link
              href="/test"
              state={{test:"test"}}
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
            className={
                pathname === '/test'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              test
            </Link>
          </li>
    
          <li>
            <Link
              href="/workshops"
              prefetch={true}
              shallow={true}
            //   onClick={() => setIsOpen(false)}
            className={
                pathname === '/workshops'
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              Workshop
            </Link>
          </li>
          {/* <li>
            <NavLink
              to="/ai-consultant"
              onClick={() => setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isActive
                  ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
                  : isPending
                  ? "pending"
                  : "px-3 hover:text-[#ED1B24] duration-150"
              }
            >
              AI Consultancy
            </NavLink>
          </li> */}
    
          
        </>
      );

    return(
        <div className="w-full shadow glass fixed top-0 z-[50]">
        {/* {filtered.length !== 0? (
        <> 
        <img src="https://cdn.ostad.app/images/other/close-circle.svg" height="20" width="40" className={`absolute top-0 right-0 p-2 mr-auto cursor-pointer ${isClose}`} onClick={()=>{setIsClose('hidden')}}/>
        <img src={filtered[0].offer_banner} className={`w-full h-[5vh] ${isClose}`}/>
        </>
        ):''} */}
        <div className="relative px-2 py-1 mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between font-bold ">
            <div className="flex items-center ">
            <div>
                <Link href="/" className="flex items-center justify-center gap-2">
                <ExportedImage
                    className="pointer-events-none select-none no-select md:w-32 md:p-2"
                    src={Logo}
                    width="100"
                    height="1"
                    alt="navbar_logo"
                />
                </Link>
            </div>

            <SearchBox />
            </div>

            <ul className="items-center hidden font-[700] xl:flex pl-5 ">
            <div className={"flex items-center"}>{menuItem}</div>
            </ul>
            <div className="flex items-center justify-between gap-5 pl-28 md:pl-0">
            
            <button className="rounded-lg hidden mt-2 lg:mt-0  border-2 border-[#ED1B24] md:flex justify-between items-center  overflow-hidden ">
                <p
                onClick={() => changelang("bn")}
                className={`py-[4px] px-3 hover:bg-gray-300 hover:text-black ${
                    language === "bn"
                    
                    ? "bg-[#ED1B24] text-white"
                    : " text-black"
                }`}
                >
                বাং
                </p>
                <p
                onClick={() => changelang("en")}
                className={`py-[6px] px-2 text-sm hover:bg-gray-200 hover:text-black ${
                    language === "en"
                    ? "bg-[#ED1B24] text-white"
                    : " text-black"
                }`}
                >
                Eng
                </p>
            </button>

            
            {/* {user &&
            !isAdmin &&
            userinfo?.role !== "super admin" &&
            userinfo?.role !== "consultant" ? ( 
                <Link to="/dashboard/notifications" className="relative pl-2">
                <IoMdNotificationsOutline className="text-2xl" />
                
                {newNotifications.length > 0 && (
                    <div className="bg-primary rounded-full p-0.5 px-[6px] text-[10px] text-white absolute -top-1.5 -right-2">
                    {newNotifications.length}
                    </div>
                )}
                </Link>
            ) : (
                !user && (
                <Link
                    onClick={() => setIsOpen(false)}
                    className="glass normal-case border-black border-[1px] rounded-md h-[42px] hover:shadow-lg hover:bg-black hover:text-white py-2 md:px-4 hidden md:flex items-center justify-center"
                    to="/login"
                    state={{ from: location }}
                >
                    {language === "bn" ? <p className="text-md">লগিন | সাইনআপ</p>  : <p className="text-sm">Login | SignUp</p>}
                </Link>
                )
            )} */}

            <Link
                // onClick={() => setIsOpen(false)}
                className="glass1 normal-case border-gray-400 border-[1px] rounded-md h-[42px] hover:shadow-lg hover:bg-black hover:text-white py-2 md:px-4 hidden md:flex items-center justify-center"
                href="/login"
                // state={{ from: location }}
            >
                {language === "bn" ? <p className="text-md">লগিন | সাইনআপ</p>  : <p className="text-sm">Login | SignUp</p>}
            </Link>

            {/* {user ? (
                <div className="">
                <div
                    className=" dropdown dropdown-hover"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <label
                    tabIndex={0}
                    className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer "
                    >
                    {" "}
                    <div className="flex items-center hover:text-primary ">
                        <img
                        className="object-cover w-12 h-12 rounded-full md:w-14 md:h-14 "
                        src={
                            userinfo?.photoURL ||
                            "https://i.ibb.co/sg6hmZ7/user.png"
                        }
                        alt="user"
                        />

                        <span className="text-xl ">
                        <RiArrowDownSLine
                            className={`${
                            isHovered ? "transform rotate-180 " : ""
                            } transition-transform duration-300 inline-block `}
                        ></RiArrowDownSLine>
                        </span>
                    </div>
                    </label>
                    <ul
                    tabIndex={0}
                    className="absolute right-0 z-20 w-32 mt-2 text-left bg-white shadow-md dropdown-menu rounded-box"
                    >
                    <div className="">
                    {user ? (
                        isAdmin || userinfo?.role === "super admin" ? (
                        <li className="flex flex-col p-1 space-y-2 ">
                            <Link
                            to="/dashboard/my-profile"
                            className="navOptions"
                            >
                            Dashboard
                            </Link>
                            <Link
                            to="/dashboard/add-blog"
                            className="ml-0 navOptions"
                            >
                            Add Blog
                            </Link>

                            <Link
                            to="/dashboard/manage-users"
                            className=" navOptions"
                            >
                            User Control
                            </Link>
                            <Link
                            to="/dashboard/control-enrollments"
                            className=" navOptions"
                            >
                            Enrollments
                            </Link>

                            <Link className="navOptions">
                            Logout
                            </Link>
                        </li>
                        ) : userinfo?.role === "consultant" ? (
                        <div className="flex flex-col items-center justify-center p-1 mt-10 space-y-4 h-fit ">
                            <Link
                            to="/dashboard/consultant-profile"
                            className="navOptions"
                            >
                            My Profile
                            </Link>
                            <li className="navOptions " onClick={()=>handleLogOut()}>
                            Logout
                            </li>
                        </div>
                        ) : (
                        <div className="flex flex-col items-center justify-center p-1 space-y-5 ">
                            <Link
                            to="/dashboard/my-profile"
                            className="navOptions"
                            >
                            My Profile
                            </Link>
                            <Link
                            to="/dashboard/my-courses"
                            className="navOptions"
                            >
                            My Courses
                            </Link>
                            <Link
                            to="/dashboard/my-appointments"
                            className="navOptions"
                            >
                            My workshops
                            </Link>

                            <li className="navOptions" onClick={()=>handleLogOut()}>
                            Logout
                            </li>
                        </div>
                        )
                    ) : (
                        ""
                    )}
                    </div>
                    
                    </ul>
                </div>
                </div>
            ) : (
                ""
            )} */}
            </div>

            <div className="xl:hidden">
            <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
            >
                <svg
                onClick={() => setIsOpen(true)}
                className="w-5 text-gray-600"
                viewBox="0 0 24 24"
                >
                <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
                </svg>
            </button>
            {isMenuOpen && isOpen && (
                <div className="absolute top-0 left-0 z-50 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                    <div>
                        <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2"
                        >
                        <ExportedImage className="bg-white" src={Logo} alt="" width="80" height="1"/>
                        </Link>
                    </div>
                    <div className="absolute my-2"></div>
                    <div>
                        <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                        >
                        <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                        >
                            <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                        </svg>
                        </button>
                    </div>
                    </div>
                    <SearchMobile
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    />
                    <nav>
                    <ul className="space-y-4">
                        {menuItem}

                        <div className="flex items-center justify-evenly">
                            {/* {user ? (
                                ""
                            ) : (
                                <div className="">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white normal-case border-black border-[1px] rounded-lg h-[36px]  hover:shadow-lg hover:bg-black hover:text-white py-2 px-4  items-center justify-center "
                                    to="/login"
                                    state={{ from: location }}
                                >
                                    {language === "bn" ? <span className="text-sm">লগ ইন/সাইনআপ</span> :<span className="text-sm">Login/SignUp</span>}
                                </Link>
                                </div>
                            )} */}

                            <div>
                                <li>
                                <button className="rounded-lg h-[36px] border-2 border-[#ED1B24] flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                                    <p
                                    onClick={() => setLanguage("bn")}
                                    className={`px-3 py-[8px]  hover:bg-gray-300 hover:text-black ${
                                        language == "bn"
                                        ? "bg-[#ED1B24] text-white"
                                        : "bg-white text-black"
                                    }`}
                                    >
                                    বাংলা
                                    </p>
                                    <p
                                    onClick={() => setLanguage("en")}
                                    className={`px-3 py-[8px] hover:bg-gray-300 hover:text-black  ${
                                        language == "en"
                                        ? "bg-[#ED1B24] text-white"
                                        : "bg-white text-black"
                                    }`}
                                    >
                                    Eng
                                    </p>
                                </button>
                                </li>
                            </div>
                        </div>
                    </ul>
                    </nav>
                </div>
                </div>
            )}
            </div>
        </div>
        </div>
        </div>
    )

}
