const { defaults } = require("jest-config");

module.exports = {
	transform: {
		...defaults.transform,
		"^.+\\.js$": "babel-jest",
		"^.+\\.vue$": "vue-jest",
	},
	moduleFileExtensions: [...defaults.moduleFileExtensions, "vue"],
	testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, "cypress"],
};
