import './App.css';
import * as fs from 'fs';
import React, { Fragment } from "react";
import { config } from "./config";
import { ShowFrame } from "./ShowFrame";
import { useStateValue } from './StateProvider'
const SOURCE_PATH = 'X:\\n\\images\\!svg\\timeline';
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
