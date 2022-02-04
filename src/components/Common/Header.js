import React, {useState}from 'react';
import { NavLink } from "react-router-dom";
import Logo from "./Logo"
import "./Header.css"
import nav_icon from "./web_icon.png";

function Header(){
    const ActiveStyle = {color: "golden"}
    const [State, setState] = useState(true);
    function toggle() {
        setState(!State);;
      }

    return(
     <div className="navholder fixed-top" onClick={toggle}>
         <div >
                <NavLink className="logo" to = '/'>
                    <Logo>Home</Logo>
                </NavLink>
                <nav className="navbar">
                    <NavLink className =" Navbuttons" exact activeStyle={ActiveStyle} to = '/'>Home</NavLink> 
                    <NavLink className = "Navbuttons" to = '/About'>About</NavLink> 
                    <NavLink className = "Navbuttons" to = '/Journey'>Journey</NavLink> 
                    <NavLink className = "Navbuttons" to = '/Activities'>Activities</NavLink> 
                    <NavLink className = "Navbuttons" to = '/News'>News</NavLink> 
                    <NavLink className = "Navbuttons" to = '/Finance'>Finance</NavLink> 
                    <NavLink className = "Navbuttons" to = '/Committee'>Committee</NavLink> 
                    <NavLink className = "Navbuttons" to = '/Gallery'>Gallery</NavLink> 
                </nav>
            </div>
        {
            State ?     
            <img src={nav_icon} className="icon"alt=""></img>:
            <div>
                <div className="fullscreen"></div>
                <nav className="dropdown">               
                    <ul className="unlist">
                        <li><NavLink className =" Navbuttons active" activeStyle={ActiveStyle} to = '/'>Home</NavLink> </li>
                        <li><NavLink className = "Navbuttons" to = '/About'>About</NavLink></li> 
                        <li><NavLink className = "Navbuttons" to = '/Journey'>Journey</NavLink> </li>
                        <li><NavLink className = "Navbuttons" to = '/Activities'>Activities</NavLink></li> 
                        <li><NavLink className = "Navbuttons" to = '/News'>News</NavLink> </li>
                        <li><NavLink className = "Navbuttons" to = '/Finance'>Finance</NavLink> </li> 
                        <li><NavLink className = "Navbuttons" to = '/Committee'>Committee</NavLink> </li> 
                        <li><NavLink className = "Navbuttons" to = '/Gallery'>Gallery</NavLink> </li>
                    </ul>
                </nav>
            </div>
        }    
    </div>
    )
}

export default Header;