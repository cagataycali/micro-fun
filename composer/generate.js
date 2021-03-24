const fs = require('fs')
const path = require('path')

const directoryNames = fs.readdirSync(path.resolve(__dirname, "../src"));

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const remotes = (options) => {
  const {isServer} = options
  const db = {}
  directoryNames.forEach(directoryName => {
    const capitalizedFolderName = capitalize(directoryName);
    db[capitalizedFolderName] = isServer
      ? path.resolve(
          __dirname,
          `../src/${directoryName}/.next/server/static/runtime/remoteEntry.js`
        )
      : capitalizedFolderName;
  })
  return db
}

module.exports = remotes