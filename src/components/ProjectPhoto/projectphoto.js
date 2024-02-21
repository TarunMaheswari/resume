import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide.css';
import img1 from '../../assets/portfolio-1.png';
import img2 from '../../assets/portfolio-2.png';
import img3 from '../../assets/portfolio-3.png';
import img4 from '../../assets/portfolio-4.png';
import img5 from '../../assets/portfolio-5.png';
import img6 from '../../assets/portfolio-6.png';
const images =[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];
const ProjectPhoto=()=>{
    return(

        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span><b>LOG-IN PAGE</b></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span><b>BACK-END(ADMIN)</b></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span><b>TEACHER-PAGE</b></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span><b>STUDENT-PAGE</b></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    <span><b>CLASS-PAGE(STUDENT)</b></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                    <span><b>CLASS-PAGE(TEACHER)</b></span>
                </div>
            </div>
        </Slide>
    )
}
export default ProjectPhoto;