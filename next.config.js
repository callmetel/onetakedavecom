module.exports = {
  /*
    NOTE: this is needed for this demo because this issue
    was occuring https://github.com/framer/motion/issues/1307
  */
  webpack: (config) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/
    });

    return config;
  }
};
