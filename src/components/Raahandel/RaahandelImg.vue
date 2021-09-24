<template>
  <div class="width-hero">
    <div class="flex flex-col justify-center items-center">
      <img
        class="scroll-img w-5/12 h-auto mb-10 pt-32"
        :src="require('@/assets/mockuo-1-raahandel.png')"
      />
    </div>
  </div>
</template>

<style scoped>
.width-hero {
  max-width: 1400px;
  margin: 0 auto !important;
  float: none !important;
}
@media only screen and (max-width: 650px) and (min-width: 10px) {
  img {
    width: 80%;
    padding-top: 70px;
  }
}
</style>