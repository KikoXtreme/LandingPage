import './footer.scss';

export const Footer = () => {
    return (
        <div id='contact' className="footer-section">
            <div className="one-column">
                <h3>Studio</h3>
                <h3>Our Work</h3>
                <h3>Services</h3>
                <h3>Information</h3>
                <p>We are a digital design agency founded in 2004 in Sofia. We are all about the never ending journey of discovering, finding the best balance between form and function.</p>
            </div>
            <div className="one-column">
                <h3>Terms & Conditions  </h3>
                <h3>Privacy Policy </h3>
                <h3>Contact Us</h3>
                <h3>Cookie Preferences</h3>
            </div>
            <div className="one-column">
                <h3>Follow us:</h3>
                <div className='social-networks'>
                    <img src="/assets/icons/facebookicon.svg" alt="facebook" />
                    <img src="/assets/icons/twittericon.svg" alt="twitter" />
                    <img src="/assets/icons/linkedinicon.svg" alt="linkedin" />
                </div>
                <h3>Contact</h3>
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