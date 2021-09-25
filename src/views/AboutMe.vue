

<template>
  <div>
    <NavBar />
    <AboutHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <AboutMeSubHero />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutHero from "@/components/AboutHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import AboutMeSubHero from "@/components/AboutMe/AboutMeSubHero.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    AboutHero,
    AboutMeSubHero,
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
  border: black;
  transition: 1.5s;
}
</style>