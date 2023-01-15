import React, { useState } from 'react'
import "./navbar.scss"
import {Search,Notifications, ArrowDropDown} from "@material-ui/icons"

const Navbar = () => {
    const [isScrolled, setIsScrolled]=useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0?false:true);
        return () => (window.onscroll=null);
    }
    // console.log(isScrolled);
  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="pic" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar