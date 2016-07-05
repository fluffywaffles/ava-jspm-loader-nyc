SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/packages/npm/",
      "example/": "/src/client/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "packages/npm/",
      "example/": "src/client/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "example": {
      "main": "example.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
