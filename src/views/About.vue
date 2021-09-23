

<template>
  <div>
    <NavBar />
    <UnvoitHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <UnvoitMeaning />
    <HowDoIt />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import UnvoitHero from "@/components/UnvoitProject/UnvoitHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import UnvoitMeaning from "@/components/UnvoitProject/UnvoitMeaning.vue";
import HowDoIt from "@/components/UnvoitProject/HowDoIt.vue";

export default {
  name: "Home",
  components: {
    UnvoitHero,
    NavBar,
    Footer,
    UnvoitMeaning,
    HowDoIt,
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