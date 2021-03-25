<template>
  <div class="container pt-5" id="about-me-block">
    <div class="row">
      <div class="col"></div>
      <div class="col-5 inform">
        <h1>Обо мне</h1>
        <p>
          Меня зовут Оксана, всю свою сознательную жизнь я каждый день посвящала
          творчеству. Четыре года назад я отдала свое сердце вязаным игрушкам.
          Мне безумно нравится воплощать свои идеи с помощью крючка и клубочков
          ниток. Каждая игрушка, связанная моими руками, наполнена любовью и
          вдохновением. Я буду рада поделиться ими с вами.
        </p>
      </div>
      <div class="col-4">
        <img src="image/aboutme.jpg" alt="обо мне" id="photo" />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#photo {
  height: 31rem;
  width: 23rem;
}
.inform {
  background-color: #eae6e1;
  height: 31rem;
  padding-top: 5em;
}

h1 {
  margin-bottom: 1.3rem;
  color: #696969;
  font-size: 2.3rem;
  font-weight: bold;
  padding-left: 1em;
}

p {
  font-family: "Ubuntu", serif;
  color: #696969;
  font-size: 1.1rem;
  padding-left: 2em;
  padding-right: 2em;
  text-align: justify;
}
</style>