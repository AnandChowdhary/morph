<template>
  <div class="home">
    <h1>Logging in...</h1>
    <p class="lead">Community-powered localization for open-source projects</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Translate extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  margin: 5rem auto;
  max-width: 700px;
}
p.lead {
  font-size: 150%;
  margin-bottom: 2rem;
}
p.setup {
  margin-top: 2rem;
}
</style>
