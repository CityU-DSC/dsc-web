<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      indicators
      controls
      class="banner"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide 
        class="slider"
        v-for="slide in slides"
        :key="slide.id"
      >
        <div class="font">{{slide.title}}</div>
        <p>{{slide.subtitle}}</p>
        <template v-slot:img>
          <img
            class="d-block img-fluid image"
            :src="slide.image"
            alt="image slot"
          />
        </template>
        <div style="font-size: 2rem;">
          <b-icon
            icon="chevron-bar-down"
            class="rounded-circle p-2 more"
            variant="dark"
            animation="cylon-vertical"
          ></b-icon>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      slides: [
        {
          image: 'https://wallpapercave.com/wp/wp5315781.jpg',
          subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'CityU DSC',
        },
        {
          image: 'https://mocah.org/uploads/posts/503030-advice-advise.jpg',
          subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'CityU DSC',
        },
        {
          image: 'https://images2.alphacoders.com/698/698137.jpg',
          subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'CityU DSC',
        },
      ],
     }
  }
};
</script>

<style scoped>
.slider {
  max-height: 40rem;
}

.font {
  color: white;
  font-size: 90px;
  font-weight: 400;
  font-family: freemono, monospace;
}

.slider:before {
  content: "";
  display: block;
  background-color: #000;
  height: 100%;
  left: 0;
  opacity: 0.65;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.banner {
  margin-top: 11ex;
  max-width: 100%;
  max-height: auto;
}
.banner .image {
  min-width: 100%;
  max-height: 60%;
}

.more {
  background-color: white;
  opacity: 0.5;
}
</style>
