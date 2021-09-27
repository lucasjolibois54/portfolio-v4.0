<template>
  <div class="width-hero">
    <div class="flex flex-wrap overflow-hidden mt-36 mb-36 ml-10 mr-10 nam-div">
      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->
        <h2 class="text-2xl h2-pad pt-10">
          I starting off doing some brainstorming while sketching down some of
          ideas, and once I came up with a concept that I liked, I started
          designing it. I designed and created the logo using Adobe Illustrator
          which also gives the possibility to export it in vector graphic. This
          way the size of the image can be expanded without it losing any
          quality.
        </h2>
      </div>

      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->

        <div class="flex flex-col justify-center items-center">
          <img
            class="scroll-img w-11/12 h-auto"
            :src="require('@/assets/Xplorer-vid-two.gif')"
          />
        </div>
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
    padding-top: 0;
    text-align: center;
  }
  img {
    padding-right: 0;
    padding-left: 0;
  }
}

@media only screen and (max-width: 767) and (min-width: 651px) {
  h2 {
    font-size: 20px;
    padding-right: 5px;
    padding-left: 0px;
    line-height: 25px;
    text-align: center;
  }

  img {
    width: 80%;
    margin-top: 30px;
    padding-left: 5px;
    padding-right: 0px;
  }
}

@media only screen and (max-width: 1000px) and (min-width: 651px) {
  h2 {
    font-size: 20px;
    padding-right: 5px;
    line-height: 25px;
    padding-left: 2rem;
  }
  img {
    width: 80%;
    margin-top: 30px;
    padding-left: 5px;
    padding-top: 40px;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  h2 {
    font-size: 26px;
    padding-right: 5px;
    line-height: 33px;
    padding-left: 2px;
  }
  img {
    width: 80%;
    margin-top: 40px;
    padding-left: 5px;
    padding-top: 60px;
    padding-right: 3rem;
  }
}

@media only screen and (max-width: 1300px) and (min-width: 1200px) {
  h2 {
    font-size: 30px;
    padding-right: 0px;
    line-height: 33px;
    padding-top: 40px;
    padding-left: 3rem;
  }
  img {
    padding-top: 30px;
    padding-right: 3rem;
  }
}

@media only screen and (max-width: 1500px) and (min-width: 1300px) {
  h2 {
    font-size: 30px;
    padding-right: 0px;
    line-height: 33px;
    padding-top: 0px;
    padding-left: 8rem;
  }
  img {
    padding-right: 3rem;
  }
}
</style>