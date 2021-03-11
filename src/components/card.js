import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
// import Modal from './modal.js';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


const Card = ({ footstep, h2, h3, image, style, extract, description, sdgCollection }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleClick = (event) => {
        const clicked = event.target.id;
        if (clicked !== "readMore"){
            setIsFlipped(!isFlipped);
        }
    }
    
    // const [showModal, setShowModal] = useState(false);
    // const toggler = () => {
    //     setShowModal(prev => !prev)
    // }
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}
        className={`card ${style} front`}
        id={`card${footstep}`}
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "80%",
            position:'static'
        }}
        >
        <span>{footstep}</span>
        <h3>{h3}</h3>
        </div>
        
        
        <div onClick={handleClick}
        className={`card ${style} back`}
        id={`card${footstep}`}
        style={{
            backgroundColor: "var(--yellow)",
            backgroundSize: "cover",
            height: "80%",
        }}
        >
        <span>{footstep}</span>
        <h4>{h3}</h4>
        <p>{documentToReactComponents(extract.json)}</p>
        
        <Popup trigger={<button id="readMore">Read more</button>}>
        {close => (
            <div className="modal">
                <button
                className="close"
                onClick={() => {
                    console.log('modal closed ');
                    close();
                }}
                >x</button>
                <div className="column1">
                <span>{footstep}</span>
                <h4>{h3}</h4>
                </div>
                <div className="column2">
                <h2>{h2}</h2>
                <p>{documentToReactComponents(description.json)}</p>
                </div>
                <div className="sdgs">
                {sdgCollection.map((item) => (
                    <img src={item.url} alt="sdg" width="60px"/>
                ))}
                </div>
                </div>
                )}
                </Popup>
                
                
                {/* <Modal 
                    showModal={showModal}
                    description={description}
                    footstep={footstep}
                    toggler={toggler}
                    h3={h3}
                    sdgCollection={sdgCollection}
                /> */}
                </div>
                </ReactCardFlip>
                
                
                );
            };
            
            export default Card;
            
            