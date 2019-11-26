<template>
  <div class="setup">
    <h1>Setup</h1>
    <p class="lead">Setup your open-source project for localization</p>
    <form>
      <label>
        <span>GitHub username</span>
        <input type="text" placeholder="elninotech" required />
      </label>
      <label>
        <span>Repository name</span>
        <input type="text" placeholder="uppload" required />
      </label>
      <div class="row">
        <label>
          <span>I18N directory</span>
          <input type="text" placeholder="src/i18n" required />
        </label>
        <label>
          <span>Files type</span>
          <input type="text" placeholder="json" required />
        </label>
      </div>
      <router-link to="/" class="button">Create link</router-link>
    </form>
  </div>
</template>

<style lang="scss" scoped>
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
  }
}
.setup {
  text-align: center;
  margin: 5rem auto;
  max-width: 700px;
}
p.lead {
  font-size: 150%;
  margin-bottom: 2rem;
}
form {
  max-width: 400px;
  margin: auto;
}
label {
  display: block;
  margin-bottom: 1.5rem;
  text-align: left;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
}
input,
a.button {
  font: inherit;
  box-sizing: border-box;
  width: 100%;
  display: block;
  font-size: 150%;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
a.button {
  background-color: #4834d4;
  color: #fff;
}
</style>
