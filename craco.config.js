const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@Components": path.resolve(__dirname, "src/Components"),
			"@images": path.resolve(__dirname, "src/images"),
			"@Styles": path.resolve(__dirname, "src/Styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
};
