import React, { useState } from "react";
import axios from "axios";

const CalculatorForm = ({ setResults }) => {
 const [formData, setFormData] = useState({
  applianceType: "Dishwasher",
  standardUsage: "",
  efficientUsage: "",
  frequency: "",
  costPerLiter: "",
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post("http://localhost:5000/api/calculate", formData);
   setResults(response.data);
  } catch (error) {
   console.error("Error calculating savings:", error);
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <label>
    Appliance Type:
    <select name="applianceType" value={formData.applianceType} onChange={handleChange}>
     <option value="Dishwasher">Dishwasher</option>
     <option value="Washing Machine">Washing Machine</option>
     <option value="Showerhead">Showerhead</option>
     <option value="Toilet">Toilet</option>
    </select>
   </label>

   <label>
    Standard Water Usage (liters):
    <input
     type="number"
     name="standardUsage"
     value={formData.standardUsage}
     onChange={handleChange}
     required
    />
   </label>

   <label>
    Efficient Water Usage (liters):
    <input
     type="number"
     name="efficientUsage"
     value={formData.efficientUsage}
     onChange={handleChange}
     required
    />
   </label>

   <label>
    Usage Frequency (times/day):
    <input
     type="number"
     name="frequency"
     value={formData.frequency}
     onChange={handleChange}
     required
    />
   </label>

   <label>
    Cost per Liter of Water (₹):
    <input
     type="number"
     name="costPerLiter"
     value={formData.costPerLiter}
     onChange={handleChange}
    />
   </label>

   <button type="submit">Calculate</button>
  </form>
 );
};

export default CalculatorForm;
