import './footer.scss';

export const Footer = () => {
    return (
        <div id='contact' className="footer-section">
            <div className="one-column">
                <button onClick={() => (window.location.href = "/")}>Studio</button>
                <button onClick={() => (window.location.href = "#work")}>Our Work</button>
                <button onClick={() => (window.location.href = "#services")}>Services</button>
                <button onClick={() => (window.location.href = "#information")}>Information</button>
                <p>We are a digital design agency founded in 2004 in Sofia. We are all about the never ending journey of discovering, finding the best balance between form and function.</p>
            </div>
            <div className="one-column">
                <button onClick={() => (window.location.href = "#Terms&Conditions")}>Terms & Conditions  </button>
                <button onClick={() => (window.location.href = "#PrivacyPolicy")}>Privacy Policy </button>
                <button onClick={() => (window.location.href = "#ContactUs")}>Contact Us</button>
                <button onClick={() => (window.location.href = "#CookiePreferences")}>Cookie Preferences</button>
            </div>
            <div className="one-column last">
                <button>Follow us:</button>
                <div className='social-networks'>
                    <a href="https://www.facebook.com/chromeye/" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/icons/facebookicon.svg" alt="facebook" />
                    </a>
                    <a href="https://twitter.com/chromeye" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/icons/twittericon.svg" alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/chromeye/" target="_blank" rel="noopener noreferrer">
                        <img src="/LandingPage/assets/icons/linkedinicon.svg" alt="linkedin" />
                    </a>
                </div>
                <button onClick={() => (window.location.href = "#contact")}>Contact</button>
                <p>
                    <span>
                        19, Dondukov blvd., Floor 6, Sofia<br />
                        1000 Bulgaria<br />
                        Phone: 00 359 2 9046599<br />
                        Web: inq@chromeye.com
                    </span>
                </p>
            </div>
        </div>
    );
};