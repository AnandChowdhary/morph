<template>
  <div class="translate">
    <h1>{{ user }}/{{ repo }}</h1>
    <p class="lead">Help us translate this project to more languages.</p>
    <div class="row">
      <div>
        <div>{{ files.length }}</div>
        <div>Languages</div>
      </div>
      <div>
        <div>
          {{ (files.length / Object.keys(languages).length).toFixed(1) }}%
        </div>
        <div>Completed</div>
      </div>
    </div>
    <div v-if="loading">
      <p class="lead">Loading...</p>
    </div>
    <table v-else>
      <tbody>
        <tr v-for="lang of files" :key="`l${lang.name}`">
          <td>
            <img
              alt=""
              :src="
                `https://unpkg.com/language-icons/icons/${
                  lang.name.split('.')[0]
                }.svg`
              "
            />
          </td>
          <td>{{ languages[lang.name.split(".")[0]] }}</td>
          <td><a :href="lang.html_url">GitHub</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class Translate extends Vue {
  user = "";
  repo = "";
  dir = "";
  filetype = "";
  completed = 0;
  files = [];
  languages = {
    en: "English",
    fr: "French",
    nl: "Dutch"
  };
  loading = false;

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

  async mounted() {
    this.loading = true;
    const response = await axios.get(
      `https://api.github.com/repos/${this.user}/${this.repo}/contents/${this.dir}?access_token=${this.$store.state.token}`
    );
    this.files = response.data.filter(
      file =>
        file.name.endsWith(this.filetype) &&
        Object.keys(this.languages).includes(file.name.split(".")[0])
    );
    this.loading = false;
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
table th {
  font-weight: 600;
}
table td,
table th {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  &:first-child {
    padding: 0;
  }
}
table tr {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

table tr:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0.05);
}
table {
  margin-top: 4rem;
  width: 100%;
  img {
    height: 2.5rem;
    width: 2.5rem;
  }
}
</style>
