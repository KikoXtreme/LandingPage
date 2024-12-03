import './hero.scss';

export const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-wrapper">
                <h2>Visuals Engineered <br />with Precision</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</h3>
                <button className="btn" onClick={() => (window.location.href = "#contact")}>Request a call</button>
            </div>
        </div>
    );
};