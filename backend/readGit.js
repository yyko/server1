import { readActivity } from "./utils.js";
import _ from "lodash";
import { folders } from "./get.js";
let p1 = "X:\\n\\projects\\active\\d3_viewer";
let p2 = "X:\\n\\projects\\active";

function traverse(path_to_folder) {
  let flds = folders(path_to_folder);
  if (flds.some((folder) => /\.git$/.test(folder))) {
    readActivity(path_to_folder)
      .then((c_map) => {
        console.log(
          path_to_folder + " " + _.values(c_map).reduce((a, b) => a + b)
        );
      })
      .catch((err) => console.log(err));

    return;
  } else {
    flds.forEach((fld) => traverse(fld));
    return;
  }
}
traverse(p2);
