import Draggable from 'react-draggable';
import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
        <Draggable> 
        <div className='popup'>
            <div className='card card-tertiary'>
                <div className='card-header'>
                <div className="header-text">dust</div>
                </div>
                { props.children }
                <button className='pbtn pbtn-primary' onClick={() => props.setTrigger(false)}>OK</button>
            </div>

        </div>
        </Draggable>

    ) : "";
}

export default Popup