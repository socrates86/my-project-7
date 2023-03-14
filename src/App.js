import React from 'react';
import Button from "./Button"
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';


export default function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  return(
    <div>
      <h1>Counter that updates separately.</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  )
}
