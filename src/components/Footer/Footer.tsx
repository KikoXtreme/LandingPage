import './footer.scss';

export const Footer = () => {
    return (
        <div id='contact' className="footer-section">
            <div className="one-column">
                <button onClick={() => (window.location.href = "#")}>Home</button>
                <button onClick={() => (window.location.href = "#services")}>Services</button>
                <button onClick={() => (window.location.href = "#work")}>Our Work</button>
                <button onClick={() => (window.location.href = "#company")}>Company Services</button>
                <p>Test Landing Page /LP/ created for creativity and fun, built using React and SCSS. The page is hosted on GitHub Pages.</p>
            </div>
            <div className="one-column">
                <button onClick={() => (window.location.href = "#Terms&Conditions")}>Terms & Conditions  </button>
                <button onClick={() => (window.location.href = "#PrivacyPolicy")}>Privacy Policy </button>
                <button onClick={() => (window.location.href = "#ContactUs")}>Contact Us</button>
                <button onClick={() => (window.location.href = "#CookiePreferences")}>Cookie Preferences</button>
            </div>
            <div className="one-column last">
                <button className='follow-us'>Follow us:</button>
                <div className='social-networks'>
                    <a href="https://www.facebook.com/kiril.valkov.1/" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/social/facebook.svg" alt="facebook" />
                    </a>
                    <a href="https://github.com/KikoXtreme" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/social/github.svg" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/kiril-valkov-26a75a37/" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/social/linkedin.svg" alt="linkedin" />
                    </a>
                </div>
                <button onClick={() => (window.location.href = "#contact")}>Contact</button>
                <p>
                    <span>
                        281A Druzhba<br />
                        Sofia, Bulgaria<br />
                        Phone: +359 878801590<br />
                        Email: valkov.kiko@gmail.com
                    </span>
                </p>
            </div>
        </div>
    );
};