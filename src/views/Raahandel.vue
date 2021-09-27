

<template>
  <div>
    <NavBar :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <RaahandelHero :class="{ changecolor: scrollPosition > 70 }" class="home" />
    <RaahandelAbout />
    <RaahandelHowDoIt />
    <RaahandelImg />
    <RaahandelDid />
    <RaahandelConclusion />
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
import RaahandelImg from "@/components/Raahandel/RaahandelImg.vue";
import RaahandelDid from "@/components/Raahandel/RaahandelDid.vue";
import RaahandelConclusion from "@/components/Raahandel/RaahandelConclusion.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RaahandelHero,
    RaahandelAbout,
    RaahandelHowDoIt,
    RaahandelImg,
    RaahandelDid,
    RaahandelConclusion,
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