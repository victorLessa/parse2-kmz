const assert = require("assert");
const parseKMZ = require("../index");

describe("#0 To KML", function () {
  it("Parse KMZ File From URL", function () {
    parseKMZ
      .toKML("http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz")
      .then((res) => assert.equal(typeof res, "string"))
      .catch(console.error);
  });
  it("Parse KMZ File From Dir", function () {
    parseKMZ
      .toKML("./file/kmx.kmz")
      .then((res) => assert.equal(typeof res, "string"))
      .catch(console.error);
  });
});

describe("#1 To JSON", function () {
  it("Parse KMZ File From URL", function () {
    parseKMZ
      .toJson("http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz")
      .then((res) => assert.equal(typeof res, "object"))
      .catch(console.error);
  });
  it("Parse KMZ File From Dir", function () {
    parseKMZ
      .toJson("./file/kmx.kmz")
      .then((res) => assert.equal(typeof res, "object"))
      .catch(console.error);
  });
});
