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
    {[0, 1, 2, 3, 4, 5, 6].map(i=>{
      return renderComponent(config[i])
    })}
    </> 
  )

}

export default App;
