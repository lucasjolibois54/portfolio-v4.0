<template>
  <div class="bg-farve">
    <div class="width-hero flex flex-col">
      <div>
        <div class="hero-margin ml-40">
          <h1 class="text-5xl pt-28 text-left">
            Poster webshop through WordPress, <br />
            using custom styling code & local server.
          </h1>
          <div class="program-used flex flex-row space-x-4 pt-3">
            <p class="p-border">MAMP</p>
            <p class="p-border">WordPress</p>
            <p class="p-border">SQL</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img
          class="scroll-img w-5/12 h-auto pb-10 pt-10"
          :src="require('@/assets/YBRNT-hero-one-2.gif')"
        />
      </div>
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
.bg-farve {
  background-color: black;
}
.width-hero {
  max-width: 1300px;
  margin: 0 auto !important;
  float: none !important;
}

.p-border {
  border: 1px solid white;
  padding: 1px 10px 1px 10px;
  border-radius: 10px;
}
.orange-text {
  color: #d7793e;
}

@media only screen and (max-width: 650px) and (min-width: 10px) {
  h1 {
    font-size: 20px;
    text-align: center;
  }
  .hero-margin {
    margin-left: 0;
  }

  img {
    width: 80%;
  }

  .program-used {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  p {
    font-size: 14px;
  }
}
@media only screen and (max-width: 900px) and (min-width: 651px) {
  h1 {
    font-size: 30px;
  }
}
</style>
