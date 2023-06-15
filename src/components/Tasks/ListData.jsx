import React from "react";

const ListData = ({ item, delItem, updateItem, completedData }) => {
  const updatePrompt = () => {
    const text = prompt("Type your text");
    updateItem({ id: item.id, text: text });
  };

  const completedBtn = () => {
    completedData({
      isCompleted: true,
      id: item.id,
    });
  };

  return (
    <div>
      <li>{item.text}</li>
      <button onClick={() => delItem(item.id)}>Delete</button>
      <button onClick={updatePrompt}>Update</button>
      <button onClick={completedBtn}>Completed</button>
    </div>
  );
};

export default ListData;
