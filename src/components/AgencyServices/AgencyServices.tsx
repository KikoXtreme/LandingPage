import { useState } from 'react';
import { items } from './utils';
import './agencyServices.scss';

export const AgencyServices = () => {
    const [openItem, setOpenItem] = useState<number | false>(false);

    const toggleOpenSection = (id: number) => {
        setOpenItem((prevItem) => (prevItem === id ? false : id));
    };

    return (
        <div className="agency-section">
            <h2>Agency Services</h2>
            <div className="section-wrapper">
                <img
                    src={
                        openItem
                            ? items.find((item) => item.id === openItem)?.image
                            : '/LandingPage/assets/agencyservices/digiadds.png'
                    }
                    alt="high-tech"
                    className="section-image"
                />
                <div>
                    {items.map((item) => (
                        <div className={openItem === item.id ? "text open-text" : "text"} key={item.id}>
                            <div className="text-line">
                                <h3>{item.title}</h3>
                                <img
                                    className="arrows"
                                    src={openItem === item.id ? "/LandingPage/assets/icons/arrowup.svg" : "/LandingPage/assets/icons/arrowdown.svg"}
                                    width="40"
                                    height="24"
                                    alt="arrow"
                                    onClick={() => toggleOpenSection(item.id)}
                                />
                            </div>
                            {openItem === item.id && <p>{item.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};