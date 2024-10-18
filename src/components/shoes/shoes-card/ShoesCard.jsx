import React from "react";
import shoesStyle from "../shoes.module.css"

const ShoesCard = ({img,name,category,description,price}) =>{
    console.log("img", img)

return(
    <>
        <li className={shoesStyle.shoesListIn}>
        <div className={shoesStyle.shoesListImg}>
            <img src={img} alt="" />
        </div>
            <h2><b>name:</b>{name}</h2>
            <h2><b>category:</b>{category}</h2>
            <h2><b>price:</b> {price}</h2>
            <p><b>description :</b> {description}</p>
        </li>
    
    </>
)

}

export default ShoesCard;