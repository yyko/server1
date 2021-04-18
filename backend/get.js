import fs from "fs";

//::WindowPath->[File]
export const get_bush_ffns = function (path) {
  //ffns = full filenames
  var flds, files;
  flds = folders(path);
  files = full_filenames(path);
  if (flds.length) {
    return files
      .concat(flds.map((fld) => get_bush_ffns(fld)))
      .reduce((a, b) => {
        return a.concat(b);
      }, []);
  } else {
    return files;
  }
};

//::WindowPath->[Folder]
export const folders = function (path) {
  return fs
    .readdirSync(path)
    .map((filename) => {
      let fullname = path + "\\" + filename;
      let stats = fs.statSync(fullname);
      return [fullname, stats.isDirectory()];
    })
    .filter((x) => x[1])
    .map((x) => x[0]);
};

//::WindowPath->[String]
export const full_filenames = function (path) {
  var all, res, pared, stats, fullname, timestamp;
  all = fs.readdirSync(path);
  res = all
    .map((filename) => {
      fullname = path + "\\" + filename;
      stats = fs.statSync(fullname);
      return [fullname, stats.isFile()];
    })
    .filter((x) => x[1])
    .map((x) => x[0]);
  return res;
};

export const directory_filenames = function (path) {
  //::String->[String]
  var all, res, pared, stats, fullname, timestamp;
  all = fs.readdirSync(path);
  res = all
    .map((filename) => {
      fullname = path + "\\" + filename;
      stats = fs.statSync(fullname);
      return [filename, stats.isFile()];
    })
    .filter((x) => {
      return x[1];
    })
    .map((x) => {
      return x[0];
    });
  return res;
};
