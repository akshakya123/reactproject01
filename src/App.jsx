import React from 'react'
import { useState } from 'react';
const App = () => {
  const [counter, setCounter]=useState(10);
  const addvalue=()=>{
    if(counter<20){
      //counter=counter+1;
      setCounter(counter+1);
      console.log(counter)
    }
  }
  const subvalue=()=>{
    if(counter>0){
    //counter=counter-1;
    setCounter(counter-1);
    console.log(counter);
    }
  }
  return (
    <>
    <h1>Counter value: {counter}</h1>
    <button onClick={addvalue} >Increase count</button>
    <br />
    <br />
    <button onClick={subvalue}>Decrease count</button>
    </>
  )
}

export default App

// #endregion
// function App() {
//   return (
//     <>
//     <h1>hello word</h1>
//     </>
//   )
// }

// export default App
