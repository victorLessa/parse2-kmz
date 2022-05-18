module.exports = (function () {
  const fs = require("fs");
  const request = require("request");
  const togeojson = require("@mapbox/togeojson");
  const unzipper = require("unzipper");
  const xmldom = new (require("@xmldom/xmldom").DOMParser)();

  /**
   *
   * @param {string} path
   *
   * @returns { string }
   */
  const toKML = (path) => {
    return new Promise((resolve, reject) => {
      if (path.indexOf("http") === 0) {
        request(path)
          .pipe(unzipper.Parse())
          .on("entry", function (entry) {
            if (entry.path.indexOf(".kml") === -1) {
              entry.autodrain();
              return;
            }
            let data = "";

            entry.on("error", reject);

            entry.on("data", function (chunk) {
              data += chunk;
            });

            entry.on("end", function () {
              resolve(data);
            });
          })
          .on("error", reject);
      } else {
        fs.createReadStream(path)
          .pipe(unzipper.Parse())
          .on("entry", function (entry) {
            if (entry.path.indexOf(".kml") === -1) {
              entry.autodrain();
              return;
            }
            let data = "";

            entry.on("error", reject);

            entry.on("data", function (chunk) {
              data += chunk;
            });

            entry.on("end", function () {
              resolve(data);
            });
          })
          .on("error", reject);
      }
    });
  };

  /**
   *
   * @param {string} path
   *
   * @returns { Object }
   */
  const toJson = (path) => {
    return new Promise((resolve, reject) => {
      toKML(path)
        .then((res) => xmldom.parseFromString(res))
        .then((res) => togeojson.kml(res))
        .then(resolve)
        .catch(reject);
    });
  };

  return {
    toKML,
    toJson,
  };
})();
