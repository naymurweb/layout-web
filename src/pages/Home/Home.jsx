import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import * as DateFns from "date-fns";
const Home = () => {
  const [date, setDate] = useState(new Date());

  // const [value, setValue] = useState(undefined);
  //   const [book,setBook] = useState({});
  // const [data, setData] = useState("s");
  //   const [name, setName] = useState("p");
  //   const myValue = value || 50;
  //   name&& console.log('amar name asa');
  //   const ff=value??20
  //   console.log(ff);

  // setTimeout(() => {
  //   // setBook({name:'program hero!'})
  // }, 1000);
  // console.log("update");

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const getTimes = (date) => {
    return {
      hours: DateFns.getHours(date),
      minutes: DateFns.getMinutes(date),
      seconds: DateFns.getSeconds(date),
    };
  };

  const time = getTimes(new Date());

  const formatTime  = (time) => {
    return time> 10 ? time : `0${time}`;
  };
  console.log(time);

  return (
    <div>
      <Layout>
        <h1>Time:</h1>
        <h1>
          {formatTime(time.hours)} . {formatTime(time.minutes)} . {formatTime(time.seconds)}
        </h1>

        {/* <h2>My Book name is {book.name?book.name:'(No Book Data Found!)'}</h2> */}

        {/* {data&&<h1>Hi, my name is :{data}</h1>}
        {!data&&<h1>Hi, my name is nai!</h1>} */}
        {/* {data ? <h1>Hi, my name is : {data}</h1> : <h1>Hi, my name is :</h1>} */}
      </Layout>
    </div>
  );
};

export default Home;
