import './App.css';
import React, { Fragment } from "react";
import { config } from "./config";
import { ShowFrame } from "./ShowFrame";

const renderComponent = (item) => {
      const { Component, ...props } = item;
      return (
        <Fragment key={props.name}>
          <Component {...props} />
        </Fragment>
      );
  }
function App() {
  return (
    <>
    <ShowFrame>{renderComponent(config[0])}</ShowFrame>
    </> 
  )

}

export default App;
