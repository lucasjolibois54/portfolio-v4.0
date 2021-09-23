

<template>
  <div>
    <NavBar />
    <UnvoitHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <UnvoitMeaning />
    <HowDoIt />
    <UnvoitDo />
    <UnvoitIDid />
    <UnvoitConclusion />
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
import UnvoitDo from "@/components/UnvoitProject/UnvoitDo.vue";
import UnvoitIDid from "@/components/UnvoitProject/UnvoitIDid.vue";
import UnvoitConclusion from "@/components/UnvoitProject/UnvoitConclusion.vue";

export default {
  name: "Home",
  components: {
    UnvoitHero,
    NavBar,
    Footer,
    UnvoitMeaning,
    HowDoIt,
    UnvoitDo,
    UnvoitIDid,
    UnvoitConclusion,
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