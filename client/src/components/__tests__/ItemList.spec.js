import Item from "../Item.vue";
import ItemList from "../ItemList.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
//import { BootstrapVue, ModalPlugin, NavbarPlugin, FormPlugin, FormInputPlugin, ButtonPlugin } from "bootstrap-vue";
const localVue = createLocalVue();

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

	test("renders an Item for each item in window.items.groups", () => {
		window.items = { groups: [{}, {}, {}] };
		const wrapper = shallowMount(ItemList, { stubs }, localVue);
		const items = wrapper.findAllComponents(Item);
		expect(items).toHaveLength(window.items.groups.length);
	});

	test("renders an Item with data for each item in window.items.groups", () => {
		window.items = { groups: [{}, {}, {}] };
		const wrapper = shallowMount(ItemList, { stubs }, localVue);
		const items = wrapper.findAllComponents(Item);
		expect(items).toHaveLength(window.items.groups.length);
		items.wrappers.forEach((wrapper, i) => {
			expect(wrapper.props().item).toBe(window.items.groups[i]);
		});
	});
});
