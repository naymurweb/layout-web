import React, { useState } from "react";

const CreateTasks = ({ textDataHandler }) => {
  const [text, setText] = useState("");

  const dataAddHandler = () => {
    if (text) {
      textDataHandler(text);
      setText('');
    } else {
      alert("Please type your task!")
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="type your task"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <br />
      <button
        onClick={dataAddHandler}
      >
        Add Tasks
      </button>
    </div>
  );
};

export default CreateTasks;
