<template>
  <div>
    <img class="header-img" alt="Vue logo" src="../assets/header-1.png" />
    <div>
      <h1>
        My name is <span class="orange-text"> Lucas </span> & I’m a <br />
        <span class="orange-text"> multimedia designer </span> student
      </h1>
    </div>
    <img class="scroll-img" alt="Vue logo" src="../assets/scroll-icon@2x.png" />
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-img {
  margin-top: 10rem;
  width: 15%;
  height: auto;
}

.orange-text {
  color: #d7793e;
}

h1 {
  color: #fff;
  font-size: 40px;
  padding-bottom: 100px;
}

.scroll-img {
  width: 2%;
  height: auto;
  padding-bottom: 200px;
}

@media only screen and (max-width: 990px) and (min-width: 771px) {
}
</style>
