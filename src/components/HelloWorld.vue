<template>
  <div class="bg-black">
    <div class="width-hero">
      <div class="flex flex-col justify-center items-center">
        <img
          class="header-img h-auto pb-10 pt-20"
          alt="Vue logo"
          src="../assets/header-1.png"
        />
        <div>
          <h1 class="text-3xl">
            My name is <span class="orange-text"> Lucas </span> & I’m a <br />
            <span class="orange-text"> multimedia designer </span> student
          </h1>
        </div>
        <img
          class="scroll-img h-auto pb-20 pt-10"
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
  width: 17%;
  padding-top: 160px;
}

.scroll-img {
  width: 2%;
}

.orange-text {
  color: #d7793e;
}
@media only screen and (max-width: 450px) and (min-width: 300px) {
  .header-img {
    width: 36%;
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
    width: 44%;
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
    width: 44%;
  }
  .scroll-img {
    width: 5%;
  }
}
</style>
