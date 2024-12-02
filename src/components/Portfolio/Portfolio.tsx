import './portfolio.scss';

export const Portfolio = () => {
    return (
        <div className="work-section">
            <h2>Our Work</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</h3>
            <div className="section-wrapper reverse-wrapper">
                <img src="/assets/matchbonus.png" alt="matchbonus" />
                <div className="text">
                    <h4>3D Visuals</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
            <div className="section-wrapper">
                <img src="/assets/ringfon.jpg" alt="ringfon" />
                <div className="text">
                    <h4>Web Assets</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>
    );
};