import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const Blog = () => {
  const [name, setName] = useState({});
  const data = [
    { name: "tonmoy", email: "tonmoy@gmail.com" },
    { name: "rana", email: "rana@gmail.com" },
    { name: "sakib", email: "sakib42@gmail.com" },
    { name: "asif", email: "asif321@gmail.com" },
  ];

useEffect(()=>{
  setTimeout(() => {
    setName({ me: "nr" });
  }, 1000);
  console.log('rander=>',name);
},[])


  return (
    <div>
      <Layout>
        {name.me ? <h1>My name is {name.me}</h1> : <h1>no data found! </h1>}
        {/* {data.length > 0 &&
          data.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <br />
            </div>
          ))} */}

        {data.length > 0 ? (
          data.map((item, i) => (
            <div key={i}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <br />
            </div>
          ))
        ) : (
          <h2>no data found!!</h2>
        )}

        {/* <div>
          <h2>{data[0].name}</h2>
          <p>{data[0].email}</p>
        </div>
        <br />
        <br />
        <div>
          <h2>{data[1].name}</h2>
          <p>{data[1].email}</p>
        </div>
        <br />
        <br /> */}
      </Layout>
    </div>
  );
};

export default Blog;
