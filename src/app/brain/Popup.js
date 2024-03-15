import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Popup.css'

function Popup(props) {
    const [buttonPopup, setButtonPopup] = useState(true)
    return ( 
        <>
        {
        buttonPopup &&
        <Draggable>
        <div className='card card-tertiary' style={{
                top: `${Math.floor(Math.random() * (window.innerHeight - 100))}px`,
                left: `${Math.floor(Math.random() * (window.innerWidth - 100))}px`
              }}>
                <div className='card-header'>
                <div className="header-text">here</div>
                </div>
                { props.children }
            <button className='pbtn pbtn-primary' onClick={() => setButtonPopup(false)}>
            <div className='btn-text'>Yes</div>
            </button>
        </div>
        </Draggable>
        }</>

    );
}

export default Popup