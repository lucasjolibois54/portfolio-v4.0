<template>
  <div class="bg-black">
    <div class="width-hero">
      <div class="flex flex-col justify-center items-center">
        <img
          class="header-img h-auto pb-10 pt-20"
          alt="Vue logo"
          src="../assets/portfolio-img-two.png"
        />
        <div>
          <h1 class="text-3xl">
            Learn more <span class="orange-text"> about me </span>
          </h1>
        </div>
        <img
          class="scroll-img h-auto pb-10 pt-10"
          alt="Vue logo"
          src="../assets/scroll-icon@2x.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.width-hero {
  max-width: 1400px;
  margin: 0 auto !important;
  float: none !important;
}

.header-img {
  width: 30%;
}

.scroll-img {
  width: 2%;
}

.orange-text {
  color: #d7793e;
}
@media only screen and (max-width: 450px) and (min-width: 300px) {
  .header-img {
    width: 50%;
  }

  .scroll-img {
    width: 5%;
  }
}
@media only screen and (max-width: 385px) and (min-width: 259px) {
  h1 {
    font-size: 22px;
    line-height: 27px;
  }
  .header-img {
    width: 54%;
  }
  .scroll-img {
    width: 5%;
  }
}
@media only screen and (max-width: 258px) and (min-width: 10px) {
  h1 {
    font-size: 20px;
    line-height: 25px;
  }
  .header-img {
    width: 54%;
  }
  .scroll-img {
    width: 5%;
  }
}
</style>
