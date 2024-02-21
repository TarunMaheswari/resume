import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false);
    return (
        <nav className="navbar">
            <a href="#"><img src={logo} alt="Logo" className="logo"/></a>
            
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
                <Link activeClass="active" to="coding" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certificates</Link>
                <Link activeClass="active" to="declare" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Declaration</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg}alt=""className="desktopMenuImg"/><b>Contact Me</b>
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Education</Link>
                <Link activeClass="active" to="coding" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certificates</Link>
                <Link activeClass="active" to="declare" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Declaration</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar;
