<template>
  <div>
    <NavBar />
    <HelloWorld
      :class="{ changecolor: scrollPosition > 70 }"
      class="home"
      msg="Welcome to Your Vue.js App"
    />
    <AboutMeHome />
    <ProjectCards />
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
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AboutMeHome,
    ProjectCards,
    ContactMe,
    NavBar,
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
  color: black;
  transition: 1.5s;
}
</style>