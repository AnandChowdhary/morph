<template>
  <div class="home">
    <h1>Morph</h1>
    <p class="lead">Community-powered localization for open-source projects</p>
    <Login msg="Welcome to Your Vue.js App" />
    <p class="setup">
      <router-link to="/setup">Set up your project</router-link>
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Login from "@/components/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class Translate extends Vue {}
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
