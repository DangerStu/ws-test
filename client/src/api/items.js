import { HTTP, apiWrapper } from "./http";
const ITEMS_URL = "/api/items";
export const itemsApi = {
	fetch() {
		return apiWrapper(() =>
			HTTP({
				method: "get",
				url: ITEMS_URL,
			})
		);
	},
};
