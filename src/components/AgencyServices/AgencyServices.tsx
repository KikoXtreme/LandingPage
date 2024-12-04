import { useState } from 'react';
import './agencyServices.scss';

export const AgencyServices = () => {
    const [openArrow, setOpenArrow] = useState(false);

    const toggleOpenArrow = () => {
        setOpenArrow((prevState) => !prevState);
        // console.log('openArrow', openArrow);
    }

    return (
        <div className="agency-section">
            <h2>Agency  Services</h2>
            <div className="section-wrapper">
                <img src="/assets/agencyservices-images/digiadds.png" alt="digiadds" />
                <div>
                    <div className="text">
                        <div className='text-line'>
                            <h3>Dynamic Digital Ads</h3>
                            <img
                                className='arrows'
                                src={openArrow ? "/assets/icons/arrowup.svg" : "/assets/icons/arrowdown.svg"}
                                width="40"
                                height="20"
                                alt="arrowdown"
                                onClick={toggleOpenArrow}
                            />
                        </div>
                        <p>Dynamic Digital Ads lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    </div>
                    <div className="text">
                        <div className='text-line'>
                            <h3>3D Visuals</h3>
                            <img
                                className='arrows'
                                src={openArrow ? "/assets/icons/arrowup.svg" : "/assets/icons/arrowdown.svg"}
                                width="40"
                                height="20"
                                alt="arrowdown"
                                onClick={toggleOpenArrow}
                            />
                        </div>
                        <p>3D Visuals lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    </div>
                    <div className="text">
                        <div className='text-line'>
                            <h3>Web Assets</h3>
                            <img
                                className='arrows'
                                src={openArrow ? "/assets/icons/arrowup.svg" : "/assets/icons/arrowdown.svg"}
                                width="40"
                                height="20"
                                alt="arrowdown"
                                onClick={toggleOpenArrow}
                            />
                        </div>
                        <p>Web Assets lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    </div>
                    <div className="text">
                        <div className='text-line'>
                            <h3>Corporate Identity</h3>
                            <img
                                className='arrows'
                                src={openArrow ? "/assets/icons/arrowup.svg" : "/assets/icons/arrowdown.svg"}
                                width="40"
                                height="20"
                                alt="arrowdown"
                                onClick={toggleOpenArrow}
                            />
                        </div>
                        <p>Corporate Identity lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};