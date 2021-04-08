const fs = require("fs");

var directory_filenames, diary, get_bush_ffns;

//::WindowPath->[File]
get_bush_ffns = function (path) {
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
folders = function (path) {
  return fs
    .readdirSync(path)
    .map((filename) => {
      fullname = path + "\\" + filename;
      stats = fs.statSync(fullname);
      return [fullname, stats.isDirectory()];
    })
    .filter((x) => x[1])
    .map((x) => x[0]);
};

//::WindowPath->[String]
full_filenames = function (path) {
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

exports.diary = (x) => {
  var sql, p, from, to;
  sql =
    "SELECT * FROM dairy_records \
	INNER JOIN objects ON dairy_records.dairy_record_code=objects.object_code";
  if (x.year !== undefined) {
    if (x.month !== undefined) {
      from = dnt.begining_of_month(x.year, x.month);
      to = dnt.end_of_month(x.year, x.month);
    } else {
      from = dnt.begining_of_year(x.year);
      to = dnt.end_of_year(x.year);
    }
    sql +=
      " WHERE objects.creation_timestamp >=" +
      from / 1000 +
      " AND \
		objects.creation_timestamp <=" +
      to / 1000;
  }

  p = new Promise((resolve, reject) => {
    x.con.query(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ rows: rows, con: x.con });
    });
  });
  return p;
};

exports.records = (x) => {
  var sql;
  sql = "SELECT * FROM records";
  x.con.query(sql, x.callback);
};

directory_filenames = function (path) {
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

exports.last_edited = function (path) {
  var filenames, vh;
  filenames = directory_filenames(path);
  vh = filenames.map((filename) => {
    return [fs.statSync(path + "\\" + filename)["mtime"].getTime(), filename];
  });
  vh.sort((a, b) => {
    return b[0] - a[0];
  });
  return vh[0][1];
};

exports.directory_filenames = directory_filenames;
exports.files = directory_filenames;
exports.folders = folders;
exports.full_filenames = full_filenames;
exports.get_bush_ffns = get_bush_ffns;
