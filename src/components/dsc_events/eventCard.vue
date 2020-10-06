<template>
  <v-container>
	<EventDialog v-model="this.show" @close='this.show=false' />
    <v-card
      max-width="344"
      class="mx-auto"
      style="position: relative; overflow: hidden; font-family: 'Courier New';"
    >
      <v-list-item style="position: absolute; z-index: 1; ">
        <v-list-item-avatar
          style="background-color: white; margin-right: 1rem; "
          color="grey"
          ><v-img :src="event.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content
          style="text-shadow: 0px 0px 1px white; font-weight:bold"
        >
          <v-list-item-title
            class="headline"
            style="white-space: pre-wrap; font-weight: bolder; "
            >{{ event.title }}</v-list-item-title
          >
          <v-list-item-subtitle>by {{ event.authorName }}</v-list-item-subtitle>
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
        <v-btn text>
          <a
            style="text-decoration: none; color: black"
            v-bind:href="event.registerUrl"
            target="_blank"
            >{{ event.canRegister ? "Register" : "" }}</a
          >
        </v-btn>

        <v-btn text @click="toggle">
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
import EventDialog from "./eventDialog";
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
    if (dsc_event.bookmarked[this.event.id] == undefined)
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
    toggle() {
      this.show = true;
      console.log(this.show);
    },
  },
  components: {
    EventDialog,
  },
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
