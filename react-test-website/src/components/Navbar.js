import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false); // Click and state handler for click variable

    const handleClick = () => setClick(!click); // Click handler to reverse state of click variable

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className='fab fa-typo3'/> {/* Icon from FontAwesome for logo next to website name*/}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        {/* Icon from FontAwesome for hamburger settings menu, state represents which icon to display (opened vs closed)*/}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
