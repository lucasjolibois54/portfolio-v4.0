<template>
  <div class="bg-gray-800">
    <div class="width-hero">
      <div class="bg-gray-800 text-white">
        <h2
          class="
            text-4xl
            flex flex-col
            justify-center
            items-center
            pr-36
            pl-36
            pt-16
            pb-1
          "
        >
          Conclusion
        </h2>

        <div>
          <h3
            class="
              text-2xl
              flex flex-col
              justify-center
              items-center
              pr-36
              pl-36
              pt-5
              pb-8
            "
          >
            This was a fun small project. I started this project not knowing
            what to expect, But im actually pretty happy about the results. The
            web design looks clean, Aad has colors and fonts should resonate
            with its audience. The colors gives some old school gym vibes, which
            was what I was going for.
          </h3>
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
  h3 {
    font-size: 17px;
    padding-right: 15px;
    padding-left: 15px;
  }
  h2 {
    font-size: 27px;
  }
}
</style>