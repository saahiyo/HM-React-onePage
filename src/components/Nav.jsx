import React from 'react'
import "../styles/navbar.css";
import { CiHeart, CiMenuFries, CiUser } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { IoBagOutline } from "react-icons/io5";


const Nav = () => {
  return (
    <>
      <div className="topnav">
        <div className="offer">members days: earn $5 for every $25 spent</div>
        <div className="topright">
          <p>shop now</p>
         <svg role="img" aria-hidden="true" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><path d="M8.75 7.25V0h-1.5v7.25H0v1.5h7.25V16h1.5V8.75H16v-1.5H8.75Z"></path></svg>
        </div>
      </div>
      <div className="nav">
        <div className="navRight">
          <img src="/hm-logo.webp" alt="hm-logo" />
          {/* <p className='brandname'>H&M</p> */}
          <CiMenuFries />
        </div>
        <div className="navLeft">
           <ul>
            <IoIosSearch />
            <CiUser />
            <CiHeart />
            <IoBagOutline />
           </ul>
        </div>
      </div>
    </>
  )
}

export default Nav