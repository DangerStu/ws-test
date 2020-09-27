const priceMixin = {
	methods: {
		fullFormatPrice(label, item, type, symbol) {
			if (item.price) {
				return `${label} ${this.formatPrice(item.price[type], symbol)}`;
			} else if (item.priceRange) {
				return `${label} ${this.formatPriceRange(item.priceRange[type], symbol)}`;
			}
			return "";
		},

		formatPrice(amount, symbol) {
			return `${symbol}${parseFloat(amount).toFixed(2)}`;
		},

		formatPriceRange(amount, symbol) {
			return `${this.formatPrice(amount.low, symbol)} - ${this.formatPrice(amount.high, symbol)}`;
		},
	},
};

export { priceMixin };
