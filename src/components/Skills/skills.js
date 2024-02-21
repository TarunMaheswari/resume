import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills=()=>{
    return(
        <section id='skills'>
            <span className='skillTitle'>Education</span>
            <div className='skillBar'>
            <div className='skillBars'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>B-Tech Computer Science and Engineering (2019-23)</h2>
                    <p>Gandhi Institute for Technological Advancement (GITA), Bhubaneswar.</p>
                    <p>8.64 CGPA</p>
                </div>
            </div>
            <div className='skillBars'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Senior School Certiﬁcation (CBSE Board) (2019)</h2>
                    <p>DAV Public School, Brajrajnagar, Jharsuguda.</p>
                    <p>77.80 %</p>
                </div>
            </div>
            <div className='skillBars'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Secondary School Cum Certiﬁcate (CBSE Board) (2017)</h2>
                    <p>Prabhuji English Medium School, Brundaban, Sambalpur.</p>
                    <p>9.20 CGPA</p>
                </div>
            </div>
            </div>
            
        </section>
    )
}
export default Skills;