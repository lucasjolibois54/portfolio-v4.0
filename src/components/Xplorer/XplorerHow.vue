<template>
  <div class="width-hero">
    <h3 class="text-6xl pb-20 mt-48">
      HOW DID I DO IT? <br />
      HOW DID I DO IT? <br />
      HOW DID I DO IT? <br />
      HOW DID I DO IT?
    </h3>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@900&family=Roboto:wght@900&family=Work+Sans:wght@900&display=swap");
</style>

<style scoped>
.width-hero {
  max-width: 1400px;
  margin: 0 auto !important;
  float: none !important;
}

h3 {
  font-family: "Kanit", sans-serif;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #d7793e;
}

@media only screen and (max-width: 650px) and (min-width: 10px) {
  h3 {
    font-size: 38px;
    margin-top: 0;
  }
}
</style>