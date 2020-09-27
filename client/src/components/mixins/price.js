const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2,
});

const priceMixin = {
	methods: {
		fullFormatPrice(label, item, type) {
			if (item.price) {
				return `${label} ${this.formatPrice(item.price[type])}`;
			} else if (item.priceRange) {
				return `${label} ${this.formatPriceRange(item.priceRange[type])}`;
			}
			return "";
		},

		formatPrice(amount) {
			return formatter.format(amount);
		},

		formatPriceRange(amount) {
			return `${this.formatPrice(amount.low)} - ${this.formatPrice(amount.high)}`;
		},
	},
};

export { priceMixin };
