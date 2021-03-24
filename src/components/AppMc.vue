<template>
<div id="masterclass-block">
    <div class="text">
        <h1>Упс!</h1>
        <p1>Пока нет ни одного мастер-класса</p1>
    </div>
    <div><img src="image/mc.png" alt="мастер-классы" id="mc"></div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#masterclass-block{
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 1fr;
    grid-gap: 10vw;
    font-family: 'Cormorant Garamond', serif;
    height: 550px;
    width: 100%;
    margin-top: 3em;
    color: #575757;
    }
    .text{
    grid-column-start: 2;
    padding-top: 7em;
}
h1{
    font-family: 'Cormorant Garamond', serif;
    font-weight: bold;
    font-size:50px;
    
}
p1{
    font-family: 'Cormorant Garamond', serif;
    font-size:24px;
}
</style>