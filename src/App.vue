<template>
  <div>
    <AppBar />
    <div class=''>
      <router-view></router-view>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import AppBar from "./components/header";
import Footer from "./components/footer";

export default {
  name: "App",

  components: {
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.container-fluid {
  margin: 0 auto -50px;
  min-height: 100%;
}
</style>
