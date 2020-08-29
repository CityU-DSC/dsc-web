<template>
  <div>
    <AppBar />
    <Home />
    <Footer />
  </div>
</template>

<script>
import AppBar from "./components/header";
import Home from "./components/home";
import Footer from './components/footer';

export default {
  name: "App",

  components: {
    AppBar,
    Home,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
