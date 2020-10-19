# parse2-kmz

This version is an update to the [parse-kmz](https://www.npmjs.com/package/parse-kmz) package where there was an error in the [unzip](https://www.npmjs.com/package/unzip2) package causing conflict when parsearing the geoJSON

# Installation

Simplest way to install `parse2-kmz` is to use [npm](http://npmjs.org), just `npm install parse2-kmz` which will download parse-kmz and all dependencies.

# Usage

```javascript
const parseKMZ = require("parse2-kmz");
// KMZ To KML From URL
parseKMZ
  .toKML("http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz")
  .then(console.log)
  .catch(console.error);

// KMZ To KML From File
parseKMZ.toKML("./file/kmx.kmz").then(console.log).catch(console.error);

// KMZ To JSON From URL
parseKMZ
  .toJson("http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz")
  .then(console.log)
  .catch(console.error);

// KMZ To JSON From File
parseKMZ.toJson("./file/kmx.kmz").then(console.log).catch(console.error);
```

But if you know you really found a bug, feel free to open an issue instead.
