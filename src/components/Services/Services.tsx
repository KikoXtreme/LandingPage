import './services.scss';

export const Services = () => {
    return (
        <div className="services-section">
            <h2>Our Services</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</h3>
            <div className="boxes-wrapper">
                <div className="box">
                    <img src="/LandingPage/assets/icons/checkhighlights.svg" width="59" height="59" alt="check" />
                    <h4>Dynamic <br />Digital Ads</h4>
                    <img src="/LandingPage/assets/icons/minus.svg" width="25" height="25" alt="minus" />
                    <p>We design and develop dynamic digital ads with live feeds.</p>
                </div>
                <div className="box">
                    <img src="/LandingPage/assets/icons/checkhighlights.svg" width="59" height="59" alt="check" />
                    <h4>3D Visuals</h4><br />
                    <img src="/LandingPage/assets/icons/minus.svg" width="25" height="25" alt="minus" />
                    <p>We design and develop dynamic digital ads with live feeds.</p>
                </div>
                <div className="box">
                    <img src="/LandingPage/assets/icons/checkhighlights.svg" width="59" height="59" alt="check" />
                    <h4>Web <br />Assets</h4>
                    <img src="/LandingPage/assets/icons/plus.svg" width="25" height="25" alt="plus" />
                    <br className='br' /><br className='br' /><br className='br' /><br className='br' />
                </div>
                <div className="box">
                    <img src="/LandingPage/assets/icons/checkhighlights.svg" width="59" height="59" alt="check" />
                    <h4>Corporate <br />Identity</h4>
                    <img src="/LandingPage/assets/icons/plus.svg" width="25" height="25" alt="plus" />
                    <br className='br' /><br className='br' /><br className='br' /><br className='br' />
                </div>
            </div>
            <button className="btn" onClick={() => (window.location.href = "#contact")}>Get in touch</button>
        </div>
    );
};