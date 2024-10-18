import React from "react";
import ShoesCard from "./shoes-card/ShoesCard";
import shoesStyle from "../shoes/shoes.module.css";
import shoesData from "../../api/shoesApi.json";

const Shoes = ()=>{
// ----- filter ---------

 // Filter shoes based on price
 const filteredShoes = shoesData.filter((itm) => {
    // Remove the dollar sign and convert the price to a number for comparison
    const price = parseFloat(itm.price.replace('$', ''));
    return price > 100; // Compare the numeric value
  });

  return (
    <div className={shoesStyle.shoesSection}>
      <div className={shoesStyle.shoesInner}>
        <h1>------ Shoes Product List <span> -total items: {filteredShoes.length} </span></h1>
        <ul className={shoesStyle.shoesList}>
          {filteredShoes.map((shoe) => (
            <ShoesCard
              key={shoe.id} // Add a unique key prop
              img={shoe.img_url}
              name={shoe.name}
              category={shoe.category}
              description={shoe.description}
              price={shoe.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shoes;