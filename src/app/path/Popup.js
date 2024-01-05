import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
        <div className='popup'>
            <div className='card card-tertiary'>
                { props.children }
                <button className='cbtn cbtn-primary' onClick={() => props.setTrigger(false)}>X</button>
            </div>

        </div>
    ) : "";
}

export default Popup