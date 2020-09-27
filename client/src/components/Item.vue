<template>
  <div class="card mb-2 border-0 mx-auto">
    <div class="hero-wrapper" @click="showModal(item)" :aria-pressed="false">
      <img
        class="card-img-top hero"
        :src="item.hero.href"
        :alt="item.name"
        :rel="item.hero.rel"
      />
    </div>
    <div class="card-body pt-1">
      <div class="card-title small mb-0" v-html="item.name"></div>
      <div class="card-text small">
        <strong>{{ regularPrice }}</strong>
      </div>
      <div class="card-text text-danger small">
        <strong>{{ salePrice }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { priceMixin } from "./mixins/price";

export default {
  name: "item",

  props: {
    item: Object,
  },

  mixins: [priceMixin],

  computed: {
    regularPrice() {
      return this.fullFormatPrice("Regular Price:", this.item, "regular");
    },
    salePrice() {
      return this.fullFormatPrice("Our Price:", this.item, "selling");
    },
  },

  inject: ["showModal", "hideModal"],
};
</script>
<style lang="sass">
.card
	max-width: 366px;
	margin: inherit auto

	.hero-wrapper
		overflow: hidden;

		img:hover
			transform: scale(1.05, 1.05);
			transition-duration: 500ms;
			transition-timing-function: ease-out;
			cursor: pointer;

			img
				transform: scale(1, 1);
				transition-duration: 500ms;
				// transition-timing-function: ease-out;
				width: 100%;
				max-width: 366px;
</style>
