import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import App from "./App.vue";
import routes from "./router/index.router";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(routes);
app.use(pinia);
app.use(VueQueryPlugin);

app.mount("#app");
