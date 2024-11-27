
import React, { useState } from 'react'

const EventFunctionState = () => {
    // const sayHello = (name)=>{
    //     alert(`Hello ${name}`);
    // }
    const [name,setName]=useState('Ali');
    const changeName = ()=>{
        setName('AYuB');
    }
  return (
    <>
        <h2>Events Functions & States</h2>
        <h2>Hello {name}</h2>
        {/* <button onClick={()=>alert('Hello Next JS')}>Click me</button> */}
        {/* <button onClick={()=>sayHello('ALi')}>Click me</button> */}
        <button onClick={changeName}>Click me</button>
    </>
  )
}

export default EventFunctionState
