<template>
<div>
    <Carousel />
    <SectionOne />
    <Members />
<!--    <SectionTwo />-->
    <ContactUs />
</div>

</template>

<script>
import Carousel from "./home_components/carousel";
import SectionOne from './home_components/sectionOne';
// import SectionTwo from './home_components/sectionTwo';
import Members from './home_components/members';
import ContactUs from './home_components/contactUs';

export default {
  name: "Home",

  components: {
    Carousel,
    SectionOne,
    // SectionTwo,
    Members,
    ContactUs,
  },

  data: () => ({
    //
  }),
};
</script>

<style></style>
