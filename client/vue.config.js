// set up proxy to express server to map api/items
module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				ws: true,
				changeOrigin: true,
			},
		},
	},
	transpileDependencies: ["vuetify"],
};
