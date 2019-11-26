<template>
  <div>
    <button>Login with GitHub &rarr;</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
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
