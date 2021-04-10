import "./App.css";
import React, { useEffect, Fragment } from "react";
import { SvgView } from "./SvgView";
import { useStateValue } from "./StateProvider";

const renderComponent = (item) => {
  const { Component, ...props } = item;
  return (
    <Fragment key={props.name}>
      <Component {...props} />
    </Fragment>
  );
};

document.title = "Slideshow";

function App() {
  const [{ frame, frames }, dispatch] = useStateValue();
  useEffect(() => {
    let mounted = true;
    const keyHandler = (e) => {
      if (e.key == "a") {
        dispatch({ type: "NEXT" });
      }
    };
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          dispatch({ type: "SET_QUANTITY", payload: data.frames });
        }
      });
    window.addEventListener("keypress", keyHandler);
    return () => {
      window.removeEventListener("keypress", keyHandler);
      mounted = false;
    };
  }, []);

  const goNext = () => {
    dispatch({ type: "NEXT" });
  };

  return (
    <div>
      <SvgView />
      {frame} of {frames.length}
      <div onClick={goNext} className="showframeNext">
        Next
      </div>
    </div>
  );
}

export default App;
