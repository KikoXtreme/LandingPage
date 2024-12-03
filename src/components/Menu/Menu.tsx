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
                <img src="/assets/chromeye_logo.svg" alt="logo" />
            </div>
            <div className="union" onClick={toggleMenu}>
                <img src={menuOpen ? "/assets/union-x.png" : "/assets/union.png"} alt="union" />
            </div>
            <div className={menuOpen ? "drop-down" : 'buttons'}>
                <button className="link" onClick={() => (window.location.href = "#")}>Home</button>
                <button className="link" onClick={() => (window.location.href = "#services")}>services</button>
                <button className="link" onClick={() => (window.location.href = "#vlog")}>Blog</button>
                <button className="link" onClick={() => (window.location.href = "#about")}>About</button>
                <button className="link last" onClick={() => (window.location.href = "#agency")}>Agency</button>
                <button className="btn" onClick={() => (window.location.href = "#contact")}>Get in touch</button>
            </div>
        </div>
    );
};