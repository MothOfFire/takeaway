// rem 适配移动端配置

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android >= 4.0",
        "iOS >= 7.0",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "postcss-pxtorem": {
      rootValue: 37.5, // 1rem 等于多少像素
      propList: ["*"],
      selectorBlackList: [":root"],
    },
  },
};
