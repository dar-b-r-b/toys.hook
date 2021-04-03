<template>
  <div class="container-fluid pt-5 pb-5 px-5" id="product-block">
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
                <option value="1">По убыванию цены</option>
                <option value="2">По возрастанию цены</option>
                <option value="3">По убыванию размера</option>
                <option value="4">По возрастанию размера</option>
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
                <option>Акрил</option>
                <option>Шерсть</option>
                <option>Хлопок</option>
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
            :key="product.id"
            class="mx-2 col-2 card mb-3"
            style="width: 15rem"
          >
            <div class="d-flex justify-content-center">
              <img
                :src="product.image"
                class="card-img-top mt-2"
                alt="Изображение продукта"
                style="width: 80%"
              />
            </div>

            <div class="card-body">
              <h5
                class="card-title text-center"
                v-text="product.description.name"
              ></h5>
              <p class="text-center">
                <span v-text="product.description.material"></span>,
                <span v-text="product.description.size"></span>&nbsp;см <br />
                <span v-text="product.description.price"></span>&nbsp;&#8381;
              </p>

              <p class="text-center">
                <button
                  type="button"
                  class="btn mt-3"
                  @click="$emit('add-to-wishlist', product)"
                  data-bs-toggle="modal"
                  data-bs-target="#added"
                >
                  Купить
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="added"
    tabindex="-1"
    aria-labelledby="addedToWishlist"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="d-flex justify-content-end me-2 mt-2">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p>Товар добавлен в корзину</p>
          <img
            src="https://img.icons8.com/ios/50/000000/ok--v1.png"
            style="size: 100%"
          />
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
        x.description.name.toUpperCase().includes(this.searchText.toUpperCase())
      );

      const priceMin = parseFloat(this.filterPriceMin);
      if (priceMin) {
        filtered = filtered.filter((x) => x.description.price >= priceMin);
      }
      const priceMax = parseFloat(this.filterPriceMax);
      if (priceMax) {
        filtered = filtered.filter((x) => x.description.price <= priceMax);
      }

      if (this.filterMaterials)
        filtered = filtered.filter(
          (x) =>
            x.description.material.toUpperCase() ===
            this.filterMaterials.toUpperCase()
        );
      switch (this.sortType) {
        case "1":
          return filtered.sort(
            (x, y) => y.description.price - x.description.price
          );
        case "2":
          return filtered.sort(
            (x, y) => x.description.price - y.description.price
          );
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
.btn {
  background-color: #eeebe6;
  color: #333333;
}
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
.form-select-sm {
  font-size: medium;
}
.col-4 {
  width: 33.3% !important;
}
</style>