

<template>
  <div>
    <NavBar :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <XplorerHero :class="{ changecolor: scrollPosition > 70 }" class="home" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import XplorerHero from "@/components/Xplorer/XplorerHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    XplorerHero,
    Footer,
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