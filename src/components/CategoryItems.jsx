import React from "react";
import ItemCard from "./ItemCard"
export default function CategoryItems({ Category, items }) {
    return (
        <div className="menu-section">
            <div className="menu-section-title m-5">
                <h2>{Category} </h2>
            </div>
            <div className="row m-5 ">
              {items.map(item=><ItemCard key={item.id} item={item}/>)}
                </div>
                </div>

                )
}