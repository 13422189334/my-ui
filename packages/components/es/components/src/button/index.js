import Button from "./index2.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const index = withInstall(Button);
export {
  index as default
};
