import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { CloseOutlined,  MenuOutlined } from '@ant-design/icons';
import "./topBar.css";
 
 

 

 
const TopBar = () => {
    const [toggleState, setToggleState] = useState('open')
    const [showState, setShowState] = useState('close')
    const [dropState, setDropState] = useState('nav-list')
    const [navState, setNavState] = useState('nav')

    const handleToggle = () => {
        if(toggleState === 'open' && showState === 'close'){
            setToggleState('close')
            setShowState('open')
            setDropState('drop')
            setNavState('black')
            console.log(toggleState)
        }else {
            setToggleState('open')
            setShowState('close')
            setDropState('nav-list')
            setNavState('nav')
        }
    };
     
   
    return( 
    <div>
      <header> 
        <div className="container">
            <nav className={navState}>
                <div className="menu-toggle">
                    <i onClick={handleToggle} className={toggleState}> 
                    <MenuOutlined /></i>
                    <i onClick={handleToggle} className={showState}><CloseOutlined /></i>
                </div>
                 <Link className="logo" to="/"><span className="trace">TRACE</span>NEWS</Link>
                <ul className={dropState}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sports" className="nav-link">Sport</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news" className="nav-link">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/arts" className="nav-link">Entertaiment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sciences" className="nav-link">Science</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
</div>
)

}

export default TopBar;