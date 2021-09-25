<template>
  <div class="width-hero">
    <div class="flex flex-wrap overflow-hidden mt-36 mb-36 ml-10 mr-10 nam-div">
      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->
        <h2 class="about-me text-4xl pl-20 pt-10">About me:</h2>
        <h2 class="about-text text-2xl pl-20 pt-10">
          Hi! My name is Lucas and I enjoy designing & creating things that live
          on the internet.

          <br />
          <br />

          My interest in informatics started back in 2017 when I decided To
          study computer science in highschool. Back then I was building &
          developing circuits with arduino. — All of that led me to where I am
          now!

          <br />
          <br />

          At the moment I am a student at Zealand Business Academy, studying
          Multimedia designer. I have developed at larger reach of interest
          within Web- development and graphic design. At the moment my biggest
          Interests are in UX & UI- design, web- development, logo design,
          Graphic design and things within that niche.
        </h2>
      </div>

      <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <!-- Column Content -->

        <div class="img-center flex flex-col justify-center items-center">
          <img
            class="scroll-img w-11/12 h-auto pr-20"
            :src="require('@/assets/Me.png')"
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
    padding-top: 0px;
  }

  .about-me {
    font-size: 30px;
    padding-bottom: 30px;
    padding-top: 0px;
  }

  img {
    padding-right: 0;
    padding-left: 0;
    padding-top: 50px;
  }
  .img-center {
    text-align: center;
  }
}
@media only screen and (max-width: 767px) and (min-width: 651px) {
  img {
    padding: 0px;
  }
  h2 {
    padding: 0px;
    padding-top: 15px;
  }
  .about-me {
    font-size: 30px;
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 1000px) and (min-width: 651px) {
  h2 {
    font-size: 15px;
    padding-right: 5px;
    line-height: 15px;
  }
  img {
    width: 80%;
    margin-top: 50px;
    padding-left: 5px;
  }
  .about-me {
    padding-bottom: 0px;
  }

  .about-text {
    padding-top: 10px;
  }
}

@media only screen and (max-width: 832px) and (min-width: 768px) {
  img {
    padding-top: 20px;
  }
  .about-me {
    font-size: 22px;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 832px) and (min-width: 768px) {
  .about-me {
    font-size: 22px;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 892px) and (min-width: 830px) {
  img {
    padding-top: 40px;
  }
  h2 {
    padding-top: 70px;
  }
  .about-me {
    font-size: 22px;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  h2 {
    font-size: 20px;
    padding-right: 5px;
    line-height: 23px;
  }
  .about-me {
    font-size: 30px;
  }
  img {
    width: 80%;
    margin-top: 100px;
    padding-left: 5px;
  }
}

@media only screen and (max-width: 1300px) and (min-width: 1200px) {
  h2 {
    font-size: 20px;
    padding-right: 0px;
    line-height: 26px;
    padding-top: 40px;
  }
  .about-me {
    font-size: 33px;
  }
}

@media only screen and (max-width: 1380px) and (min-width: 1300px) {
  h2 {
    font-size: 20px;
    padding-right: 0px;
    line-height: 26px;
    padding-top: 40px;
  }
  .about-me {
    font-size: 33px;
  }
}

@media only screen and (max-width: 980px) and (min-width: 900px) {
  h2 {
    font-size: 17px;
    padding-right: 0px;
    line-height: 20px;
    padding-top: 40px;
  }
  .about-me {
    font-size: 33px;
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