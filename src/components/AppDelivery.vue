<template>
  <div id="delivery-block">
    <div id="delivery" class="position">
      <img src="image/taxi.png" alt="фотография" id="taxiimg" />
    </div>
    <div class="position">
      <img src="image/postbox.png" alt="фотография" id="postboximg" />
    </div>
    <div class="position">
      <img src="image/shop.png" alt="фотография" id="shopimg" />
    </div>
    <div id="taxi" class="text-position font">
      <h2>На такси</h2>
    </div>
    <div class="text-position font">
      <h2>Почтой</h2>
    </div>
    <div class="text-position font">
      <h2>Самовывозом</h2>
    </div>
    <div id="description-taxi" class="description-font">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        reiciendis velit omnis illo quidem reprehenderit.
      </p>
    </div>
    <div class="description-font">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        reiciendis velit omnis illo quidem reprehenderit.
      </p>
    </div>
    <div class="description-font">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        reiciendis velit omnis illo quidem reprehenderit.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#delivery-block {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  grid-template-rows: 2fr 1fr 5fr;
  background-color: #f2f2f2;
  height: 550px;
  width: 100%;
  color: #333333;
  font-family: "Cormorant Garamond", serif;
}
#delivery,
#taxi,
#description-taxi {
  grid-column-start: 2;
  grid-column-end: 3;
}
.position {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
#taxiimg,
#postboximg,
#shopimg {
  grid-column-start: 2;
  grid-row-start: 3;
  padding-left: 1em;
}
.text-position {
  text-align: center;
  padding-top: 1em;
}
.font {
  font-size: 30px;
}
.description-font {
  font-size: 17px;
  padding-left: 1em;
  padding-top: 1em;
  text-align: center;
}
</style>