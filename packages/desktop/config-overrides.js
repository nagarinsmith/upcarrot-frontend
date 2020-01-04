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

// module.exports = function override(oldConfig, env) {
//   const config = override(
//     disableEsLint(),
//     addDecoratorsLegacy(),
//     ...addBabelPlugins(
//       "babel-plugin-styled-components",
//       "@babel/plugin-proposal-export-default-from"
//     ),
//     fixBabelImports("react-app-rewire-mobx", {
//       libraryDirectory: "",
//       camel2DashComponentName: false
//     }),
//     addWebpackAlias({
//       "@": path.resolve(__dirname, "src")
//       // "@shared": fs.realpathSync("../components")
//     }),
//     babelInclude([path.resolve("src"), fs.realpathSync("../components")])
//   )(oldConfig, env);
//   config.resolve.plugins = config.resolve.plugins.filter(
//     plugin => plugin.constructor.name !== "ModuleScopePlugin"
//   );
//   config.module.rules[0].include = appIncludes;
//   config.module.rules[1] = null;
//   config.module.rules[2].oneOf[1].include = appIncludes;
//   config.module.rules[2].oneOf[1].options.plugins = [
//     require.resolve("babel-plugin-react-native-web")
//   ].concat(config.module.rules[2].oneOf[1].options.plugins);
//   config.module.rules = config.module.rules.filter(Boolean);
//   config.plugins.push(
//     new webpack.DefinePlugin({ __DEV__: env !== "production" })
//   );
//   return config;
// };

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
  removeModuleScopePlugin(),
  babelInclude([path.resolve("src"), fs.realpathSync("../shared")])
);
