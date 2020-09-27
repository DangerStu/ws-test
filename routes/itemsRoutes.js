const { response } = require("express");
const ITEMS_URL = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
const axios = require("axios");
module.exports = (app) => {
	app.get("/api/items", async (req, res) => {
		try {
			let response = await axios.get(ITEMS_URL);
			if (response.status === 200) {
				return res.status(response.status).send(response.data);
			} else {
				res.status(response.status).json(jsonError(response.status, response.statusText));
			}
		} catch (error) {
			let { response } = error;
			res.status(response.status).json(jsonError(response.status, response.statusText));
		}
	});

	const jsonError = (status, error) => ({ status, error, code: status, message: error });
};
