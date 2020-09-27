// a simple proxy server server

const express = require("express");

const app = express();
require("./routes/itemsRoutes")(app);

if (process.env.NODE_ENV === "production") {
	// let express know where to server static content from
	app.use(express.static("client/dist"));

	// and where to serve staic files from
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`proxy server listening on port ${PORT}`);
