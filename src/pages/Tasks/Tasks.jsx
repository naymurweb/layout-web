import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CreateTasks from "../../components/Tasks/CreateTasks";
import shortid from "shortid";
import ShowList from "../../components/Tasks/ShowList";
import Completed from "./Completed";
function Tasks() {
  const [data, setData] = useState([]);
  const [deleteItem, setDeleteItem] = useState("");

  const textDataHandler = (text) => {
    const task = {
      text,
      id: shortid.generate(),
      time: new Date(),
      isCompleted: false,
    };
    setData([task, ...data]);
  };

  useEffect(() => {
    const myItem = data.filter((item) => item.id !== deleteItem);
    setData(myItem);
  }, [deleteItem]);

  const delItem = (i) => {
    setDeleteItem(i);
  };

  const updateItem = ({ id, text }) => {
    const newArr = [...data];
    const updatingItem = data.findIndex((item) => item.id === id);

    newArr[updatingItem].text = text;
    setData(newArr);
  };

  const completedData = (item) => {
    const newArr = [...data];
    const updatingItem = data.findIndex((i) => i.id === item.id);
    newArr[updatingItem].isCompleted = true;
    setData(newArr);
  };

  const myData=data.filter(item=>item.isCompleted!==true)

  return (
    <div>
      <Layout>
        <h1>This is Tasks</h1>
        <CreateTasks textDataHandler={textDataHandler} />
        <ShowList
          data={myData}
          delItem={delItem}
          updateItem={updateItem}
          completedData={completedData}
        />
        <Completed data={data} />
      </Layout>
    </div>
  );
}

export default Tasks;
