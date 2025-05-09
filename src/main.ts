import { createApp } from "vue";
import router from "@/router";
import "./style.css";
import App from "./App.vue";
import AppLink from "./components/AppLink.vue";
createApp(App).component("AppLink", AppLink).use(router).mount("#app");
