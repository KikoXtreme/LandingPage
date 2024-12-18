import { useEffect, useState } from 'react';
import './menu.scss';

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992 && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    return (
        <div className="menu-section">
            <div className="logo">
                <img src="/LandingPage/assets/kikologo.png" alt="logo" width={'220px'}/>
            </div>
            <div className="union" onClick={toggleMenu}>
                <img src={menuOpen ? "/LandingPage/assets/icons/union-x.png" : "/LandingPage/assets/icons/union.png"} alt="union" />
            </div>
            <div className={menuOpen ? "drop-down" : 'buttons'}>
                <button className="link" onClick={() => (window.location.href = "#")}>Home</button>
                <button className="link" onClick={() => (window.location.href = "#services")}>Services</button>
                <button className="link" onClick={() => (window.location.href = "#work")}>Work</button>
                <button className="link" onClick={() => (window.location.href = "#contact")}>About</button>
                <button className="link last" onClick={() => (window.location.href = "#company")}>Company</button>
                <button className="btn" onClick={() => (window.location.href = "#contact")}>Get in touch</button>
            </div>
        </div>
    );
};