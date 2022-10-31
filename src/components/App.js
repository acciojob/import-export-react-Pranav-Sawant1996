import React, { Component, useState } from "react";
import '../styles/App.css';
import Headings from './Headings'
import InputQuery from './InputQuery'
import SubHeading from './SubHeading'
import SubmitButton from './SubmitButton'

const App = () => {
  return (
    <div id="main">
      <Headings />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
export default App;


