import Vue from "vue";
// import App from "./App.vue";
import ItemList from "./components/ItemList";
import { itemsApi } from "./api/items";
import { ModalPlugin, NavbarPlugin, FormPlugin, FormInputPlugin, ButtonPlugin, CarouselPlugin } from "bootstrap-vue";
import "./custom.scss";
Vue.config.productionTip = false;
Vue.use(ModalPlugin);
Vue.use(NavbarPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);
Vue.use(CarouselPlugin);

itemsApi.fetch().then(({ status, data }) => {
	console.log(status, data);
	let items;
	if (status === 200) {
		items = data.groups;
	} else {
		items = [];
	}
	new Vue({
		data: {
			items,
		},
		render: (h) => h(ItemList, { props: { items } }),
	}).$mount("#app");
});
