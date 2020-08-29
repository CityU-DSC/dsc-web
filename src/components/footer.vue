<template>
  <div class="footer">
    <p>all rights reserved to @CityU DSC</p>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: white;
  color: black;
  width: 100%;
  max-height: 50%;
  border-radius: abs($number: 10);
  display: block;
  position: absolute;
}

.footer p {
  text-align: center;
  line-height: 60px;
}
</style>
