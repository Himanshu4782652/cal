import React, { useState } from "react";
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';

import "./index.css";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div>
      <header>
        <h1>Water-Efficient Appliances Savings Calculator</h1>
      </header>
      <CalculatorForm setResults={setResults} />
      <Results results={results} />
    </div>
  );
};

export default App;
