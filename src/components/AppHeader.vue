<template>
  <div class="container pt-5" id="head">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <a href="#about-me-block"
          ><button class="outline-none">обо мне</button></a
        >
      </div>
      <div class="col">
        <a href="#product-block"
          ><button type="button" class="outline-none">игрушки</button></a
        >
      </div>
      <div class="col" id="master-class">
        <a href="#masterclass-block">
          <button type="button" class="outline-none">мастер-класс</button></a
        >
      </div>
      <div class="col">
        <img src="image/toyshook.jpg" alt="типа логотип" id="logo" />
      </div>
      <div class="col">
        <a href="#footer"
          ><button type="button" class="outline-none">контакты</button></a
        >
      </div>
      <div class="col">
        <a href="#delivery-block"
          ><button type="button" class="outline-none">доставка</button></a
        >
      </div>
      <div class="col">
        <button
          type="button"
          class="outline-none"
          @click="$emit('show-change')"
        >
          корзина
        </button>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style scoped>
.outline-none {
  color: black;
  font-family: "Cormorant Garamond", serif;
  height: 100%;
  font-size: 1.1rem;
  text-decoration: none;
  text-decoration: none;
  background-color: transparent;
  border: none;
}
.outline-none:focus {
  outline: none;
}

#logo {
  width: 6em;
  height: 6em;
  text-align: center;
}
#master-class {
  width: 12%;
  flex: 0 0 auto;
}
</style>