<template>
  <div class="bg-gray-800">
    <div class="width-hero">
      <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
        <div class="container py-6">
          <hr class="h-px mt-6 bg-gray-700 border-none" />

          <div
            class="flex flex-col items-center justify-between mt-6 md:flex-row"
          >
            <div>
              <a href="#" class="text-xl font-bold hover:text-yellow-600"
                ><router-link to="/"
                  ><span>Lucas Bendix Jolibois</span>
                </router-link></a
              >
            </div>
            <div class="flex mt-4 md:m-0">
              <div class="-mx-4">
                <a class="px-4 text-sm hover:text-yellow-600"
                  ><router-link to="/"><span>Home </span> </router-link>
                </a>
                <a class="px-4 text-sm hover:text-yellow-600"
                  ><router-link to="/Projects"
                    ><span>Projects </span>
                  </router-link>
                </a>
                <a class="px-4 text-sm hover:text-yellow-600"
                  ><router-link to="/AboutMe"
                    ><span>About me </span>
                  </router-link>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-bendix-jolibois-9b3550201"
                  target="_blank"
                  class="px-4 text-sm hover:text-yellow-600"
                  >LinkedIn</a
                >
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.width-hero {
  max-width: 1400px;
  margin: 0 auto !important;
  float: none !important;
}
</style>

<!--   <h1 class="text-center text-lg font-bold lg:text-2xl">
        Join 31,000+ other and never miss <br />
        out on new tips, tutorials, and more.
      </h1>

      <div class="flex justify-center mt-6">
        <div class="bg-white rounded-lg">
          <div class="flex flex-wrap justify-between md:flex-row">
            <input
              type="email"
              class="
                m-1
                p-2
                appearance-none
                text-gray-700 text-sm
                focus:outline-none
              "
              placeholder="Enter your email"
            />
            <button
              class="
                w-full
                m-1
                p-2
                text-sm
                bg-gray-800
                rounded-lg
                font-semibold
                uppercase
                lg:w-auto
              "
            >
              subscribe
            </button>
          </div>
        </div>
        -->