import React from "react";
export default function ItemCard({item}){
    return(
        <div className="p-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="menu-item bg-white d-flex  p-3 justify-content-between">
                                <div className="menu-item-detail">
                                    <div className="menu-item-title">{item.title}</div>
                                    <div className="menu-item-price">{item.price}</div>
                                </div>
                                <div className="menu-item-image">
                                    <img src="https://chikoo.imgix.net/merchant-prod-private/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641566733074/1641566733075.jpg?ixlib=js-3.8.0&w=115&dpi=96&s=46c9eaf258703730911eaa33a02f801d" alt="" />
                                </div>
                            </div>
                        </div> 
    )
}