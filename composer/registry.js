const fs = require("fs");

const registryContent = fs.readFileSync("../registry", "utf-8").trim().split("\n").map(row => {
  let [name, port] = row.split(" ")
  return {name, port};
});

module.exports = registryContent