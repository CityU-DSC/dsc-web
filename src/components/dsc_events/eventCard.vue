<template>
  <v-container>
	<!--<EventDialog v-model="show"/>-->
    <v-card
      max-width="344"
      class="mx-auto"
      style="position: relative; overflow: hidden;"
    >
      <v-list-item style="background-color: white; position: relative; z-index: 1; ">
        <v-list-item-avatar
          style="background-color: white; margin-right: 1rem; "
          color="grey"
          ><v-img :src="event.organizerImage"></v-img>
        </v-list-item-avatar>
        <v-list-item-content
          style="font-weight:bold"
        >
          <v-list-item-title
            class="headline"
            style="white-space: pre-wrap; font-weight: bolder; "
            >{{ event.title }}</v-list-item-title
          >
          <v-list-item-subtitle 
          style="color: black; font-weight:bold">by {{ event.organizer }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>

      <v-img v-bind:src="event.image" height="200"> </v-img>

      <v-card-text>
        <p
          style=" text-overflow: ellipsis; word-wrap: break-word; max-height: 3.6em; line-height: 1.8em; overflow: hidden"
        >
          {{ event.description }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn text v-show="event.canRegister">
          <a
            style="text-decoration: none; color: black"
            v-bind:href="event.registerUrl"
            target="_blank"
            >Register</a
          >
        </v-btn>

        <v-btn text 
        @click="onClickButton"
        >
          Read More
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon v-on:click="toogleBookmark()">
          <v-icon v-bind:style="{ color: event.bookmarked ? 'pink' : 'grey' }"
            >mdi-heart</v-icon
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
//import EventDialog from "./eventDialog";
export default {
  name: "EventCard",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    let dsc_event = JSON.parse(localStorage.getItem("dsc_event"));

    if (!dsc_event) dsc_event = {};
    if (!dsc_event.bookmarked) dsc_event.bookmarked = {};
    if (dsc_event.bookmarked[this.event.id] === undefined)
      dsc_event.bookmarked[this.event.id] = false;
    localStorage.setItem("dsc_event", JSON.stringify(dsc_event));
    this.event.bookmarked = dsc_event.bookmarked[this.event.id];
  },
  methods: {
    toogleBookmark() {
      let dsc_event = JSON.parse(localStorage.getItem("dsc_event"));
      dsc_event.bookmarked[this.event.id] = !dsc_event.bookmarked[
        this.event.id
      ];
      this.event.bookmarked = dsc_event.bookmarked[this.event.id];
      localStorage.setItem("dsc_event", JSON.stringify(dsc_event));
    },
    onClickButton () {
      this.$emit('selectEvent', this.event.id)
    }
  },
  // components: {
  //   //EventDialog,
  // },
  props: {
    event: {
      type: Object,
      default: function() {
        return {
          canRegister: false,
          createdDate: new Date(),
          id: "123",
          title: "123",
        };
      },
    },
  },
};
</script>
