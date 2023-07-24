import React from "react";
import "./Truck.css";
import { default as truck } from "../../assets/images/truck.png";
import { default as machine } from "../../assets/images/jcb.png";
const Truck = () => {
  return (
    <div className="truck">
      <div className="animateDiv">
      <div className="truckLeft">
        <img src={truck} alt="truck toy" width="100%" />
      </div>
      </div>
     <div className="animateRight">
     <div className="truckRight">
        <img src={machine} alt="machine" width="100%" />
      </div>
     </div>
     
    </div>
  );
};

export default Truck;
