<template>
  <div class="home">
    <h1>Logging in...</h1>
    <p class="lead">Community-powered localization for open-source projects</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class Translate extends Vue {
  async mounted() {
    const code = this.$route.query.code;
    if (!code) return this.$router.replace("/");
    try {
      const result = (
        await axios.post("https://morph.anandchowdhary.now.sh/api/login", {
          code
        })
      ).data;
      window.console.log("Hello, world!", result);
    } catch (error) {
      window.console.log("Got error", error);
    }
  }
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
