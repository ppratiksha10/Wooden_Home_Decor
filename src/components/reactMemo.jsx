import { useState } from "react";
import React from "react";
// Avoid Unnecessary re-rendering
function Parent(){
    const [count, setCount] = useState(0);
    console.log("parent");
    return(<>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <Child/>
    </>)

}
/*
function Child() {
  console.log("child render");
  return <h1>Child Component</h1>;
}*/
/* Resolve using a React memo */

const Child = React.memo(()=>{
    console.log("childer");
    return <>
    <h1>Chlid compnent</h1></>
})
export default Parent;