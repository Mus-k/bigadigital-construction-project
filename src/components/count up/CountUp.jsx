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
          <p className='counterText'>YEARS OF EXPERIENCED</p>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={10000} duration={8} />
          </h3>
          <p className='counterText'>PROJECT DONE</p>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={400} duration={8} />
          </h3>
          <p className='counterText'>PROFESSIONAL EXPERT</p>
        </div>
        <div className="counter">
          <h3 className="countNumber">
            <CountUp start={0} end={1500} duration={8} />
          </h3>
          <p className='counterText'>MACHINERIES EQUIPMENTS</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpFunc;
