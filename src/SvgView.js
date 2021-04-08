import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";

export function SvgView(props) {
  const [{ frame, frames, framesSvg }, dispatch] = useStateValue();
  useEffect(() => {
    let mounted = true;
    if (frames.length) {
      fetch("/show/" + frames[frame])
        .then((res) => res.text())
        .then((data) => {
          if (mounted) {
            dispatch({ type: "LOAD_SVG", payload: data });
          }
        });
    }
    return () => (mounted = false);
  }, [frames, frame]);
  if (framesSvg[frame]) {
    return (
      <>
        <div
          className="showframe"
          dangerouslySetInnerHTML={{ __html: framesSvg[frame] }}
        ></div>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
}
