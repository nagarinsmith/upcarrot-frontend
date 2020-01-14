const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
  addBabelPlugins,
  fixBabelImports,
  addWebpackAlias,
  babelInclude,
  removeModuleScopePlugin
} = require("customize-cra");
const path = require("path");
const fs = require("fs");

const webpack = require("webpack");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp("src"), resolveApp("../components/src")];

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  ...addBabelPlugins(
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-export-default-from"
  ),
  fixBabelImports("react-app-rewire-mobx", {
    libraryDirectory: "",
    camel2DashComponentName: false
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    shared: fs.realpathSync("../shared")
  }),
  removeModuleScopePlugin(), // to see outside root directory
  babelInclude([path.resolve("src"), fs.realpathSync("../shared")])
);
