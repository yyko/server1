import { readActivity } from "./utils.mjs";
import _ from "lodash";
let p1 = "X:\\n\\projects\\active\\d3_viewer";

readActivity(p1)
  .then((c_map) => {
    console.log(_.values(c_map).reduce((a, b) => a + b));
  })
  .catch((err) => console.log(err));
