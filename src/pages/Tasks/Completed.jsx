import React from "react";

const Completed = ({ data }) => {
  const completedData = data.filter((item) => item.isCompleted ===true);
  return (
    <div
      style={{
        border: "5px solid green",
        marginTop: "100px",
        height: "350px",
        padding: "20px",
      }}
    >
      <h2>Completed Tasks:</h2>
      <ul>
        {
        completedData.map(data=><li key={data.id}>{data.text}</li>)
        }</ul>
       
    </div>
  );
};

export default Completed;
