<template>
  <div :class="{ changecolor: scrollPosition > 70 }" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AboutMeHome />
    <ProjectCards />
    <ContactMe />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AboutMeHome from "@/components/AboutMeHome.vue";
import ProjectCards from "@/components/ProjectCards.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AboutMeHome,
    ProjectCards,
    ContactMe,
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
}

.changecolor {
  background-color: white;
  transition: 1.5s;
}
</style>