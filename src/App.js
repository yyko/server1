import './App.css';
import * as fs from 'fs';
import React, { useEffect, Fragment } from "react";
import { config } from "./config";
import { ShowFrame } from "./ShowFrame";
import { SvgView } from "./SvgView";
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
  const [{ frame, frames }, dispatch] = useStateValue();
  useEffect(() => {
    let mounted = true;
    fetch('/api')
      .then((res) => res.json())
      .then(data => {
        if (mounted) {
          dispatch({ type: 'SET_QUANTITY', payload: data.frames })
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <>
      Wellcome to the viewer of {frames.length}

      <SvgView />
      <div>{frame}</div>
    </>
  )

}

export default App;
