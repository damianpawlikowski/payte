import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";

import "./assets/styles/main.css";
import "animate.css";

createApp(App).use(createPinia()).use(router).use(i18n).mount("#app");
