import './App.css';
import React, { Fragment } from "react";
import { Renderer } from "./Renderer";
import { config } from "./config";

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
      <Renderer config={config} />
    </>
  );

}

export default App;
