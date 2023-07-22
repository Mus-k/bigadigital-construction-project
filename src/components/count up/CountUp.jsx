import React from "react";
import "./CountUp.css";
import CountUp from "react-countup";

const CountUpFunc = () => {
  return (
    <div className="counters">
      <div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={60} duration={8} />
          </h3>
          <h5>YEARS OF EXPERIENCED</h5>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={10000} duration={8} />
          </h3>
          <h5>PROJECT DONE</h5>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={400} duration={8} />
          </h3>
          <h5>PROFESSIONAL EXPERT</h5>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={1500} duration={8} />
          </h3>
          <h5>MACHINERIES EQUIPMENTS</h5>
        </div>
      </div>
    </div>
  );
};

export default CountUpFunc;
