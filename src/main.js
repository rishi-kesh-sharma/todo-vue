import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/pages/LoginPage.vue";
import SignUpPage from "./components/pages/SignUpPage.vue";
import HomePage from "./components/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignUpPage },
    { path: "/", component: HomePage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
