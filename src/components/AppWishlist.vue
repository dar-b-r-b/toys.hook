<template>
  <div id="demo">
    <transition name="slide-fade">
      <div class="overlay" v-if="show"></div>
    </transition>

    <transition name="slide-fade">
      <aside class="fix-right overflow-auto pb-4" v-if="show">
        <div class="img-close d-flex mb-3">
          <h2>КОРЗИНА</h2>
          <button class="outline-none" @click="$emit('show-change')">
            <img
              src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"
              class="close-btn"
            />
          </button>
        </div>
        <div class="wishlist-product">
          <template v-for="product in wishlist" :key="product">
            <div
              @mouseover="$emit('over', product, true)"
              @mouseleave="$emit('over', product, false)"
            >
              <img
                src="image/bear.jpg"
                height="16"
                width="16"
                alt="фотография"
                class="img-product"
              />
            </div>
            <div
              @mouseover="$emit('over', product, true)"
              @mouseleave="$emit('over', product, false)"
              class="des-text"
            >
              <p>
                {{ product.description.materials }},
                {{ product.description.size }} см
              </p>
              <h3 class="des-name" v-text="product.name"></h3>
            </div>
            <div
              @mouseover="$emit('over', product, true)"
              @mouseleave="$emit('over', product, false)"
              class="control-div"
            >
              <div class="counter d-flex" :class="{ collapse: !product.over }">
                <button
                  class="outline-none"
                  @click="$emit('substract-count', product)"
                >
                  -
                </button>
                <span v-text="product.count"></span>
                <button class="outline-none" @click="product.count++">+</button>
              </div>
              <div class="del d-flex" :class="{ collapse: !product.over }">
                <button
                  class="outline-none"
                  @click="$emit('delete-from-wish', i)"
                >
                  <img
                    src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"
                    class="del-btn"
                  />
                </button>
              </div>
              <div class="des-price d-flex">
                <span
                  v-text="product.price * product.count + ' &#8381;'"
                ></span>
              </div>
            </div>
          </template>
        </div>

        <div class="delivery-inform">
          <h4 class="mb-3">информация о доставке</h4>
          <div class="form-horizontal col-11">
            <div class="row">
              <div class="form-group col-12">
                <label for="full-name">ФИО получателя</label>
                <input class="form-control" type="text" id="full-name" />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-6">
                <label for="city">город</label>
                <input class="form-control" type="text" id="city" />
              </div>
              <div class="form-group col-6">
                <label for="street">улица</label>
                <input class="form-control" type="text" id="street" />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-3">
                <label for="build">дом</label>
                <input class="form-control" type="text" id="build" />
              </div>
              <div class="form-group col-3">
                <label for="apartment">квартира</label>
                <input class="form-control" type="text" id="apartment" />
              </div>
              <div class="form-group col-3">
                <label name="postcode">индекс</label>
                <input class="form-control" type="text" id="postcode" />
              </div>
            </div>
            <h5 class="pt-3">способ доставки</h5>
            <div class="row">
              <label class="d-block">
                <input
                  type="radio"
                  value="400"
                  name="radio-button"
                  v-model.number="deliveryCost"
                />
                <span class="px-1">почта (400 &#8381;)</span>
              </label>
              <label class="d-block">
                <input
                  type="radio"
                  value="300"
                  name="radio-button"
                  v-model.number="deliveryCost"
                />
                <span class="px-1">такси (300 &#8381;)</span>
              </label>
              <label class="d-block">
                <input
                  type="radio"
                  value="0"
                  name="radio-button"
                  v-model.number="deliveryCost"
                />
                <span class="px-1">самовывоз (бесценно)</span>
              </label>
              <hr class="my-3" />
              <div class="row mb-4">
                <div class="col-8"></div>
                <div class="col text-end">
                  <h3 class="col">итого</h3>
                  <h3 class="col">{{ sum }} &#8381;</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex justify-content-center">
                <button class="btn">Сделать заказ</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deliveryCost: 0,
    };
  },
  computed: {
    sum() {
      return (
        this.wishlist.reduce((aggr, x) => aggr + x.count * x.price, 0) +
        Number(this.deliveryCost)
      );
    },
  },
  props: ["wishlist", "show"],
};
</script>

<style scoped>
.btn {
  background-color: #eae6e1;
  color: #333333;
  font-weight: bold;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fix-right {
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  width: 40%;
  z-index: 2;
}
.overlay {
  position: absolute;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 1;
}
.wishlist-product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.outline-none {
  text-decoration: none;
  text-decoration: none;
  background-color: transparent;
  border: none;
}
.close-btn {
  width: 30px;
  height: 30px;
}
.img-close {
  text-align: right;
  margin-top: 1em;
  margin-right: 1em;
  justify-content: space-between;
}
.fix-right h2 {
  margin-left: 1em;
  margin-top: 0.5em;
}
.img-product {
  margin-left: 2.6em;
  margin-bottom: 1.5em;
  margin-top: 1.2em;
  height: 90px;
  width: 95px;
}

.des-text {
  padding-top: 2em;
}
.des-text :first-child {
  font-size: small;
  margin-bottom: 0;
}
.des-price {
  grid-column-start: 2;
  grid-row-start: 2;
  align-items: center;
}
.control-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.del {
  grid-column-start: 2;
  align-items: center;
}
.del-btn {
  width: 20px;
  height: 20px;
}
.counter {
  align-items: center;
}

.collapse {
  visibility: collapse;
}
.full-name {
  background-color: transparent;
}
.delivery-inform {
  margin-left: 2.6em;
  margin-top: 1.5em;
  display: grid;
  grid-template-rows: 4;
}

h4,
h2,
h5 {
  font-weight: bold;
}
.delivery-inform h6 {
  margin-top: 1rem;
}
</style>
