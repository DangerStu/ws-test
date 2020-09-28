import ItemModal from "../ItemModal.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BModal, BCarousel, BCarouselSlide } from "bootstrap-vue";

export const waitNT = (ctx) => new Promise((resolve) => ctx.$nextTick(resolve));
export const waitRAF = () => new Promise((resolve) => requestAnimationFrame(resolve));
const localVue = createLocalVue();

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
	images: [],
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
	images: [
		{
			href: "test-image-0-href",
		},
	],
};

const createWrapper = (item, stubs, modalVisible) => {
	return mount(
		ItemModal,
		{
			propsData: {
				item,
				modalVisible,
			},
			stubs,
		},
		localVue
	);
};

let stubs;
beforeEach(() => {
	stubs = {
		"b-modal": BModal,
		"b-button": true,
		"b-carousel-slide": BCarouselSlide,
		"b-carousel": BCarousel,
	};
});

describe("ItemModal.vue", () => {
	test("sanity test", () => {
		expect(true).toBe(true);
	});

	test("renders item name", async () => {
		const wrapper = createWrapper(item, stubs, true);

		expect(wrapper.vm).toBeDefined();
		await waitNT(wrapper.vm);

		expect(wrapper.text()).toContain(item.name);
	});

	test("renders item name with escapes", async () => {
		const wrapper = createWrapper(itemRange, stubs, true);

		expect(wrapper.vm).toBeDefined();
		await waitNT(wrapper.vm);

		expect(wrapper.text()).toContain('test-item"');
	});

	test("renders item with no images", async () => {
		const wrapper = createWrapper(item, stubs, true);

		expect(wrapper.vm).toBeDefined();
		await waitNT(wrapper.vm);

		const items = wrapper.findAll("img");
		expect(items).toHaveLength(1);
	});

	test("renders item with images", async () => {
		const wrapper = createWrapper(itemRange, stubs, true);

		expect(wrapper.vm).toBeDefined();
		await waitNT(wrapper.vm);

		const items = wrapper.findAll("img");
		expect(items).toHaveLength((1 + itemRange.images.length) * 2);
	});
});
