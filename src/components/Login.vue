<template>
  <div>
    <input v-model="token" placeholder="Access token" />
    <button @click="login">Login with GitHub &rarr;</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  token = "";
  login() {
    this.$store.commit("setToken", this.token);
    // const url = `https://github.com/login/oauth/authorize?client_id=Iv1.b2c83c354835a430&redirect_uri=${encodeURIComponent(
    //   "https://morph.anandchowdhary.now.sh/callback"
    // )}&scope=${encodeURIComponent("repo user")}`;
    // window.location.href = url;
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
input {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1.25rem;
  border-radius: 0.2rem;
  border: 1px solid #ddd;
  font: inherit;
  margin-bottom: 1rem;
}
</style>
