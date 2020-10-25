<template>
  <div>
    <ProjectCarousel />
    <ProjectSection />
  </div>
</template>

<script>
import ProjectSection from "./projectSection";
import ProjectCarousel from "./projectCarousel";

export default {
  name: "ShowProject",
  components: {
    ProjectSection,
    ProjectCarousel,
  },
  props: {
    projects: {
      type: Array,
      default: function() {
        return [
          {
            id: "1",
            title: "Flutter: Covid-19 App",
            githubUrl: "url for covid app",
          },
          {
            id: "2",
            title: "Vue: DSC website",
            githubUrl: "url for dsc website",
          },
          {
            id: "3",
            title: "Vue: Techhub",
            githubUrl: "url for techhub",
          },
        ];
      },
    },
  },
};
</script>

<style scoped></style>
