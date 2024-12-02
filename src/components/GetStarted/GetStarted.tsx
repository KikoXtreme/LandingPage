import './getStarted.scss';

export const GetStarted = () => {
    return (
        <div className="getstarted-section">
            <div className="box-wrapper">
                <h2>Ready to Get started</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed scelerisque arcu scelerisque ultricies habitant ac semper lorem.</h3>
                <button className="btn" onClick={() => (window.location.href = "#contact")}>Request a call</button>
            </div>
        </div>
    )
}