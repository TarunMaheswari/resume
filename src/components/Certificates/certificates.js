import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './certificates.css';
import a from '../../assets/1stop.png';
import b from '../../assets/aakankash.png';
import c from '../../assets/google.png';
import d from '../../assets/tcsion.png';
import e from '../../assets/pregrad.png';
const images =[
    a,b,c,d,e
];
const Certificates=()=>{
    return(

        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
        </Slide>
    )
}
export default Certificates;