<template>
  <div><img src="image/line.png" alt="линия" id="line" /></div>
  <div id="footer">
    <div>© All Right Reserved. Toys.Hook. Игрушки, связанные с любовью</div>
    <div id="contact">
      <a
        href="https://www.instagram.com/toys.hook/?igshid=1fmqtwzm4y668"
        target="_blank"
        ><div id="first-co" class="source">
          <img
            src="image/instagram.png"
            alt="фотография"
            class="icon"
            id="inst"
          /></div
      ></a>
      <a href="https://vk.com/crocheting20" target="_blank"
        ><div class="source">
          <img src="image/vk.png" alt="фотография" class="icon" id="vk" /></div
      ></a>
      <div class="source">
        <img src="image/marker.png" alt="фотография" class="icon" />г. Самара
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  display: grid;
  grid-template-columns: 4fr 3fr;
  margin-bottom: 1.5em;
  font-family: "Cormorant Garamond", serif;
  padding-left: 2em;
  padding-top: 1em;
}
#line {
  padding-left: 2em;
  width: 100px;
  height: 10px;
}
.icon {
  width: 2em;
  height: 2em;
}
#contact {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
#first-co {
  grid-column-start: 2;
}
</style>