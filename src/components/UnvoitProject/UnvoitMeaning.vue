<template>
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
      <h2 class="text-3xl pr-40 pt-10">
        The meaning of this project, was to develop an invoice management SPA
        SaaS web application, to help businesses manage their invoices for their
        clients as well as to send invoices and payment requests.
      </h2>
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
  }
}
</style>