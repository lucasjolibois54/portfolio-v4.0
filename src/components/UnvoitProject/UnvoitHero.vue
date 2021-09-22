<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <h1 class="text-3xl pt-40">
        A business based invoice management <br />
        web app using vue.js and tailwind
      </h1>
    </div>

    <img
      class="scroll-img w-5/12 h-auto pb-10 pt-10"
      :src="require('@/assets/unvoit-pc.png')"
    />
  </div>
</template>

<script>
</script>









<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-img {
  width: 17%;
}

.orange-text {
  color: #d7793e;
}
@media only screen and (max-width: 450px) and (min-width: 300px) {
  .header-img {
    width: 36%;
  }
}
</style>
