
function Footer(props) {
    
    return (
        <>
           
           <section className="footer d-flex justify-content-between">
                <div className="copy-right">
                    <p className="copy-right-text"> this is copy right text</p>
                </div>
                <div className="powered">
                    <p className="powered-by-text">this is powered by taus</p>
                </div>
                <div className="footer-left d-flex">
                    <div className="payment-methods d-flex">
                        <p className="payment-method-text">
                            <i className="fa-brands fa-cc-visa" />
                        </p>
                        <p className="payment-method-text">
                            <i className="fa-brands fa-cc-visa" />
                        </p>
                        <p className="payment-method-text">
                            <i className="fa-brands fa-cc-visa" />{" "}
                        </p>
                    </div>

                    <button
                        className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-default jss410 css-bheele"
                        tabIndex={0}
                        type="button"
                        aria-label="add"
                        style={{}}
                    >
                        <img
                            src="data:image/png;base64,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"
                            alt="Whatsapp"
                            className="jss411"
                        />
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                    </button>

                </div>
            </section>
        </>
    )
}

export default Footer;