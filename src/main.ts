import Vue3Toastify from "vue3-toastify";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import "vue3-toastify/dist/index.css";
import "./style.css";

import App from "./App.vue";
import routes from "./router/index.router";

import { configToast } from "./lib/toast";

import { formatThousands } from "./directives/thousand.directive";
import { queryClient } from "./lib/tanstackQuery";

const app = createApp(App);

app.use(routes);
app.use(Vue3Toastify, configToast);
app.use(VueQueryPlugin, { queryClient });

app.directive("thousand", formatThousands);

app.mount("#app");
