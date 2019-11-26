import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

interface RootState {
  authenticated: boolean;
  token: string;
}

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    authenticated: false,
    token: ""
  },
  mutations: {
    setToken(state, token) {
      state.authenticated = true;
      state.token = token;
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
});
