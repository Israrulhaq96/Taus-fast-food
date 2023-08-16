
function BannerInfo(props) {
    
    return (
        <>
         <div className="page-header position-relative">
                <img src="https://imagedelivery.net/EtcVECyqIuOr1FjP12iTCg/0dc41915-f6ed-4afd-65e9-2c46d9ffb600/public" alt="bg" />
                <div className="details d-flex position-absolute bottom-0 start-0">
                    <div className=" address d-flex m-2">
                        <div className="icon detail-icon m2">
                            <i className="fa-solid fa-clock" />
                        </div>
                        <div className="detail-text-area m-2">
                            <h4 className="detail-heading jss1106 css-16nk945">Opening Hours</h4>
                            <p className="detail-text jss1103 css-onohb7">Wed 01:00 pm - 11:30 pm</p>
                        </div>
                    </div>
                    <div className="address d-flex m-2">
                        <div className="icon detail-icon m2">
                            <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className="detail-text-area m-2">
                            <h4 className="detail-heading jss1106 css-16nk945">Address</h4>
                            <p className="detail-text jss1103 css-onohb7">Intellectual Village, Spring N...</p>
                        </div>
                    </div>
                    <div className="address d-flex m-2">
                        <div className="icon detail-icon m2">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div className="detail-text-area m-2">
                            <h4 className="detail-heading jss1106 css-16nk945">Contact</h4>
                            <p className="detail-text jss1103 css-onohb7">+923390987654</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default BannerInfo;