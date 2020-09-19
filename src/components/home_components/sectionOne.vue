<template>
  <section id="one" class="wrapper">
    <div class="box">
      <article>
        <header>
          <h2>What is DSC</h2>
          <p>Developer Student Club</p>
        </header>
        <hr />
        <div class="content">
          <p>
            Developer Student Clubs are university based community groups for
            students interested in Google developer technologies. Students from
            all undergraduate or graduate programs with an interest in growing
            as a developer are welcome. By joining a DSC, students grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </p>
          <div class="embeded-video">
            <b-embed
              type="iframe"
              width="1263"
              height="480"
              src="https://www.youtube.com/embed/DcN_hcHXR_0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></b-embed>
          </div>

          <b-button variant="dark">
            <a href="https://developers.google.com/community/dsc">
              Learn More
            </a></b-button
          >
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: white;
}
.wrapper {
  padding: 6em 0;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../../assets/images/banner2.jpg");
  border-top: 0;
  height: auto;
  text-align: center;
  overflow: hidden;
}

.box {
  min-width: 80%;
  max-height: auto;
  height: auto;
  background-color: rgba($color: white, $alpha: 0.9);
  display: block;
  overflow: hidden;
  padding: 5em;
  width: 50%;
  margin: auto;
}

.embeded-video {
  margin: 2em 0 2em 0;
}
</style>
