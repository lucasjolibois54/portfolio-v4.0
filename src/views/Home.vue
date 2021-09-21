<template>
  <div :class="{ changecolor: scrollPosition > 100 }" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AboutMeHome />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AboutMeHome from "@/components/AboutMeHome.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AboutMeHome,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style scoped>
.home {
  background-color: #000;
  color: white;
}

.changecolor {
  background-color: white;
  color: #000;
  transition: 1.5s;
}
</style>