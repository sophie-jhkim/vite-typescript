import { createApp } from "vue";
import "./assets/styles/base.css";
import "./assets/styles/layout.scss";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
