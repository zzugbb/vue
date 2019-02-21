<template>
  <div id='banner' class="banner">
    <mt-swipe class="swiper">
      <mt-swipe-item class="swiper-item"><img src="../assets/1.jpg" /></mt-swipe-item>
      <mt-swipe-item class="swiper-item"><img src="../assets/2.gif"/></mt-swipe-item>
      <mt-swipe-item class="swiper-item"><img src="../assets/3.jpg"/></mt-swipe-item>
      <mt-swipe-item class="swiper-item"><img src="../assets/4.jpg" /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name : 'myBanner'
}
</script>

<style>
.banner {
  height: 150px;
  background-color: #e8e8e8;
  padding: 10px;
}

.swiper {
  width: 100%;
  height: 100%;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
