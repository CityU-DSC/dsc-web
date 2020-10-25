<template>
  <div>
    <!--
    <div style="margin-top: 10rem">
      <h2>This is the rfrfroijfroijfroijfr Project page</h2>
    </div>
    <div style="height: 100vh">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard  :project="project" />
      </div>
    </div>
    -->
    <ProjectSection />
  </div>
</template>

<script>
//import ProjectCard from "./projectCard";
import ProjectSection from "./projectSection";

export default {
  name: "ShowProject",
  components: {
    //ProjectCard,
    ProjectSection
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
