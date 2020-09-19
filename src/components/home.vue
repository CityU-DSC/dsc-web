<template>
<div>
    <Carousel />
    <SectionOne />
    <Members />
    <SectionTwo />
    
</div>

</template>

<script>
import Carousel from "./home_components/carousel";
import SectionOne from './home_components/sectionOne';
import SectionTwo from './home_components/sectionTwo';
import Members from './home_components/members';

export default {
  name: "Home",

  components: {
    Carousel,
    SectionOne,
    SectionTwo,
    Members,
  },

  data: () => ({
    //
  }),
};
</script>

<style></style>
