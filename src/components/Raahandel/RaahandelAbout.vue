<template>
  <div class="width-hero">
    <div class="flex flex-wrap overflow-hidden mt-36 mb-36 ml-10 mr-10">
      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->
        <div class="flex flex-col justify-center items-center">
          <img
            class="scroll-img w-11/12 h-auto pl-20"
            :src="require('@/assets/UNVOIT-phone-side.gif')"
          />
        </div>
      </div>

      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->
        <h2 class="text-2xl pr-40 pt-10">
          Raahandel is an online danish marketplace with total ordering,
          delivery and payment of food from small and medium-sized producers to
          business customers within retail and HORECA. Raahandel needed to
          improve their user experience and the design of their web page in
          order to better fit to their custumers and brand.
        </h2>
      </div>
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
  h2 {
    padding-right: 0;
    padding-left: 0;
    font-size: 22px;
  }
  img {
    padding-right: 0;
    padding-left: 0;
  }
}

@media only screen and (max-width: 1000px) and (min-width: 651px) {
  h2 {
    font-size: 20px;
    padding-right: 5px;
    line-height: 25px;
  }
  img {
    width: 80%;
    margin-top: 30px;
    padding-left: 5px;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  h2 {
    font-size: 30px;
    padding-right: 5px;
    line-height: 33px;
  }
  img {
    width: 80%;
    margin-top: 40px;
    padding-left: 5px;
  }
}

@media only screen and (max-width: 1300px) and (min-width: 1200px) {
  h2 {
    font-size: 30px;
    padding-right: 0px;
    line-height: 33px;
    padding-top: 40px;
  }
}

@media (min-width: 1300) {
  h2 {
    font-size: 30px;
    padding-right: 0px;
    line-height: 33px;
    padding-top: 40px;
  }
}
</style>