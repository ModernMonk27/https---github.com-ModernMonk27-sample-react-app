import React from "react";
import FoodContent from "./FoodContent";


const FoodImage = (props) => {

    return(

        <>
          <div className="col-sm-3">
                    <div className="card">
                        <img src={props.header} alt="" height={200}/>
                        <FoodContent/>
                    </div>
                </div>
        
        
        </>
    )


};
export default FoodImage;