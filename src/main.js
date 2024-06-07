import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/../public/css/base.css";
import "@/../public/fonts/iconfont/iconfont.css";

createApp(App).use(store).use(router).mount("#app");
