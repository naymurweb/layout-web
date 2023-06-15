import React from "react";

const Input = ({value,value2,iHandaler,dHandaler}) => {
  return (
    <div>
      <input type="number" placeholder={`IncrementValue: ${value}`} onChange={iHandaler}  />
      <br />
      <input type="number" placeholder={`DecrementValue: ${value2}`} onChange={dHandaler}  />
      <br />
    </div>
  );
};

export default Input;
