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
          v-for="event in this.selectedEvents"
          :key="event.id"
          class="slider"
      >
        <div class="font">{{event.title}}</div>
        <p>{{event.description}}</p>
        <template v-slot:img>
          <img
              class="d-block img-fluid image"
              :src="event.image"
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
  props: {
    events: {
      type: Array,
    }
  },
  data(){
    return {
      selectedEvents: [],
    }
  },
  mounted(){
    this.selectedEvents = this.events.filter(event => event.isHighlighted);
  },
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
