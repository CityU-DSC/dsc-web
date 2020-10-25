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
          image: 'https://blogs.sas.com/content/graphicallyspeaking/files/2020/02/coronavirus_covid19_dashboard.png',
          subtitle: 'Real-time COVID-19 statistics tracking app',
          title: 'Flutter: Covid-19 App',
        },
        {
          image: 'https://media-exp1.licdn.com/dms/image/C511BAQGTeYNHljkt6A/company-background_10000/0?e=2159024400&v=beta&t=7v2Mz6JhYS6SczYHeI0Y2YzNNW5S7Qu_Yao-hiw7AuU',
          subtitle: 'The very website you\'re browsing right now :) It keeps tracks of past projects and upcoming events of the CityU Developer Student Clubs',
          title: 'CityU DSC Website',
        },
        {
          image: 'https://images2.alphacoders.com/698/698137.jpg',
          subtitle: 'A central website where people can share technological ideas, information on upcoming competitions, and cultivate uses of technology in entrepreneurship.',
          title: 'CityU Tech Hub',
        },
      ],
     }
  }
};
</script>

<style scoped>
.slider {
  max-height: 30rem;
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
