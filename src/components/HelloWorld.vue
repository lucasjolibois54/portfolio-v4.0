<template>
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
      class="scroll-img h-auto pb-10 pt-10"
      alt="Vue logo"
      src="../assets/scroll-icon@2x.png"
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
</style>
