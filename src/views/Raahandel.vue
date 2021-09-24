

<template>
  <div>
    <NavBar />
    <YbrntHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <YbrntAbout />
    <HowDoItYbrnt />
    <YbrntDo />
    <YbrntMeaning />
    <YbrntConclusion />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import YbrntHero from "@/components/YBRNT/YbrntHero.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import YbrntAbout from "@/components/YBRNT/YbrntAbout.vue";
import HowDoItYbrnt from "@/components/YBRNT/HowDoItYbrnt.vue";
import YbrntDo from "@/components/YBRNT/YbrntDo.vue";
import YbrntMeaning from "@/components/YBRNT/YbrntMeaning.vue";
import YbrntConclusion from "@/components/YBRNT/YbrntConclusion.vue";

export default {
  name: "Home",
  components: {
    YbrntHero,
    NavBar,
    Footer,
    YbrntAbout,
    HowDoItYbrnt,
    YbrntDo,
    YbrntMeaning,
    YbrntConclusion,
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