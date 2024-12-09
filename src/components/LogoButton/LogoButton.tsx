import './logoButton.scss';

export const LogoButton = () => {
    return (
        <div className="logo-section">
            <img src="/LandingPage/assets/kikologo.png" alt="logo" width={'220px'}/>
            <button className="btn" onClick={() => (window.location.href = "#contact")}>Request a call</button>
        </div>
    );
};