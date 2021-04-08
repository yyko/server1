import React from "react";
import "./ShowFrame.css";
import { useStateValue } from "./StateProvider";

export function ShowFrame(props) {
  const [{ frame }, dispatch] = useStateValue();
  const goNext = () => {
    dispatch({ type: "NEXT" });
  };
  return (
    <>
      <div className="showframe">
        {props.children}
        <div>{frame}</div>
        <div onClick={goNext} className="showframeNext">
          Next
        </div>
      </div>
    </>
  );
}
