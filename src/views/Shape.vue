

<template>
  <div>
    <NavBar :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <ShapeHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <ShapeMeaning />
    <ShapeWhatDid />
    <ShapeDone />
    <ShapeConclusion />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ShapeHero from "@/components/Shape-up/ShapeHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ShapeMeaning from "@/components/Shape-up/ShapeMeaning.vue";
import ShapeWhatDid from "@/components/Shape-up/ShapeWhatDid.vue";
import ShapeDone from "@/components/Shape-up/ShapeDone.vue";
import ShapeConclusion from "@/components/Shape-up/ShapeConclusion";

export default {
  name: "Home",
  components: {
    NavBar,
    ShapeHero,
    Footer,
    ShapeMeaning,
    ShapeWhatDid,
    ShapeDone,
    ShapeConclusion,
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