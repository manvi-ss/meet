//import { useState } from "react";
import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are allowed";
    } else {
      setCurrentNOE(value);
      errorText = "";
    }
    setErrorAlert(errorText);
  };
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
