import React from "react";
import CategoryBar from './CategoryBar';
export default function CategoryList(categories){
    return(
        <div className="menu-bar my-3 py-3 d-flex">
                    <div className="off-canvas-menu">
                        <a
                            className="menu-btn btn btn-primary"
                            data-bs-toggle="offcanvas"
                            href="#offcanvasExample"
                            role="button"
                            aria-controls="offcanvasExample"
                        >
                            <i className="fa-solid fa-bars" />
                        </a>
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                    Menu
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">
                                <div>please select a dish</div>

                                <CategoryBar c_class={"d-block"} />

                            </div>
                        </div>
                    </div>
                    <div className="categories m-2 container categoryBarClass" >
                        <CategoryBar c_class={""} />
                    </div>
                </div>
    )
}