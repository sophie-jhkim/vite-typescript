import { createApp } from "vue";
import {createPinia} from "pinia"
import GoogleMaterialIcon from "./plugins/GoogleMaterialIcon";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import "./assets/styles/base.scss";
import "./assets/styles/layout.scss";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia()
const app = createApp(App)
app.use(router)
.use(pinia)
.use(GoogleMaterialIcon)
.mount("#app");
