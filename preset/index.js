// Use Require All
const get = require("require-all");

// Module Exports
module.exports = get({
  dirname: `${__dirname}`,
  filter: file => {
    if (file !== "index.js") {
      return file;
    }
  },
  map: name => name.replace(/\.\S+$/, "")
});
