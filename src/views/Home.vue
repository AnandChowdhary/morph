<template>
  <div class="home">
    <h1>Morph</h1>
    <p class="lead">Community-powered localization for open-source projects</p>
    <Login msg="Welcome to Your Vue.js App" />
    <p class="setup"><router-link to="/">Set up your project</router-link></p>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  }
};
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
