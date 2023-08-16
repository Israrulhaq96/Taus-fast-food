import React from "react";
import CategoryItems from "./CategoryItems";

const getCategoryItems=(category, items)=>{
   return items.filter(item=>item.category===category)
}
export default function CategoryWiseMenu({categories,items}){
    return(
        <>
        {
            categories.map(category=>(
                 <CategoryItems 
                category={category} 
                items={getCategoryItems(category, items)
                }/> 
            ))
        }
        </>
    )
}