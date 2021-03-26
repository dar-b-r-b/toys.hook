<template>
  <a href="#head" v-if="showScroll"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 172 172"
      style="fill: #000000"
      id="up-button"
    >
      <g
        fill="none"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#a49d92">
          <path
            d="M86,6.88c-43.63156,0 -79.12,35.48844 -79.12,79.12c0,43.63156 35.48844,79.12 79.12,79.12c43.63156,0 79.12,-35.48844 79.12,-79.12c0,-43.63156 -35.48844,-79.12 -79.12,-79.12zM115.95219,74.67219c-0.67187,0.67188 -1.54531,1.00781 -2.43219,1.00781c-0.88687,0 -1.76031,-0.33594 -2.43219,-1.00781l-21.64781,-21.64781v74.25562c0,1.90813 -1.54531,3.44 -3.44,3.44c-1.89469,0 -3.44,-1.53187 -3.44,-3.44v-74.25562l-21.64781,21.64781c-1.34375,1.34375 -3.52062,1.34375 -4.86437,0c-1.34375,-1.34375 -1.34375,-3.52062 0,-4.86437l27.52,-27.52c0.3225,-0.3225 0.69875,-0.56438 1.11531,-0.73906c0.84656,-0.34937 1.78719,-0.34937 2.63375,0c0.41656,0.17469 0.79281,0.41656 1.11531,0.73906l27.52,27.52c1.34375,1.34375 1.34375,3.52062 0,4.86437z"
          ></path>
        </g>
      </g></svg
  ></a>
  <app-header :show="show" @show-change="openWishlist"></app-header>
  <app-wishlist
    :show="show"
    :wishlist="wishlist"
    @show-change="show = !show"
    @over="over"
    @substract-count="substractCount"
    @delete-from-wish="deleteFromWish"
    :is-order-send="isOrderSend"
    @order-send="
      isOrderSend = true;
      wishlist.length = 0;
    "
  ></app-wishlist>
  <app-aboutme></app-aboutme>
  <app-products :products="products"></app-products>
  <app-delivery></app-delivery>
  <app-mc></app-mc>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppWishlist from "@/components/AppWishlist";
import AppAboutme from "@/components/AppAboutme";
import AppProducts from "@/components/AppProducts";
import AppDelivery from "@/components/AppDelivery";
import AppMc from "@/components/AppMc";
import AppFooter from "@/components/AppFooter";

export default {
  data() {
    return {
      showScroll: false,
      showWishlist: true,
      products: [
        {
          name: "мишка",
          description: {
            materials: "шерсть",
            weight: 54.21,
            size: 12,
          },
          price: 430,
          showButton: false,
        },
        {
          name: "зайка",
          description: {
            materials: "шерсть",
            weight: 24.11,
            size: 22,
          },
          price: 390,
        },
        {
          name: "коралина",
          description: {
            materials: "акрил",
            weight: 24.31,
            size: 26,
          },
          price: 670,
        },
      ],
      isOrderSend: false,
      wishlist: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.wishlist.push({ ...this.products[0] });
    this.wishlist.push({ ...this.products[1] });

    this.wishlist.forEach((x) => (x.count = 1));
  },
  methods: {
    openWishlist() {
      this.isOrderSend = false;
      this.show = !this.show;
    },
    handleScroll() {
      this.showScroll = window.scrollY > 400;
    },
    over(product, value) {
      product.over = value;
    },
    substractCount(product) {
      if (product.count !== 1) {
        product.count--;
      }
    },
    deleteFromWish(i) {
      this.wishlist.splice(i, 1);
    },
  },
  computed: {
    show: {
      get() {
        return this.showWishlist;
      },
      set(value) {
        document.querySelector("body").style.overflowY = value
          ? "hidden"
          : "auto";
        this.showWishlist = value;
      },
    },
  },
  components: {
    AppHeader,
    AppFooter,
    AppWishlist,
    AppAboutme,
    AppProducts,
    AppDelivery,
    AppMc,
  },
};
</script>

<style>
body {
  font-family: "Merriweather", serif;
}
#up-button {
  position: fixed;
  bottom: 80px;
  right: 50px;
  z-index: 9999;
  text-align: center;
  cursor: pointer;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #eae6e1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.form-control {
  padding: 0 0.75rem;
  box-shadow: none !important;
}
.form-control:focus {
  border-color: #ced4da !important;
}
</style>
