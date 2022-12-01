import React from "react";
import "./Nomatch.css";

const Nomatch = () => {
  return (
    <>
      <div className="figure">
        <div className="mj">
          <div className="head">
            <div className="nose"></div>
            <div className="hair">
              <div className="ponytail"></div>
              <div className="frontpony"></div>
            </div>
          </div>
          <div className="body">
            <div className="jacket">
              <div className="hand"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot"></div>
          </div>
          <div className="leg lft">
            <div className="foot"></div>
          </div>
        </div>
        <div className="error-no">
          {" "}
          <span>4</span>
          <div className="moon"></div>
          <span>4</span>
        </div>
      </div>
    </>
  );
};

export default Nomatch;
