import Item from "../Item.vue";
import { shallowMount } from "@vue/test-utils";

const item = {
	name: "test-item",
	hero: {
		href: "test-hero-href",
	},
	price: {
		regular: 1549,
		selling: 1316.65,
		type: "special",
	},
};

const itemRange = {
	name: "test-item&quot;",
	hero: {
		href: "test-hero-href",
	},
	priceRange: {
		regular: {
			high: 60,
			low: 40,
		},
		selling: {
			high: 48,
			low: 32,
		},
		type: "special",
	},
};

describe("Item.vue", () => {
	let provide;

	beforeEach(() => {
		provide = {
			showModal: jest.fn(),
			hideModal: jest.fn(),
		};
	});

	test("sanity test", () => {
		expect(true).toBe(true);
	});

	test("renders item name", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: item,
			},
			provide,
		});
		expect(wrapper.text()).toContain(item.name);
	});

	test("renders item name with escapes", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: itemRange,
			},
			provide,
		});
		expect(wrapper.text()).toContain('test-item"');
	});
	test("renders item hero href", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: item,
			},
			provide,
		});
		const img = wrapper.find("img");
		expect(img.attributes().src).toBe(item.hero.href);
	});

	test("renders regular price", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: item,
			},
			provide,
		});
		expect(wrapper.text()).toContain("$1549.00");
	});

	test("renders regular price range", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: itemRange,
			},
			provide,
		});
		expect(wrapper.text()).toContain("$40.00 - $60.00");
	});

	test("renders selling price", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: item,
			},
			provide,
		});
		expect(wrapper.text()).toContain("$1316.65");
	});

	test("renders selling price range", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: itemRange,
			},
			provide,
		});
		expect(wrapper.text()).toContain("$32.00 - $48.00");
	});

	test("check showModal is getting called when the hero image is clicked", () => {
		const wrapper = shallowMount(Item, {
			propsData: {
				item: itemRange,
			},
			provide,
		});

		wrapper.find("img").trigger("click");
		expect(provide.showModal).toHaveBeenCalled();
	});
});