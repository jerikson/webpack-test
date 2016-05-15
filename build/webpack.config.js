const path = require('path');

const PATHS = {
  app: path.join(__dirrname, 'app'),
  build: path.join(__dirrname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  }
};
