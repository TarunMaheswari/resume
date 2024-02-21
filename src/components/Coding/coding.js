import React from 'react';
import './coding.css';
import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import php from '../../assets/php.png';
const Coding=()=>{
    return(
        <section id='coding'>
            <span className='codingTitle'>SKILLS</span>
            <div className='links'>
                <div className='pair'>
                    <img src={c} alt='c' className='link'/>
                    <b className='lang'>C Language</b>    
                </div>
                <div className='pair'>
                    <img src={cpp} alt='cpp' className='link'/>
                    <b className='lang'>C++ Language</b>    
                </div>
                <div className='pair'>
                    <img src={java} alt='java' className='link'/>
                    <b className='lang'>JAVA Language</b>    
                </div>
                <div className='pair'>
                    <img src={python} alt='python' className='link'/>
                    <b className='lang'>PYTHON Language</b>    
                </div>
            </div>
            <div className='links'>
                <div className='pair'>
                    <img src={html} alt='html' className='link'/>
                    <b className='lang'>HTML</b>    
                </div>
                <div className='pair'>
                    <img src={css} alt='css' className='link'/>
                    <b className='lang'>CSS</b>    
                </div>
                <div className='pair'>
                    <img src={react} alt='react' className='link'/>
                    <b className='lang'>React-JS</b>    
                </div>
                <div className='pair'>
                    <img src={php} alt='php' className='linkspecial'/>
                    <b className='lang'>PHP</b>    
                </div>
            </div>
            <span className='codingTitle'>LANGUAGES</span>
            <div className='links'>
                <b className='lang1'>ENGLISH</b>
                <b className='lang1'>HINDI</b>
                <b className='lang1'>ODIA</b>
            </div>
            <span className='codingTitle'>INTEREST</span>
            <div className='links'>
                <b className='lang1'>Coding</b>
                <b className='lang1'>Problem Solving</b>
                <b className='lang1'>Self-Exploring</b>
                <b className='lang1'>Arts & Crafts</b>
            </div>
        </section>
    )
}
export default Coding;