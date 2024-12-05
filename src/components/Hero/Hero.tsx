import './hero.scss';

export const Hero = () => {
    return (
        <div className="hero-section">
            <div className="section-wrapper">
                <img src="/LandingPage/assets/heroimg_670x500px_v1.png" alt="heroimg" />
                <div className="text">
                    <h1>Visuals Engineered <br />with Precision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    <button className="btn" onClick={() => (window.location.href = "#contact")}>Request a call</button>
                </div>
            </div>
        </div>
    );
};