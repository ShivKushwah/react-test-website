import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button} from './Button'

function Navbar() {
    const [click, setClick] = useState(false); // Click and state handler for click variable
    const [button, setButton] = useState(true); // Initially, button is set to true which means we can view the button

    const handleClick = () => setClick(!click); // Click handler to reverse state of click variable
    const closeMenu = () => setClick(false); // Handler to close menu (set click to false)

    const showButton = () => {
        if(window.innerWidth <= 960) { // Hide button if mobile view
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []); // Call show button once at the start;

    window.addEventListener('resize', showButton); // call showButton everytime window resize property is modified

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        TRVL <i className='fab fa-typo3'/> {/* Icon from FontAwesome for logo next to website name*/}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        {/* Icon from FontAwesome for hamburger settings menu, state represents which icon to display (opened vs closed)*/}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} {/* Show Button if button is true */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
