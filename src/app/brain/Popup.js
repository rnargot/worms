import React, { useState , useEffect} from 'react';
import Draggable from 'react-draggable';
import './Popup.css'

function Popup(props) {
    const [buttonPopup, setButtonPopup] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return ( 
        <>
        {
        buttonPopup &&
        <Draggable>
        <div className='card card-tertiary' style={{
                top: `${Math.floor(Math.random() * (windowHeight - 100))}px`,
                left: `${Math.floor(Math.random() * (windowWidth - 100))}px`
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
