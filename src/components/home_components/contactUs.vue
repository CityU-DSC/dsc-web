<template>
  <div id="contact" class="contactUs">
    <h3>Contact Us !!</h3>
    <div>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                  label="First name"
                  required
                  v-model="submission.firstName"

              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                  label="Last name"
                  required
                  v-model="submission.lastName"

              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                  label="Email"
                  required
                  v-model="submission.email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-textarea
                name="input-7-1"
                label="Tell us what you think. Any ideas or suggestions?"
                v-model="submission.description"
            ></v-textarea>
          </v-row>
          <v-row style="display: block"  align="center" justify="center">
            <div class="submit-button">
              <v-btn style='margin-right: 2rem;' @click="submit">Submit</v-btn>
              <v-btn @click="reset">Reset</v-btn>
            </div>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import { db } from '@/config/firebaseConfig'
export default {
  computed: {},
  data: () => ({
    submission: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    }
  }),
  methods: {
    async submit(){
      if (this.submission.firstName && this.submission.lastName) {
        await db.collection("contact_us").add({
          firstName: this.submission.firstName,
          lastName: this.submission.lastName,
          email: this.submission.email,
          description: this.submission.description,
        });
        alert('Thank you for submitting :)');
        this.$refs.form.reset()
      } else {
        alert('Please fill in the firstName & lastName');
      }
    },
    reset(){
      this.$refs.form.reset()
    },
  },
};
</script>

<style lang="scss" scoped>
.contactUs{
  text-align: center;
  align-content: center;
}
.contactUs h3 {
  margin-top: 2rem;
  font-weight: bold;
}
</style>
