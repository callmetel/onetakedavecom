module.exports = {
  env: {
		assetURL: "https://dg09qo2eiz3mc.cloudfront.net",
		loopStillURL: "https://dg09qo2eiz3mc.cloudfront.net/still/loop/",
		loopVideoURL: "https://dg09qo2eiz3mc.cloudfront.net/video/loop/",
		sceneStillURL: "https://dg09qo2eiz3mc.cloudfront.net/still/scene/",
		sceneVideoURL: "https://dg09qo2eiz3mc.cloudfront.net/video/scene/",
	},
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
