<template>
  <b-modal
    id="modal-details"
    ref="modal-details"
    role="dialog"
    hide-footer
    centered
    size="md"
    ok-variant="secondary"
    v-model="modelVisible"
  >
    <template v-slot:modal-header>
      <div class="container">
        <div class="row">
          <div class="col col-10 px-0 card-title mb-0" v-html="item.name"></div>

          <div class="col col-2">
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="hideModal()"
            >
              ×
            </button>
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
    <div class="container">
      <div class="row justify-content-center mb-6">
        <div v-if="item" class="mx-2">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            :controls="showControls"
            :indicators="false"
            background="#323232"
            :fade="true"
            style="text-shadow: 1px 1px 2px #333; max-width: 363px"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              v-for="(image, index) in allImages"
              :key="`${index}-${image.href}`"
              :img-src="image.href"
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <div
        v-if="item && item.images.length > 0"
        class="row justify-content-center my-3"
      >
        <div
          v-for="(image, index) in allImages"
          :key="`${index}-${image.href}`"
          class="col-3"
        >
          <img
            @click="selectSlide(index)"
            :src="image.href"
            :class="{ thumbs: true, 'thumbs-hilight': index === slide }"
          />
        </div>
      </div>
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

  data: () => ({
    slide: 0, // eslint-disable-line
    sliding: null,
  }),

  computed: {
    showControls() {
      return this.item ? this.item.images.length > 0 : false;
    },
    regularPrice() {
      return this.fullFormatPrice("Regular Price:", this.item, "regular");
    },
    salePrice() {
      return this.fullFormatPrice("Our Price:", this.item, "selling");
    },
    allImages() {
      if (this.item) {
        return [this.item.hero, ...this.item.images];
      }
      return [];
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
    selectSlide(slideId) {
      this.slide = slideId;
    },
  },

  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      if (modalId === "modal-details") {
        this.slide = 0;
      }
    });
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

.thumbs
	width: 100%;
	border: solid 2px #eeeeee 
	border-radius: 4px
	padding: 2px;
	margin: 4px auto;
	transition: border-color 0.5s ease;
.thumbs-hilight
	border-color: #bbb
</style>
