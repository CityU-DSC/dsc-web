<template>
  <div class="event_page">
    <EventCarousel v-if="events.length" :events="events"/>
    <EventDialog v-if='eventItemIsSelected' v-model="eventItemIsSelected" :eventItem="eventItemSelected"/>
    <div class="mt-5">
      <h1>
        Events
        <v-btn icon v-on:click="showBookmarkedOnly = !showBookmarkedOnly">
          <v-icon :style="{ color: showBookmarkedOnly ? 'pink' : 'grey' }"
          >mdi-heart
          </v-icon>
        </v-btn>
      </h1>
    </div>
    <b-container md-mv="4">
      <b-row>
        <b-col xs="12" sm="6" lg="4"
               v-for="event in events.filter(e => !showBookmarkedOnly || (showBookmarkedOnly && e.bookmarked))"
               :key="event.id">
          <EventCard
              class="MatCardAdvance"
              :event="event"
              @selectEvent="setEventItemSelected"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EventCard from './eventCard';
import EventDialog from './eventDialog';
import EventCarousel from './eventCarousel';
import {db} from "@/config/firebaseConfig";

export default {
  name: 'ShowEvents',
  components: {
    EventCard,
    EventCarousel,
    EventDialog,
  },
  data() {
    return {
      events: [],
      showBookmarkedOnly: false,
      eventItemSelected: undefined,
      eventItemIsSelected: false,
    };
  },
  methods: {
    setEventItemSelected(eventId) {
      this.eventItemSelected = this.events.filter(event => event.id === eventId)[0];
      this.eventItemIsSelected = true;
    },
    async getEvents() {
      let dbEvents = await db.collection("events").get();
      dbEvents.forEach(event => {
        let appData = event.data();
        this.events.push({
          id: appData.id,
          bookmarked: appData.bookmarked,
          canRegister: appData.canRegister,
          description: appData.description,
          fromDate: appData.fromDate,
          image: appData.image,
          isHighlighted: appData.isHighlighted,
          organizer: appData.organizer,
          organizerImage: appData.organizerImage,
          registerUrl: appData.registerUrl,
          title: appData.title,
          toDate: appData.toDate
        })
      })
    }
  },
  created() {
    this.getEvents();
  },
};
</script>

<style scoped>
.event_page {
  margin-top: 5rem;
}

.event_page h1 {
  text-align: center;
  /* font-family: 'Courier New'; */
  font-weight: 0;
  margin-top: 10px;
}

.event_page b-container {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
}

.event_page .MatCardAdvance {
  transition: 0.2s ease;
}
</style>
