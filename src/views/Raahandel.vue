

<template>
  <div>
    <NavBar />
    <RaahandelHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <RaahandelAbout />
    <RaahandelHowDoIt />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import RaahandelHero from "@/components/Raahandel/RaahandelHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import RaahandelAbout from "@/components/Raahandel/RaahandelAbout.vue";
import RaahandelHowDoIt from "@/components/Raahandel/RaahandelHowDoIt.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RaahandelHero,
    RaahandelAbout,
    RaahandelHowDoIt,
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