import Vue3Toastify from "vue3-toastify";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import "vue3-toastify/dist/index.css";
import "./style.css";

import App from "./App.vue";
import routes from "./router/index.router";

import { configToast } from "./lib/toast";
import { vueQueryPluginOptions } from "./lib/tanstackQuery";
import { formatThousands } from "./directives/thousand.directive";

const app = createApp(App);

app.use(routes);
app.use(Vue3Toastify, configToast);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.directive('thousand', formatThousands)

app.mount("#app");
