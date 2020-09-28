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

const createWrapper = (item, provide) => {
	return shallowMount(Item, {
		propsData: {
			item,
		},
		provide,
	});
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
		const wrapper = createWrapper(item, provide);
		expect(wrapper.text()).toContain(item.name);
	});

	test("renders item name with escapes", () => {
		const wrapper = createWrapper(itemRange, provide);
		expect(wrapper.text()).toContain('test-item"');
	});

	test("renders item hero href", () => {
		const wrapper = createWrapper(item, provide);
		const img = wrapper.find("img");
		expect(img.attributes().src).toBe(item.hero.href);
	});

	test("renders regular price", () => {
		const wrapper = createWrapper(item, provide);
		expect(wrapper.text()).toContain("$1,549.00");
	});

	test("renders regular price range", () => {
		const wrapper = createWrapper(itemRange, provide);
		expect(wrapper.text()).toContain("$40.00 - $60.00");
	});

	test("renders selling price", () => {
		const wrapper = createWrapper(item, provide);
		expect(wrapper.text()).toContain("$1,316.65");
	});

	test("renders selling price range", () => {
		const wrapper = createWrapper(itemRange, provide);
		expect(wrapper.text()).toContain("$32.00 - $48.00");
	});

	test("check showModal is getting called when the hero image is clicked", () => {
		const wrapper = createWrapper(itemRange, provide);
		wrapper.find("img").trigger("click");
		expect(provide.showModal).toHaveBeenCalled();
	});
});
