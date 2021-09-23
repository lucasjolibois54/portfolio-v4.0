<template>
  <div class="flex flex-wrap overflow-hidden mt-36 mb-36 ml-10 mr-10 nam-div">
    <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
      <!-- Column Content -->
      <h2 class="text-3xl pl-40 pt-10">
        I developed the web application Using Vue.js, and on top of that i Added
        a CSSS library called tailwind and used firebase for the sign up
        fuctionality on the SaaS we app.
      </h2>
    </div>

    <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
      <!-- Column Content -->

      <div class="flex flex-col justify-center items-center">
        <img
          class="scroll-img w-11/12 h-auto pr-20"
          :src="require('@/assets/UNVOIT-phone-side.gif')"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
@media only screen and (max-width: 650px) and (min-width: 10px) {
  h2 {
    padding-right: 0;
    padding-left: 0;
    font-size: 22px;
  }
  img {
    padding-right: 0;
    padding-left: 0;
    margin-top: 50px;
  }
  .nam-div {
    margin-top: 90px;
  }
}
</style>