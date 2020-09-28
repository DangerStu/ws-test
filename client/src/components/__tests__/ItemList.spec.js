import Item from "../Item.vue";
import ItemList from "../ItemList.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();

const createWrapper = (stubs, items) => {
	return shallowMount(
		ItemList,
		{
			stubs,
			propsData: {
				items,
			},
		},
		localVue
	);
};

describe("ItemList.vue", () => {
	let stubs;
	beforeEach(() => {
		stubs = {
			"b-modal": true,
			"b-button": true,
			"b-form-input": true,
			"b-nav-form": true,
			"b-navbar-nav": true,
			"b-collapse": true,
			"b-navbar-toggle": true,
			"b-navbar": true,
		};
	});

	test("sanity test", () => {
		expect(true).toBe(true);
	});

	test("renders an Item for each item in itemsMock.groups", () => {
		const groups = [{}, {}, {}];

		const wrapper = createWrapper(stubs, groups);
		const items = wrapper.findAllComponents(Item);
		expect(items).toHaveLength(groups.length);
	});

	test("renders an Item with data for each item in itemsMock.groups", () => {
		const groups = [{}, {}, {}];

		const wrapper = createWrapper(stubs, groups);
		const items = wrapper.findAllComponents(Item);
		expect(items).toHaveLength(groups.length);
		items.wrappers.forEach((wrapper, i) => {
			expect(wrapper.props().item).toBe(groups[i]);
		});
	});
});
