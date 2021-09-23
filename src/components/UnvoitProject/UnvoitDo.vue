<template>
  <div class="flex flex-col justify-center items-center">
    <img
      class="scroll-img w-5/12 h-auto pb-10 pt-32"
      :src="require('@/assets/unvoit-do.png')"
    />
  </div>
</template>

<style scoped>
@media only screen and (max-width: 650px) and (min-width: 10px) {
  img {
    width: 80%;
    padding-top: 70px;
  }
}
</style>