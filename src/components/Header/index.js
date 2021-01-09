import React, { useState } from 'react';
import './style.scss';
import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { BsFillBellFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDownArrow } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi'
import { useSpring, animated } from 'react-spring'


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);



    const handlemenuclick = async () => {
        setShowMenu(prev => !prev);

    };


    const springProps = useSpring({ opacity: showMenu ? 1 : 0 })
    return (
        <header className="Header-wrapper">
            <section className="left-side">



                <div className="logo-wrapper">
                    <IconContext.Provider value={{ className: "github-icon" }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="search or jump to..." />
                </div>
                <div className="lists-links">
                    <ul>
                        <li>Pull request</li>
                        <li>Issues</li>
                        <li> MarketPlace</li>
                        <li>Explore</li>
                    </ul>
                </div>
            </section>
            <section className="profile">

                <IconContext.Provider value={{ className: "notification-icon" }}>
                    <BsFillBellFill />

                </IconContext.Provider>
                <div className="dropdowns">


                    <h4>
                        <IconContext.Provider value={{ className: "plus-icon" }}>
                            <AiOutlinePlus />
                        </IconContext.Provider>
                        <IconContext.Provider value={{
                            className: "downArrow-icon"
                        }}>
                            <BiDownArrow />
                        </IconContext.Provider>
                    </h4>
                    <div className="profile-img">
                        <img src="" alt="profile" />
                        <BiDownArrow />

                    </div>

                </div>


            </section>

            <div className="mobile-screen">
                <div className="mobile-header">

                    <IconContext.Provider value={{ className: "menubar-icon" }}>
                        <GiHamburgerMenu onClick={handlemenuclick} />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "github-icon" }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "notification-icon" }}>
                        <BsFillBellFill />
                    </IconContext.Provider>
                </div>
                {showMenu && (

                    <animated.section style={springProps} className="dropdownmenu">
                        <div className="search">
                            <input type="text" placeholder="search Github" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Dashboard</li>
                                <li>pull request</li>
                                <li>issues</li>
                                <li>market place</li>
                                <li>explore</li>
                                <li> settings</li>
                                <li>
                                    <img src="" alt="profile" />
                                    <p>username</p>
                                </li>
                                <li >
                                    <IconContext.Provider value={{ className: "logout-btn" }}>
                                        <FiLogOut />

                                    </IconContext.Provider>
                                Sign out
                                </li>

                            </ul>

                        </div>
                    </animated.section>

                )}
            </div>

        </header>
    )
}

export default Header;