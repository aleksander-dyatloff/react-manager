const path = require('path');

const config = {
  "stories": [
    "../**/*.story.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        "@root": path.resolve(__dirname, "../"),
        "@components": path.resolve(__dirname, "../components"),
        "@utils": path.resolve(__dirname, "../utils"),
        "@pages": path.resolve(__dirname, "../pages"),
        "@icons": path.resolve(__dirname, "../icons"),
        "@assets": path.resolve(__dirname, "../assets"),
        "@styles": path.resolve(__dirname, "../styles"),
        "@store": path.resolve(__dirname, "../store"),
        "@api": path.resolve(__dirname, "../api"),
        "@constants": path.resolve(__dirname, "../constants"),
        "@hooks": path.resolve(__dirname, "../hooks"),
        "@shared": path.resolve(__dirname, "../shared"),
      };    
    }

    return config;
  },
}

module.exports = config