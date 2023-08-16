
function Header(props) {
    return (
        <>
            <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed jss422 mui-fixed css-17kx8pm">

                <div className="top-bar py-1">
                    <h3 className="top-bar-text text-center">
                        Taus is currently closed and will open shortly at 01:00 pm for new
                        orders.
                    </h3>
                </div>

                <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular jss424 css-i6s8oy">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-2 css-4rx0n7">
                        <a className="jss423" href="/">
                            <div
                                className="MuiCardMedia-root undefined jss430 css-pqdqbj"
                                title="Taus"
                            >
                                <img
                                    src="https://chikoo.imgix.net/master-prod-private/bc73a9be-c9d9-4253-bf53-dd46768e1119/profile/1658899623144/1658899623145.png?ixlib=js-3.8.0&dpi=96&s=3df68ba406d3a541c4abfd4d9a6b7113"
                                    alt="logo"
                                    className="jss438 jss431"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-md-6 css-gzrmwz">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 jss440 css-zmnxdm">
                            <div className="MuiGrid-root jss442 css-rfnosa">
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall jss444 css-1k33q06"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="SearchIcon"
                                >
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                            </div>
                            <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth jss441 css-h33faw">
                                <input
                                    placeholder="Search menu items"
                                    type="text"
                                    aria-label="search products"
                                    className="MuiInputBase-input css-mnn31"
                                    defaultValue=""
                                />
                            </div>
                            <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall jss443 css-8rwi0k"
                                tabIndex={0}
                                type="button"
                            >
                                <img
                                    src="https://order.taus.pk/static/media/arrow-left.28c7f59e5690d0e7862cdd3d2e625133.svg"
                                    alt="arrow"
                                />
                                <span className="MuiTouchRipple-root css-w0pj6f" />
                            </button>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 css-txgh13">
                        <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium jss446 css-1p3et7e"
                            tabIndex={0}
                            type="button"
                            data-id="top-bar-cart-btn"
                        >
                            <div className="MuiGrid-root MuiGrid-container css-v3z1wi">
                                <div className="MuiGrid-root MuiGrid-item jss445 css-1wxaqej">
                                    <img
                                        className="jss448"
                                        src="https://order.taus.pk/static/media/cart.380c09a31a9df5320499819baae9cc12.svg"
                                        alt="Cart"
                                    />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                                    <p className="MuiTypography-root MuiTypography-body1 jss450 css-joi7bb">
                                        3
                                    </p>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item jss449 css-1wxaqej" />
                                <div className="MuiGrid-root MuiGrid-item jss445 css-1wxaqej">
                                    <img
                                        className="jss448"
                                        src="https://order.taus.pk/static/media/wallet.7c6e69440249d7c028a893e6bba16ac9.svg"
                                        alt="Wallet"
                                    />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                                    <p className="MuiTypography-root MuiTypography-body1 jss450 css-joi7bb">
                                        Rs. 2,816
                                    </p>
                                </div>
                            </div>
                            <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                        <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium jss453 css-5y4bn4"
                            tabIndex={0}
                            type="button"
                            data-id="top-bar-explore-btn"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"   >
                            <div className="MuiGrid-root MuiGrid-container css-1tsmbea">
                                <div className="MuiGrid-root MuiGrid-item jss452 css-1wxaqej">
                                    <img
                                        className="jss451"
                                        src="https://order.taus.pk/static/media/explore.4da3d9fe5ad7b282ba6c2d9e11662002.svg"
                                        alt="Explore" />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                                    <p className="MuiTypography-root MuiTypography-body1 jss455 css-joi7bb">
                                        Explore
                                    </p>
                                </div>
                            </div>
                            <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>

                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                    {/* Offcanvas right */}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">

                                <div className="row">
                                    <div className="col-12 my-3">
                                        <img className="jss1415" src="https://order.taus.pk/static/media/home.f8748bfe204ca1920c734af26c434095.svg" alt="Home" /> <strong className=" h6 my-2 ms-3">Home</strong>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                                <div className="row">
                                    <div className="col-6 my-3">
                                        <img
                                            className="jss1415"
                                            src="https://order.taus.pk/static/media/shopping-cart.1d948932c583709f57addf65be51f497.svg"
                                            alt="Cart"
                                        />{" "}
                                        <strong className=" h6 my-2 ms-3">Cart</strong>
                                    </div>
                                    <div className="col-6 my-9">
                                        <div className="row justify-content-center">
                                            <div className="col-6 col-sm-6">
                                                Item: <br /><b>3</b>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                Total <b>Rs.2,816</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                                <div className="row">
                                    <div className="col-12 my-3">
                                        <img className="jss1415" src="https://order.taus.pk/static/media/profile.fd22346f92628ec966f09fe0334eae22.svg" alt="My Profile" /> <strong className=" h6 my-2 ms-3">My Profile</strong>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />


                                <div className="row">
                                    <div className="col-12 col-12 my-6">
                                        <a
                                            className="btn"
                                            data-bs-toggle="collapse"
                                            href="#multiCollapseExample1"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="multiCollapseExample1"
                                        >
                                            <img
                                                className="jss1714"
                                                src="https://order.taus.pk/static/media/rightarrow.2c96ae477f695175e4f25fa16c848c3d.svg"
                                                alt="icon"
                                            />
                                            <img
                                                className="jss1415"
                                                src="https://order.taus.pk/static/media/shopinginfo.bdcc9d985f2cdca9293c48ff3d2f8d15.svg"
                                                alt="Shopping Info"
                                            />
                                            <strong className=" h6 my-2 ms-3">Shopping Info</strong>
                                        </a>
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="container">

                                                <div className="row">
                                                    <div className="col-12 my-3"><b>Returns & Refunds</b></div>
                                                    <div className="col-12 my-3"><b>Privacy Policy</b></div>
                                                    <div className="col-12 my-3"><b>Terms & Conditions</b></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                                <div className="row">
                                    <div className="col-12 my-3">
                                        <img className="jss1415" src="https://order.taus.pk/static/media/contact.1d2642b9d149b3d93ea46e7e834f5ff2.svg" alt="Contact us" /> <strong className=" h6 my-2 ms-3">Contact us</strong>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                                <div className="row jss1782 css-1cn3yto">
                                    <div className="col-12 jss1781 css-16nk945 text-center">
                                        © 2023 Taus. All Rights Reserved.
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                                <div className="row jss1783 css-tzs92q">
                                    <div className="col-12 my-3 jss1785 css-joi7bb text-center">
                                        Shop powered by
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-12 ms-12" />

                            </div>
                        </div>


                    </div>
                </div>
            </header >
            <div className="MuiGrid-root css-rfnosa" style={{ paddingTop: 80 }} />
        </>
    )
}

export default Header;