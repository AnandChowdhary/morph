<template>
  <div>
    <button @click="login">Login with GitHub &rarr;</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  login() {
    const url = `https://github.com/login/oauth/authorize?client_id=Iv1.b2c83c354835a430&redirect_uri=${encodeURIComponent(
      "https://morph.anandchowdhary.now.sh/callback"
    )}&scope=${encodeURIComponent("repo user")}`;
    window.location.href = url;
  }
}
</script>

<style scoped lang="scss">
button {
  font: inherit;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.2rem;
  font-size: 150%;
}
</style>
