import React from 'react'
import './PopupPoem.css'

function PopupPoem(props) {
    return (props.trigger) ? ( 
        <div className='ppopup'>
            <div className='ppcard ppcard-tertiary'>
                <div className='ppcard-header'>
                <div className="ppheader-text">BigHausWarming*:･ﾟ✧</div>
                </div>
                { props.children }
                <button className='ppbtn ppbtn-primary' onClick={() => props.setTrigger(false)}>
                    <div className='ppbtn-text'>close</div>
                </button>
            </div>

        </div>
    ) : "";
}

export default PopupPoem