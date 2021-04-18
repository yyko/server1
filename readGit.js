console.log("hi");
import { spawn } from "child_process";
import { read } from "fs";
import _ from "lodash";
let p1 = "X:\\n\\projects\\active\\d3_viewer";

const readActivity = (path) => {
  let c_map = {};
  return new Promise((resolve, reject) => {
    let child = spawn("git", ["log", "--date=short", "--pretty=format:%ad"], {
      cwd: path,
    });

    child.stdout.on("data", function (data) {
      let str = data.toString();
      let arr = str.split("\n").filter((x) => x);
      arr.forEach((r) => {
        if (c_map[r] == undefined) c_map[r] = 0;
        c_map[r] += 1;
      });
    });

    child.on("close", function (code) {
      resolve(c_map);
    });

    child.stderr.on("data", function (data) {
      reject(data.toString());
    });
  });
};

readActivity(p1)
  .then((c_map) => {
    console.log(_.values(c_map).reduce((a, b) => a + b));
  })
  .catch((err) => console.log(err));
