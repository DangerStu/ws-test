import axios from "axios";

export const HTTP = axios.create({
	headers: {
		"Content-Type": `application/json`,
		"Cache-Control": "no-cache",
		Pragma: "no-cache",
		Expires: "0",
	},
});

export const apiWrapper = async (callBack) => {
	try {
		return await callBack();
		// return res;
	} catch (error) {
		if (error.errors) {
			const {
				data: { errors },
				status,
			} = error.response;
			return { errors, status };
		} else {
			return `${error}`;
		}
	}
};
