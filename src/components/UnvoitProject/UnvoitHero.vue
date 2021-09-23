<template>
  <div class="flex flex-col">
    <div>
      <div class="hero-margin ml-40">
        <h1 class="text-5xl pt-28 text-left">
          A business based invoice management <br />
          web app using vue.js and tailwind
        </h1>
        <div class="program-used flex flex-row space-x-4 pt-3">
          <p class="p-border">Vue.js</p>
          <p class="p-border">Tailwind</p>
          <p class="p-border">Firebase</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center">
      <img
        class="scroll-img w-5/12 h-auto pb-10 pt-10"
        :src="require('@/assets/UNVOIT-header-mockup.gif')"
      />
    </div>
  </div>
</template>

<script>
</script>









<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-img {
  width: 17%;
}

.p-border {
  border: 1px solid white;
  padding: 1px 10px 1px 10px;
  border-radius: 10px;
}
.orange-text {
  color: #d7793e;
}
@media only screen and (max-width: 450px) and (min-width: 300px) {
  .header-img {
    width: 36%;
  }
}
@media only screen and (max-width: 650px) and (min-width: 10px) {
  h1 {
    font-size: 20px;
    text-align: center;
  }
  .hero-margin {
    margin-left: 0;
  }

  .program-used {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
