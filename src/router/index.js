import Vue from "vue";
import VueRouter from "vue-router";
import SearchLandingPage from "../views/SearchLandingPage.vue";
import SearchResultsPage from "../views/SearchResultsPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
            { path: '/', name: 'searchLandingPage', component: SearchLandingPage },
            { path: '/results', name: 'results', component: SearchResultsPage },
          ]
});

export default router;