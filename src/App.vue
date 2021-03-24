<template>
  <app-header :show="show" @show-change="show = !show"></app-header>
  <app-wishlist
    :show="show"
    :wishlist="wishlist"
    @show-change="show = !show"
    @over="over"
    @substract-count="substractCount"
    @delete-from-wish="deleteFromWish"
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
      wishlist: [],
    };
  },
  mounted() {
    this.wishlist.push({ ...this.products[0] });
    this.wishlist.push({ ...this.products[1] });

    this.wishlist.forEach((x) => (x.count = 1));
  },
  methods: {
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
