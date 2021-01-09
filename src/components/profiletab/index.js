import React, { Fragment, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux'
//icons
import { VscSmiley } from 'react-icons/vsc';
import { RiBuildingLine } from 'react-icons/ri'
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineLink } from 'react-icons/hi';
import { ImTwitter } from 'react-icons/im'
import { IoPeopleOutline } from 'react-icons/io5'
import { IconContext } from "react-icons";
import { AiOutlineStar } from 'react-icons/ai';


const ProfileTab = ({ user, loading }) => {

    const [showProfileEdit, setShowProfileEdit] = useState(false)

    const handleCancleClick = () => {

        setShowProfileEdit(false);

    };

    const handleSaveAction = () => {
        setShowProfileEdit(false);
    }

    if (user !== null) {
        console.log(user)
    }

    return (
        <div className="profileTab-wrapper">
            {loading ? (
                <div>
                    <h4> loading.....</h4>
                </div>
            ) : (
                    <Fragment>
                        <div className="profieImg-wrapper">
                            <div className="profile-image">
                                <img src={user.avatar_url} alt="profileimage" />
                            </div>
                            <div className="name">
                                <span className="user-name">{user.name}</span>
                                <span className="username">{user.login}</span>
                            </div>

                        </div>

                        <div className="status">
                            <VscSmiley /> <span> set status</span>
                        </div>

                        {
                            showProfileEdit ? (
                                <Fragment>
                                    <section className="bio">
                                        <input name="bio" type="text" placeholder="add bio"></input>
                                    </section>

                                    <section className="company">
                                        <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                            <RiBuildingLine />
                                        </IconContext.Provider>
                                        <input type="text" placeholder="company" />
                                    </section>

                                    <section className="location">
                                        <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                            <GrLocation />
                                        </IconContext.Provider>
                                        <input type="text" placeholder="location" value={user.location} readOnly />
                                    </section>

                                    <section className="email">
                                        <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                            <HiOutlineMail />
                                        </IconContext.Provider>
                                        <input type="text" placeholder="email" value="osekelvin22@gmail.com" readOnly />
                                    </section>

                                    <section className="website">
                                        <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                            <HiOutlineLink />
                                        </IconContext.Provider>
                                        <input type="text" placeholder="website" />
                                    </section>

                                    <section className="socials">
                                        <IconContext.Provider value={{ style: { verticalAlign: "middle", color: "darkgray" }, className: "icon" }}>
                                            <ImTwitter />
                                        </IconContext.Provider>
                                        <input type="text" value={user.twitter_username} readOnly />
                                    </section>

                                    <section className="btns">
                                        <button type="submit" onClick={handleSaveAction} className="save-btn">save</button>
                                        <input type="button" value="cancel" readOnly className="cancelBtn" onClick={handleCancleClick} />
                                    </section>
                                </Fragment>
                            ) :
                                (

                                    <div className="edit-profile" onClick={() => setShowProfileEdit(true)}>
                                        Edit profile
                                    </div>
                                )
                        }
                        <div className="email-info">
                            <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
                                <HiOutlineMail />
                            </IconContext.Provider>
                            <span> osekelvin22@gmail.com</span>
                        </div>
                        <div className="followers-info">
                            <span>
                                <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
                                    <IoPeopleOutline />
                                </IconContext.Provider>
                            </span>
                            <span>{user.followers} followers</span>.
                            <span>{user.following} following</span>.
                            <span>
                                <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
                                    <AiOutlineStar />
                                </IconContext.Provider>
                                3
                                </span>
                        </div>

                        <div className="mobile-screen-infos">
                            <section className="email">
                                <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                    <HiOutlineMail />
                                </IconContext.Provider>

                                <span>osekelvin22@gmail.com</span>
                            </section>
                            <section className="location">
                                <IconContext.Provider value={{ style: { verticalAlign: "middle" }, className: "icon" }}>
                                    <GrLocation />
                                </IconContext.Provider>
                                <span>{user.location}</span>
                            </section>
                        </div>






                    </Fragment>


                )}
        </div>
    )
};

const mapStateToProps = ({ user }) => {

    return {
        user: user.user,
        loading: user.loading
    }
}

export default connect(mapStateToProps)(ProfileTab);