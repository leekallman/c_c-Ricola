import React, { useState } from 'react';
import './landing.css';
import HeroButton from './heroButton.js';
// import PlayButton from './playbutton.js';
import Ground from '../assets/ground.png';
import RightCloud from '../assets/cloud3.png';
import LeftCloudBig from '../assets/cloud2.png';
import LeftCloudSmall from '../assets/cloud1.png';
import Mountain from '../assets/mountain.png';
import Factory from '../assets/factory.png';
import Farm from '../assets/farm.png';
import Village from '../assets/village.png';
import Toon from '../assets/Rasmus2.png';
import ReactPlayer from 'react-player';

function Hero({buttonData, hide, setHide, displayCardsSection}) {

    let [opacity, setOpacity] = useState("0%")
    let [display, setDisplay] = useState( "none" )
    let [playing, setPlaying] = useState( false )

    const toggler = () => {
        setOpacity(prev => !prev)
        setDisplay(prev => !prev)
        setPlaying(prev => !prev)
    }

    return (
        <div className ="hero-bg">
            <div className="wrapper">
                {buttonData.map((item) => (
                     <HeroButton 
                     key={item.number}
                     category={item.name}
                    // className={hover ? "Nature:hover:before" : null}
                    />
                ))}
                
                <img src={Ground} alt="Ricola world ground" className='ground'/>
                <img src={Toon} alt="A little cartoon Rasmus to help guide your journey though Ricola World" className='rasmus' onClick={toggler} />
                <img src={Village} alt="A rending of a small town" className='village'/>
                <img src={Farm} alt="A rendering of a farm" className='farm'/>
                <img src={Factory} alt="A rendering of the Ricola factory" className='factory'/>
                <img src={Mountain} alt="Ricola world Mountain, its so impressive" className='Mountain'
                    onClick={displayCardsSection}/>
                <img src={RightCloud} alt="A cloud in the sky" className="RightCloud"/>
                <img src={LeftCloudBig} alt="A cloud in the sky" className="LeftCloudBig"/>
                <img src={LeftCloudSmall} alt="A cloud in the sky" className="LeftCloudSmall"/>
                
                {/* <PlayButton toggler={toggler} /> */}
                <div className="accentText">
                    <p className="accentHeader">EXPLORE THE <br></br>RICOLA WORLD</p>
                    <p className="accentUnder">LEARN MORE ABOUT <br></br>OUR SUSTAINABLE FOOTSTEPS...</p>
                    <div className="horizontalRule"></div>
                </div>
                <div className="videoWrapper" onClick={toggler} style={{
                        position:"absolute",
                        height:"100%",
                        width:"100%",
                        backgroundColor:"rgba(0,0,0,0.5)",
                        opacity:`${opacity ? "0%" : "100%" }`,
                        display:`${display ? "none" : "block" }`,
                    }}>
                    <ReactPlayer 
                    
                    url="https://youtu.be/HfyFRSD5YL0"
                    playing={playing}
                    style={{
                        margin:"10vh auto",
                        border:"2px solid #005245"
                    }}
                    
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Hero;
