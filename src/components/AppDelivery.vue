<template>
  <div class="container-fluid" id="delivery-block">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-3 text-center">
        <img src="image/taxi.png" alt="Такси" />
      </div>
      <div class="col-3 text-center">
        <img src="image/postbox.png" alt="Почта" />
      </div>
      <div class="col-3 text-center">
        <img src="image/shop.png" alt="Самовывоз" />
      </div>
      <div class="col-2"></div>

      <div class="col-3">
        <h2>На такси</h2>
      </div>
      <div class="col-3">
        <h2>Почтой</h2>
      </div>
      <div class="col-3">
        <h2>Самовывозом</h2>
      </div>
      <div class="col-2"></div>
      <div class="col-3">
        <p>
          Доставка осуществляется в советский, ленинский, кировский,
          промышленный, районы Самары.
        </p>
      </div>
      <div class="col-3">
        <p>
          Доставка осуществляется голубиной почтой только по царской России.
        </p>
      </div>
      <div class="col-3">
        <p>
          Также мои игрушки есть в магазине "Твоя полка" по адресу г. Самара,
          ул. Ленинградская, 55, полочка №46.
        </p>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background-color: #eae6e1;
  margin: 0;
  height: 30rem;
  padding-top: 8rem;
}
img {
  text-align: center;
}
h2 {
  text-align: center;
  color: #333333;
}
p {
  text-align: justify;
  padding: 0 1em;
}
</style>