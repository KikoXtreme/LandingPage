import { useState } from 'react';
import { items } from './utils';
import './companyServices.scss';

export const CompanyServices = () => {
    const [openItem, setOpenItem] = useState<number | false>(false);

    const toggleOpenSection = (id: number) => {
        setOpenItem((prevItem) => (prevItem === id ? false : id));
    };

    return (
        <div id='company' className="company-section">
            <h2>Company Services</h2>
            <div className="section-wrapper">
                <img
                    src={
                        openItem
                            ? items.find((item) => item.id === openItem)?.image
                            : '/LandingPage/assets/companyservices/digiadds.png'
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