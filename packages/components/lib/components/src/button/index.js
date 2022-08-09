"use strict";
const index$1 = require("./index2.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const index = withInstall(index$1);
module.exports = index;
