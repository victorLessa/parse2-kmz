parse-kmz
===========
Ever had the urge to parse KMZ? And wanted to access the data in some sane,
easy way? Don't want to compile a C parser, for whatever reason? Then parse-kmz is
what you're looking for!

Installation
============

Simplest way to install `parse-kmz` is to use [npm](http://npmjs.org), just `npm
install parse-kmz` which will download parse-kmz and all dependencies.

Usage
=====

```javascript
const parseKMZ = require('parse-kmz');
// KMZ To KML From URL
parseKMZ
  .toKML('http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz')
  .then(console.log);
  .catch(console.error);
 
// KMZ To KML From File
parseKMZ
  .toKML('./path-to-file/file-name.kmz')
  .then(console.log);
  .catch(console.error);
  
// KMZ To JSON From URL
parseKMZ
  .toJson('http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz')
  .then(console.log);
  .catch(console.error);
 
// KMZ To JSON From File
parseKMZ
  .toJson('./path-to-file/file-name.kmz')
  .then(console.log);
  .catch(console.error);
```

But if you know you really found a bug, feel free to open an issue instead.
