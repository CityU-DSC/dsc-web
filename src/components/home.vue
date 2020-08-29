<template>
<div>
    <Carousel />
    <SectionOne />
    <Members />
    <SectionTwo />
    
</div>

</template>

<script>
import Carousel from "./home/carousel";
import SectionOne from './home/sectionOne';
import SectionTwo from './home/sectionTwo';
import Members from './home/members';

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
