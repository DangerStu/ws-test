<template>
	<div>
		<b-navbar id="nav-bar" toggleable="lg" type="light" :sticky="true">
			<img class="logo-image" src="https://assets.wsimgs.com/wsimgs/ab/images/i/202039/0014/images/common/logo.svg" alt="Williams Sonoma" />

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form class="mt-4 mt-lg-0">
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<div class="container">
			<div class="row">
				<div v-for="item in items" :key="item.id" class="col-12 col-md-6 col-lg-4 ">
					<Item :item="item"></Item>
				</div>
			</div>
		</div>
		<div>
			<ItemModal :item="selectedItem" :modelVisible="modelVisible" @changeVisible="setModalVisible" />
		</div>
	</div>
</template>

<script>
	import Item from "./Item";
	import ItemModal from "./ItemModal";

	export default {
		name: "ItemList",
		components: { Item, ItemModal }, // eslint-disable-line
		data: () => ({
			items: [],
			selectedItem: null,
			modelVisible: false,
		}),
		computed: {
			selectedItemName() {
				return this.selectedItem ? this.selectedItem.name : "";
			},
		},
		methods: {
			showModal(item) {
				this.selectedItem = item;
				this.setModalVisible(true);
			},
			hideModal() {
				this.setModalVisible(false);
			},
			setModalVisible(value) {
				this.modelVisible = value;
			},
		},
		created() {
			this.items = window.items.groups;
		},
		provide: function() {
			return { showModal: this.showModal, hideModal: this.hideModal };
		},
	};
</script>

<style lang="sass">
	.navbar
		background-color: var(--white);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
</style>
<style></style>
