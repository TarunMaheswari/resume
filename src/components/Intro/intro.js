import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro=()=>{
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Tarun Maheswari</span><br/>B-Tech Graduate in Computer Science <br/>and Engineering (2019- 2023).</span>
                <p className="introPara">Having great interest in website development. Good problem solving skills.<br/> Willing to improve my skills with new ideas and implement it in best places.</p>
                <Link><button className="btn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}><img src={btnImg} alt="Hire Me" className="btnImg"/><b>Hire Me</b></button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro;