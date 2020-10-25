<template>
    <v-dialog v-model="show" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="show = false">
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "EventDialog",
  props: {
    value: Boolean,
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        // if (!value) this.$emit("close");
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped>
.v-dialog__container{
	display: block;
}
</style>
