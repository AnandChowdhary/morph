<template>
  <div class="translate">
    <h1>{{ user }}/{{ repo }}</h1>
    <p class="lead">Help us translate this project to more languages.</p>
    <div class="row">
      <div>
        <div>{{ languages }}</div>
        <div>Languages</div>
      </div>
      <div>
        <div>{{ completed }}%</div>
        <div>Completed</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Translate extends Vue {
  user = "";
  repo = "";
  dir = "";
  filetype = "";
  languages = 0;
  completed = 0;

  created() {
    if (!this.$store.state.authenticated) this.$router.replace("/");
    if (this.$route.params.user)
      this.user = this.$route.params.user || "elninotech";
    if (this.$route.params.repo)
      this.repo = this.$route.params.repo || "uppload";
    if (this.$route.query.dir) this.dir = this.$route.query.dir || "src/i18n";
    if (this.$route.query.filetype)
      this.filetype = this.$route.query.filetype || "json";
  }
}
</script>

<style lang="scss" scoped>
.translate {
  text-align: center;
  margin: 5rem auto;
  max-width: 700px;
}
.row {
  display: flex;
  > * {
    flex: 1 0 0;
    &:first-child {
      margin-right: 0.5rem;
    }
    &:last-child {
      margin-left: 0.5rem;
    }
    > div {
      &:first-child {
        font-size: 400%;
      }
    }
  }
}
p.lead {
  font-size: 150%;
  margin-bottom: 2rem;
}
</style>
