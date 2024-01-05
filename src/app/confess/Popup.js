import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
        <div className='popup'>
            <div className='card card-tertiary'>
                <div className='card-header'>
                <div className="header-text">coming soon</div>
                </div>
                { props.children }

            </div>

        </div>
    ) : "";
}

export default Popup