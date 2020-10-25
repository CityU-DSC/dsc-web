<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="fixed-top">
      <img src="../assets/icons/dsc_logo.png" alt="" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="" id="nav-collapse" is-nav>
        <b-navbar-nav class="">
          <b-nav-item> <router-link to="/">Home</router-link> </b-nav-item>
          <b-nav-item href="/#one"> <a class="router-link-active">Intro</a></b-nav-item>
          <b-nav-item>
            <router-link to="/projects">Projects</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/events">Events</router-link>
          </b-nav-item>
          <b-nav-item> Contact Us</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button
            >
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CH</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    methods: {},
  };
</script>

<style scoped>
.header-bar {
  background-color: #ffffff;
  color: black;
  opacity: 1;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  height: 12ex;
}

.center {
  margin: auto;
  width: 50%;
}
</style>
