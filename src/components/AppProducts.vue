<template>
  <div class="container-fluid pt-5 pb-5">
    <div class="row">
      <div class="col-3 filter">
        <div class="form-horizontal">
          <div class="row">
            <div class="form-group">
              <div class="search-icon">
                <input
                  type="text"
                  class="form-control"
                  v-model="searchText"
                  id="search"
                  placeholder="Хочу найти"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <select
                class="form-select form-select-sm form-control"
                aria-label=".form-select-sm example"
                v-model="sortType"
                id="sort"
              >
                <option selected value="0">Сортировать</option>
                <option value="1">по убыванию цены</option>
                <option value="2">по возрастанию цены</option>
                <option value="3">по убыванию размера</option>
                <option value="4">по возрастанию размера</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="form-group mt-2">
              <span>Цена</span>
              <br />
              <input
                type="text"
                class="form-control me-2 col-4 d-inline-block"
                v-model="filterPriceMin"
              />
              <span style="text-align: center" class="col-2">до</span>
              <input
                type="text"
                class="form-control mx-2 col-4 d-inline-block"
                v-model="filterPriceMax"
              />
              <span>руб.</span>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="sort"
                v-model="filterMaterials"
              >
                <option selected value="">Материал</option>
                <option>акрил</option>
                <option>шерсть</option>
                <option>хлопок</option>
              </select>
            </div>
          </div>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-light mt-3"
              @click="resetFilter()"
            >
              Сбросить параметры
            </button>
          </div>
        </div>
      </div>

      <div class="col-9 px-5">
        <div class="row">
          <div
            v-for="product in computedProducts"
            :key="product"
            class="mx-2 col-2 card"
            style="width: 15rem"
          >
            <img class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" v-text="product.name"></h5>
              <p>
                <span v-text="product.description.materials"></span>,
                <span v-text="product.description.size"></span>&nbsp;см
              </p>
              <span v-text="product.price"></span>&nbsp;руб.
              <p class="top">
                <button type="button" class="btn btn-light">Купить</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      sortType: 0,
      filterPriceMin: "",
      filterPriceMax: "",
      filterMaterials: "",
    };
  },
  props: ["products"],
  methods: {
    resetFilter() {
      this.searchText = "";
      this.sortType = 0;
      this.filterPriceMin = "";
      this.filterPriceMax = "";
      this.filterMaterials = "";
    },
  },
  computed: {
    computedProducts() {
      let filtered = this.products.filter((x) =>
        x.name.toUpperCase().includes(this.searchText.toUpperCase())
      );

      const priceMin = parseFloat(this.filterPriceMin);
      if (priceMin) {
        filtered = filtered.filter((x) => x.price >= priceMin);
      }
      const priceMax = parseFloat(this.filterPriceMax);
      if (priceMax) {
        filtered = filtered.filter((x) => x.price <= priceMax);
      }

      if (this.filterMaterials)
        filtered = filtered.filter(
          (x) =>
            x.description.materials.toUpperCase() ===
            this.filterMaterials.toUpperCase()
        );
      switch (this.sortType) {
        case "1":
          return filtered.sort((x, y) => y.price - x.price);
        case "2":
          return filtered.sort((x, y) => x.price - y.price);
        case "3":
          return filtered.sort(
            (x, y) => y.description.size - x.description.size
          );
        case "4":
          return filtered.sort(
            (x, y) => x.description.size - y.description.size
          );

        default:
          return filtered;
      }
    },
  },
};
</script>

<style scoped>
.card-text {
  font-size: large;
}
.filter {
  border-right: 2px solid rgb(48, 48, 48);
  text-align: left;
  font-size: 1rem;
}
#search {
  height: 2em;
  padding-left: 2em;
}
#sort {
  margin-top: 1.5em;
  height: 2.4em;
}
.search-icon::before {
  content: "";
  display: block;
  position: absolute;
  height: 21px;
  width: 21px;
  background: url(https://img.icons8.com/ios/64/000000/search--v1.png) no-repeat;
  background-size: contain;
  margin: 0.35em;
}
.top {
  margin-top: 1em;
}
.form-select-sm {
  font-size: medium;
}
.col-4 {
  width: 33.3% !important;
}
</style>