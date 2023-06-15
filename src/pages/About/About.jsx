import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "./Button/Button";
import Input from "./Input/Input";

const About = () => {
  const [count, setCount] = useState(1);
  const [value,setValue]=useState(1)
  const [dValue,setDvalue]=useState(1)
  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    setCount(count - dValue);
  };
  const iHandaler=(e)=>{
    const iValue=parseInt(e.target.value);
    console.log('i',iValue);
    setValue(iValue)
  }
  const dHanaler=(e)=>{
    const dValue=parseInt(e.target.value)
    console.log('d',dValue);
    setDvalue(dValue)
  }
  return (
    <div>
      <Layout>
        <h1>this is About</h1>
        <h2>Count:{count}</h2>
        <Input value={value} value2={dValue} iHandaler={iHandaler} dHandaler={dHanaler}/>
        <Button increment={increment} decrement={decrement} />
      </Layout>
    </div>
  );
};

export default About;
