import './App.css';
import React, { Fragment } from "react";
import { config } from "./config";
import { ShowFrame } from "./ShowFrame";
import { useStateValue } from './StateProvider'

const renderComponent = (item) => {
      const { Component, ...props } = item;
      return (
        <Fragment key={props.name}>
          <Component {...props} />
        </Fragment>
      );
  }
function App() {
  const [{frame}] = useStateValue();
  return (
    <>
    <ShowFrame>{renderComponent(config[frame])}</ShowFrame>
    </> 
  )

}

export default App;
