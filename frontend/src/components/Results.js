import React from "react";

const Results = ({ results }) => {
 if (!results) return null;

 return (
  <div>
   <h2>Results</h2>
   {results.applianceType && <p>Appliance Type: {results.applianceType}</p>}
   <p>Water Savings: {results.waterSavings} liters</p>
   {results.monetarySavings > 0 && (
    <p>Monetary Savings: ₹{results.monetarySavings.toFixed(2)}</p>
   )}
  </div>
 );
};

export default Results;
