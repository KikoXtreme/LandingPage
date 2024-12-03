import './logoButton.scss';

export const LogoButton = () => {
    return (
        <div className="logo-section">
            <img src="/assets/chromeye_logo.svg" alt="logo" />
            <button className="btn" onClick={() => (window.location.href = "#contact")}>Request a call</button>
        </div>
    );
};