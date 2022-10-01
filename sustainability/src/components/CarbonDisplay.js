import React from "react";
import "./Home.css";

function CarbonDisplay({distance}) {
  var carbonData = parseFloat(distance) * 0.8708;
  carbonData = Math.trunc(carbonData*100)/100
  return (
    <div className="carbonDisplay">
      <h4 style={{ flex: 1 }}>Carbon Emissions</h4>
      <div className="carbonDisplayInfo" style={{ flex: 9 }}>
        <h1>{carbonData} Pounds of C02 Per Mile</h1>
      </div>
    </div>
  );
};

export default CarbonDisplay;
