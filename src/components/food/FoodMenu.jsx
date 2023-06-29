import React from "react";
import food_img1 from "../../assets/img/other1.jpg";
import food_img2 from "../../assets/img/other2.jpg";
import food_img3 from "../../assets/img/other3.jpg";
import food_img4 from "../../assets/img/other4.jpg";
import FoodImage from "./FoodImage";

const FoodMenu = () => {

    return(

        <>
          <div className="container mt-4">
            <div className="row">
                <FoodImage header ={food_img1} />
                <FoodImage header ={food_img2}/>
                <FoodImage header ={food_img3}/>
                <FoodImage header ={food_img4}/>
            </div>
          </div>
        
        
        </>
    )


};
export default FoodMenu;