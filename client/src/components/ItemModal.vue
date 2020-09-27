<template>
	<b-modal id="modal-details" ref="modal-details" role="dialog" hide-footer centered size="md" ok-variant="secondary">
		<template v-slot:modal-header>
			<div class="container">
				<div class="row">
					<div class="col col-10 px-0 card-title mb-0" v-html="item.name"></div>
					<!-- <h5>Modal Header</h5> -->
					<div class="col col-2">
						<button type="button" class="close" aria-label="Close" @click="hideModal()">×</button>
					</div>
				</div>
				<div class="row">
					<div class="col px-0 card-text small">
						<strong>{{ regularPrice }}</strong>
					</div>
				</div>
				<div class="row">
					<div class="col px-0 card-text text-danger small">
						<strong>{{ salePrice }}</strong>
					</div>
				</div>
			</div>
		</template>
		<div class="row justify-content-center mb-6 ">
			<div v-if="item" class="mx-2 pb-5" style="background-color: lightslategray;">
				<b-carousel
					id="carousel-1"
					v-model="slide"
					:interval="4000"
					:controls="showControls"
					:indicators="showControls"
					background="#323232"
					:fade="true"
					style="text-shadow: 1px 1px 2px #333;max-width:363px;"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
				>
					<b-carousel-slide :key="item.hero.href" :img-src="item.hero.href"> </b-carousel-slide>

					<b-carousel-slide v-for="image in item.images" :key="image.href" :img-src="image.href"> </b-carousel-slide>
				</b-carousel>
			</div>

			<!-- <div class="row">
			<p class="mt-4">
				Slide #: {{ slide }}<br />
				Sliding: {{ sliding }}
			</p>
		</div> -->
		</div>
	</b-modal>
</template>

<script>
	import { priceMixin } from "./mixins/price";
	export default {
		name: "ItemModal",

		props: {
			item: Object,
			modelVisible: Boolean,
		},

		mixins: [priceMixin],

		watch: {
			modelVisible(visible) {
				if (visible) {
					this.$refs["modal-details"].show();
				} else {
					this.$refs["modal-details"].hide();
				}
			},
		},

		data: () => ({
			slide: 0, // eslint-disable-line
			sliding: null,
		}),
		computed: {
			showControls() {
				return this.item ? this.item.images.length > 0 : false;
			},
			regularPrice() {
				return this.fullFormatPrice("Regular Price:", this.item, "regular", "$");
			},
			salePrice() {
				return this.fullFormatPrice("Our Price:", this.item, "selling", "$");
			},
		},
		methods: {
			onSlideStart() {
				this.sliding = true;
			},
			onSlideEnd() {
				this.sliding = false;
			},
			showModal() {
				this.$emit("changeVisible", true);
			},
			hideModal() {
				this.$emit("changeVisible", false);
			},
		},
	};
</script>

<style lang="sass">
	.carousel-control-next,
	.carousel-control-prev
		filter: invert(100%);

	.carousel-indicators
		bottom: -50px !important;
		li
			width: 10px !important;
			height: 10px !important;
			border-radius: 100%;
			background-color: black !important;
			// padding: 0 5px;
			margin: 0 7px !important;
</style>
