import Vue from "vue";
import App from "./App.vue";
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

	if (status === 200) {
		window.items = data;
	} else {
		window.items = [];
	}
	new Vue({
		render: (h) => h(App),
	}).$mount("#app");
});
