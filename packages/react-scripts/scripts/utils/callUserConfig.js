'use strict';

const paths = require('../../config/paths');
const fs = require('fs');
const webpack = require('webpack');

module.exports = async (config, env) => {
  if (!fs.existsSync(paths.configFile)) {
    if (process.env.CONFIG_FILE) {
      throw new Error(
        `react-scripts config could not be loaded!\nFile ${
          process.env.CONFIG_FILE
        } not found.`
      );
    }
    return;
  }

  const m = require(paths.configFile);
  const transformer = (m && m.default) || m;
  try {
    await transformer(config, env, getWebpackHelpers()); //, Object.assign({}, env, { ssr }), new WebpackConfigHelpers(env.cwd));
  } catch (err) {
    throw new Error(`Error at ${paths.configFile}: \n` + err);
  }
};

function getWebpackHelpers() {
  return { webpack };
}
