export const Test = () => {
    return (
        <header>
            <div className="header container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 position-relative px-0">
                        <picture>
                            {/* <source srcSet="./assets/header-mobile.webp" type="image/webp" /> */}
                            <source srcSet="/assets/mobile.jpg" type="image/jpeg" />
                            <img src="/assets/mobile.jpg" width="375" height="484" loading="lazy"
                                className="img-fluid d-block d-xs-block d-sm-none w-100 lp-action mobile-img my-0" alt='mobile' />
                        </picture>
                        {/* <picture>
                            <source srcSet="./assets/header-tablet.webp" type="image/webp" />
                            <source srcSet="/assets/header-tablet.jpg" type="image/jpeg" />
                            <img src="/assets/header-tablet.jpg" width="768" height="507" loading="lazy"
                                className="img-fluid w-100 d-none d-sm-block d-md-block d-xl-none my-0 lp-action my-0" alt='tablet' />
                        </picture> */}
                        <div className="container-content container-fluid">
                            <div className="row h-100">
                                <div className="col-12 px-0">
                                    <div className="content lp-action">
                                        <h1>Visuals Engineered with Precision</h1>
                                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</h2>
                                        <button>Request a call</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}