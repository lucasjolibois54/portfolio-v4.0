

<template>
  <div>
    <NavBar />
    <ProjectsSection />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectsSection from "@/components/AllProjects/ProjectsSection.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    ProjectsSection,
    NavBar,
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