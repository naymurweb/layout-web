import React from "react";
import ListData from "./ListData";

const ShowList = ({ data, delItem, updateItem, completedData }) => {
 
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data?.map((item) => (
            <ListData
              item={item}
              key={item.id}
              delItem={delItem}
              updateItem={updateItem}
              completedData={completedData}
            />
          ))
        ) : (
          <p>No data Found!!!</p>
        )}
      </ul>
    </div>
  );
};

export default ShowList;
